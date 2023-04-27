import React from "react";
import {
  FindManyList,
  CarouselViewItem,
  CarouselViewSkeleton,
} from "../index";

const handleRenderItem = (item, i) => <CarouselViewItem key={i} item={item} />;

const handleRenderSkeleton = (_, i) => <CarouselViewSkeleton key={i} />;

const CarouselView = ({
  url,
  defaultQuery = {},
  enableSearch = false,
  enableInfiniteLoad = false,
  enableLoadMore = false,
  renderItem = handleRenderItem,
  renderSkeleton = handleRenderSkeleton,
  numSkeletons = 6,
  ...props
}) => {
  return (
    <FindManyList
      url={url}
      variant="carousel"
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

export default CarouselView;
