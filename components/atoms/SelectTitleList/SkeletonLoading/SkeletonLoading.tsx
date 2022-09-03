import { SelectTitleListSkeleton, SkeletonContainer } from "./styles";

import { ReactElement } from "react";

export default function SkeletonLoading(): ReactElement {
  return (
    <SkeletonContainer>
      {[...Array(3)].map((_, index) => (
        <SelectTitleListSkeleton key={index} />
      ))}
    </SkeletonContainer>
  );
}
