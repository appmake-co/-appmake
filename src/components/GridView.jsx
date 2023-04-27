import PropTypes from "prop-types";
import { GridViewItem, GridViewSkeleton, FindManyList } from "../index";

const handleRenderItem = (item, i) => <GridViewItem key={i} item={item} />;

const handleRenderSkeleton = (_, i) => <GridViewSkeleton key={i} />;

const GridView = ({
  url,
  defaultQuery = {},
  enableSearch = true,
  enableInfiniteLoad = false,
  enableLoadMore = true,
  spacing = 2,
  numSkeletons = 3,
  renderItem = handleRenderItem,
  renderSkeleton = handleRenderSkeleton,
  ...props
}) => {
  return (
    <FindManyList
      url={url}
      spacing={spacing}
      variant="grid"
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

export default GridView;
