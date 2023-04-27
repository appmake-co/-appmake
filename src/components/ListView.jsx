import React from "react";
import { ListViewItem, ListViewSkeleton, FindManyList } from "../index";

const handleRenderItem = (item, i) => <ListViewItem key={i} item={item} />;

const handleRenderSkeleton = (_, i) => <ListViewSkeleton key={i} />;

const ListView = ({
  url,
  defaultQuery = {},
  enableSearch = true,
  enableInfiniteLoad = false,
  enableLoadMore = true,
  numSkeletons = 3,
  renderItem = handleRenderItem,
  renderSkeleton = handleRenderSkeleton,
  ...props
}) => {
  return (
    <FindManyList
      url={url}
      variant="list"
      defaultQuery={defaultQuery}
      renderItem={renderItem}
      renderSkeleton={renderSkeleton}
      enableSearch={enableSearch}
      enableInfiniteLoad={enableInfiniteLoad}
      enableLoadMore={enableLoadMore}
      numSkeletons={numSkeletons}
    />
  );
};

export default ListView;
