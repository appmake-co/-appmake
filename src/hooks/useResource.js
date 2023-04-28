import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { ApiContext } from "../index";
import { buildQuery } from "../lib/helpers";
import { useAlerts } from "../index";
import { useRouter } from "next/router";

/* useResource
  A base hook that allows for CRUD operations of a REST API that follows
  standard REST patterns of GET POST PUT and DELETE to create, update, create and
  destroy objects.
  @param id - The resource ID to auto fetch
  @param url - The API endpoint. The is set dynamically using setEndpoint
  @param name - The name of the resource needed when using POST and PUT
*/

const emptyQuery = {
  keywords: null,
  page: 1,
  per_page: 20,
  filters: [],
  order: "id:desc",
};

const useResource = ({
  url,
  name = "resource",
  defaultQuery = emptyQuery,
  ...props
}) => {
  const router = useRouter();

  if (Object.keys(defaultQuery).length === 0) {
    defaultQuery = emptyQuery;
  }

  const { api } = useContext(ApiContext);
  const { showAlertError } = useAlerts();
  const [query, setQuery] = useState({});
  const [activeFilters, setActiveFilters] = useState([defaultQuery.filters]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [errors, setErrors] = useState();
  const [id, setId] = useState(props.id);
  const [resource, setResource] = useState({ id: props.id });
  const [resources, setResources] = useState([]);
  const [meta, setMeta] = useState({});
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [numPages, setNumPages] = useState(1);
  const [sortBy, setSortBy] = useState(`id`);
  const [sortDirection, setSortDirection] = useState("desc");
  const [totalCount, setTotalCount] = useState(0);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  const findOne = async (id) => {
    if (!id) return null;
    try {
      showLoading();
      setLoaded(false);
      setId(id);
      const res = await api.get(`${url}/${id}`);
      if (res?.data) {
        setResource(res.data);
      }
      if (res?.meta) {
        setMeta(res.meta);
      }
      setLoaded(true);
      return res.data;
    } catch (e) {
      console.log(e);
    } finally {
      hideLoading();
    }
  };

  const findMany = async (query, loadMore = false) => {
    if (url.includes("undefined")) return;
    try {
      showLoading();
      const queryParams = buildQuery(query);
      setQuery(query);
      setParams(params);
      if (!loadMore) {
        setLoaded(false);
      }
      const res = await api.get(url, {
        params: queryParams,
      });
      if (res.data) {
        if (!loadMore) {
          setResources(res.data);
        } else {
          setResources([...resources, ...res.data]);
        }
        if (res.meta) {
          setMeta(res.meta);
          setPage(res.meta.page);
          setPerPage(res.meta.per_page);
          setNumPages(res.meta.num_pages);
          setTotalCount(res.meta.total_count);
        }
        setEmpty(res?.data?.length > 0 ? false : true);
        setLoaded(true);
        return res.data;
      }
    } catch (e) {
      console.log(e);
    } finally {
      hideLoading();
    }
  };

  const loadMore = () => {
    let nextPage = page + 1;
    let loadMoreResults = true;
    findMany(
      {
        ...query,
        page: nextPage,
      },
      loadMoreResults
    );
  };

  const save = (resource, showLoaders = false) => {
    if (resource?.id) {
      return update(resource, showLoaders);
    } else {
      return create(resource, showLoaders);
    }
  };

  const create = async (resource) => {
    if (hasFilesAttached(resource)) {
      return createWithFiles(resource);
    }
    try {
      showLoading();
      setErrors();
      const res = await api.post(url, {
        [name]: resource,
      });
      if (res?.data?.id) {
        setResource(res.data);
        setLoaded(true);
        setId(res.data.id);
      }
      return res.data;
    } catch (e) {
      handleErrors(e);
    } finally {
      hideLoading();
    }
  };

  const update = async (resource) => {
    if (hasFilesAttached(resource)) {
      return updateWithFiles(resource);
    }
    try {
      setId(resource.id);
      showLoading();
      setErrors();
      const res = await api.put(`${url}/${resource.id}`, {
        [name]: resource,
      });
      return res.data;
    } catch (e) {
      handleErrors(e);
    } finally {
      hideLoading();
    }
  };

  const destroy = async (id) => {
    try {
      showLoading();
      setErrors();
      const res = await api.delete(`${url}/${id}`);
      setResource({ data: {} });
      return res;
    } catch (e) {
      handleErrors(e);
    } finally {
      hideLoading();
    }
  };

  const updateMany = async (ids, resource) => {
    try {
      showLoading();
      setErrors();
      const res = await api.post(`${url}/update_many`, {
        ids: ids,
        resource: resource,
      });
      return res.data;
    } catch (e) {
      handleErrors(e);
    } finally {
      hideLoading();
    }
  };

  const deleteMany = async (ids) => {
    try {
      showLoading();
      setErrors();
      const res = await api.post(`${url}/delete_many`, {
        ids: ids,
      });
      return res.data;
    } catch (e) {
      handleErrors(e);
    } finally {
      hideLoading();
    }
  };

  const createWithFiles = async (resourceWithFiles) => {
    try {
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      showLoading();
      setErrors();
      let formData = new FormData();
      Object.keys(resourceWithFiles).forEach((key) => {
        if (resourceWithFiles[key]) {
          formData.append(`${name}[${key}]`, resourceWithFiles[key]);
        }
      });
      const res = await api.post(url, formData, config);
      if (res?.data?.id) {
        setResource(res.data);
        setLoaded(true);
        setId(res.data.id);
      }
      return res.data;
    } catch (e) {
      handleErrors(e);
    } finally {
      hideLoading();
    }
  };

  const updateWithFiles = async (resourceWithFiles) => {
    try {
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      showLoading();
      setErrors();
      let formData = new FormData();
      Object.keys(resourceWithFiles).forEach((key) => {
        if (resourceWithFiles[key]) {
          formData.append(`${name}[${key}]`, resourceWithFiles[key]);
        }
      });
      const res = await api.put(
        `${url}/${resourceWithFiles.id}`,
        formData,
        config
      );
      if (res?.data?.id) {
        setResource(res.data);
        setLoaded(true);
        setId(res.data.id);
      }
      return res.data;
    } catch (e) {
      handleErrors(e);
    } finally {
      hideLoading();
    }
  };

  const addItems = async (resourceName, resourceIds) => {
    try {
      showLoading();
      setErrors();
      const res = await api.post(`${url}/${id}/add_items`, {
        item: {
          name: resourceName,
          ids: resourceIds,
        },
      });
      return res.data;
    } catch (e) {
      handleErrors(e);
    } finally {
      hideLoading();
    }
  };

  const removeItems = async (resourceName, resourceIds) => {
    try {
      showLoading();
      setErrors();
      const res = await api.post(`${url}/${id}/remove_items`, {
        item: {
          name: resourceName,
          ids: resourceIds,
        },
      });
      return res.data;
    } catch (e) {
      handleErrors(e);
    } finally {
      hideLoading();
    }
  };

  const updatePositions = async (sorted) => {
    try {
      showLoading();
      setErrors();
      const resp = await api.post(`${url}/update_positions`, {
        ids: sorted.map((resource) => resource.id),
        positions: sorted.map((_, index) => index),
      });
      if (resp?.data) {
        setResources(resp?.data);
      }
      return resp?.data;
    } catch (e) {
      handleErrors(e);
    } finally {
      hideLoading();
    }
  };

  const addAttachment = async (resourceName, resourceId) => {
    try {
      showLoading();
      setErrors();
      const res = await api.post(`${url}/${id}/add_attachment`, {
        attachment: {
          name: resourceName,
          id: resourceId,
        },
      });
      return res.data;
    } catch (e) {
      handleErrors(e);
    } finally {
      hideLoading();
    }
  };

  const removeAttachment = async (resourceName, resourceId) => {
    try {
      showLoading();
      setErrors();
      const res = await api.post(`${url}/${id}/remove_attachment`, {
        attachment: {
          name: resourceName,
          id: resourceId,
        },
      });
      setResource(res?.data);
      return res.data;
    } catch (e) {
      handleErrors(e);
    } finally {
      hideLoading();
    }
  };

  const paginate = (page) => {
    findMany({
      ...query,
      page: page,
    });
  };

  const handleChange = (ev) => {
    const { name } = ev.target;
    const value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setResource({
      ...resource,
      [name]: value,
    });
  };

  const reloadOne = () => {
    findOne(id);
  };

  const reloadMany = () => {
    findMany(query);
  };

  const sortAll = ({ sortBy, sortDirection }) => {
    setSortBy(sortBy);
    setSortDirection(sortDirection);
    findMany({
      ...query,
      order: `${sortBy}:${sortDirection}`,
    });
  };

  const handleErrors = (e) => {
    if (e?.response?.status === 401) {
      showAlertError("You are not authorized to perform this action");
      router.push("/login");
    }
    if (e?.data?.errors) {
      setErrors(e?.data?.errors);
    }
    console.log("handleErrors", e);
  };

  const hasFilesAttached = (resource) => {
    let hasFiles = false;
    Object.keys(resource).forEach((key) => {
      if (resource[key] && resource[key].constructor === File) {
        hasFiles = true;
      }
    });
    return hasFiles;
  };

  useEffect(() => {
    if (props.id) {
      setId(props.id);
    }
  }, [props.id]);

  return {
    id,
    loading,
    loaded,
    errors,
    empty,
    resource,
    resources,
    setResource,
    setResources,
    meta,
    findOne,
    findMany,
    save,
    update,
    updateWithFiles,
    create,
    createWithFiles,
    destroy,
    updateMany,
    deleteMany,
    addItems,
    removeItems,
    addAttachment,
    removeAttachment,
    updatePositions,
    paginate,
    loadMore,
    handleChange,
    activeFilters,
    setActiveFilters,
    query,
    setQuery,
    params,
    page,
    perPage,
    numPages,
    totalCount,
    reloadOne,
    reloadMany,
    sortAll,
    sortBy,
    sortDirection,
  };
};

export default useResource;
