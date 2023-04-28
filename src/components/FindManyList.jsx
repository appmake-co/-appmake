import React, { useEffect } from "react";
import { useResource } from "../index";
import { Box, List, Grid } from "@mui/material";
import { Carousel, LoadMore, SearchInput } from "../index";

const DEFAULT_QUERY = {
  page: 1,
  perPage: 20
}

const FindManyList = ({
  url,
  variant = "list",
  defaultQuery=DEFAULT_QUERY,
  renderItem,
  renderSkeleton,
  enableSearch = true,
  enableInfiniteLoad = false,
  enableLoadMore = true,
  spacing = 2,
  numSkeletons = 4,
  ...props
}) => {
  let skeletons = new Array(numSkeletons).fill(0);

  const {
    loading,
    findMany,
    resources,
    query,
    page,
    perPage,
    numPages,
    loadMore,
  } = useResource({
    url,
    defaultQuery,
  });

  const handleSearch = (keywords) => {
    findMany({
      ...query,
      keywords: keywords,
      page: 1,
    });
  };

  useEffect(() => {
    if (defaultQuery) {
      findMany(defaultQuery);
    }
  }, [defaultQuery]);

  return (
    <Box sx={sx.root}>
      {enableSearch && (
        <Box sx={sx.searchInput}>
          <SearchInput handleSearch={handleSearch} />
        </Box>
      )}
      {variant == "carousel" && (
        <Carousel>
          {resources && resources.map(renderItem)}
          {loading && skeletons.map(renderSkeleton)}
        </Carousel>
      )}
      {variant == "list" && (
        <List disablePadding>
          {resources && resources.map(renderItem)}
          {loading && skeletons.map(renderSkeleton)}
        </List>
      )}
      {variant == "grid" && (
        <Grid container spacing={spacing}>
          {resources && resources.map(renderItem)}
          {loading && skeletons.map(renderSkeleton)}
        </Grid>
      )}
      <LoadMore
        loading={loading}
        page={page}
        perPage={perPage}
        numPages={numPages}
        loadMore={loadMore}
        enableInfiniteLoad={enableInfiniteLoad}
        enableLoadMore={enableLoadMore}
      />
    </Box>
  );
};

export default FindManyList;

const sx = {
  root: {},
  searchInput: {
    mb: 2,
  },
};
