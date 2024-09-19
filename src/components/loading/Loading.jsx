import React from "react";
import { Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <div className="p-4">
      {/* Title Skeleton */}
      <div className="mb-4">
        <Skeleton variant="text" height={50} width="80%" />
        <Skeleton variant="text" height={30} width="60%" />
      </div>

      {/* Image Skeleton */}
      <div className="mb-4">
        <Skeleton variant="rectangular" height={300} width="100%" />
      </div>

      {/* Paragraph Skeleton */}
      <div>
        {[...Array(3)].map((_, index) => (
          <Skeleton key={index} variant="text" height={30} width="100%" />
        ))}
      </div>

      {/* Card List Skeleton */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Skeleton variant="rectangular" width={100} height={100} />
            <div className="flex-1">
              <Skeleton variant="text" width="80%" height={25} />
              <Skeleton variant="text" width="60%" height={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
