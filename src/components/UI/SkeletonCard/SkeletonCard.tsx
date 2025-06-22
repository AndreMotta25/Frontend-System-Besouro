import React from "react";
import { Skeleton } from "../skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[200px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[175px]" />
      </div>
    </div>
  );
};

export default SkeletonCard;
