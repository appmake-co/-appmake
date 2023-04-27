export const parseQuery = (queryParams, fields) => {
  const { keywords, page, per_page, filters, order } = queryParams;

  let [sort_by, sort_direction] = order ? order.split(":") : [];

  // comma not inside square braces
  let FILTER_REGEX = /,(?![^\[]*\])/;
  const BRACKET_REGEX = /\[|\]/g;

  let filterQuery = [];
  if (filters && filters.split(FILTER_REGEX).length > 0) {
    filterQuery = filters?.split(FILTER_REGEX).map((filter) => {
      let [field, operator, value] = filter.split(":");
      if (value.split(",").length > 1) {
        value = value.replace(BRACKET_REGEX, "").split(",");
      }
      return { field, operator, value };
    });
  }

  return {
    keywords,
    page,
    per_page,
    sort_by,
    sort_direction,
    filters: filterQuery,
  };
};

export const buildQueryParams = (query) => {
  let queryParams = decodeURIComponent(new URLSearchParams(query).toString());
  return queryParams;
};

export const buildQuery = (params) => {
  if (!params) return {};

  const { sort_by, sort_direction, keywords, filters, page, per_page } = params;

  let query = {
    order: "id:desc",
    page: 1,
    per_page: 20,
  };

  if (page) {
    query = {
      ...query,
      page,
    };
  }

  if (per_page) {
    query = {
      ...query,
      per_page,
    };
  }

  if (sort_by && sort_direction) {
    query = {
      ...query,
      order: `${sort_by}:${sort_direction}`,
    };
  }

  if (Array.isArray(filters) && filters.length > 0) {
    let validFilters = filters
      .filter(validFilter)
      .map(({ field, operator, value }) => {
        if (Array.isArray(value)) {
          return `${field}:${operator}:[${value.join(",")}]`;
        } else {
          return `${field}:${operator}:${value}`;
        }
      });

    if (validFilters.length >= 0) {
      query = {
        ...query,
        filters: validFilters.join(","),
      };
    }
  }

  if (keywords && keywords != "") {
    query = {
      ...query,
      keywords,
    };
  }

  return query;
};

export const validFilter = (filter) => {
  const { field, operator, value } = filter;
  if (
    field != null &&
    field != "" &&
    operator != null &&
    operator != "" &&
    value != null &&
    value != ""
  ) {
    return true;
  } else {
    return false;
  }
};

export const truncate = (str, length = 60) => {
  if (!str) return "";
  if (str.length > length) {
    return str.substring(0, length) + "...";
  }
  return str;
};

export const reorder = (items, startIndex, endIndex) => {
  const result = Array.from(items);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result.map((item, index) => ({
    ...item,
    position: index + 1,
  }));
};

export const isSearchFilters = (url) => {
  const queryParams = router.query;
  const { keywords, filters, order } = queryParams;

  if (keywords || filters?.length > 0 || order) {
    return true;
  } else {
    return false;
  }
};
