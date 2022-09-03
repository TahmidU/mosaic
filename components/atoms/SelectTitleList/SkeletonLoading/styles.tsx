import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 0 0 2.75rem 0;
`;
SkeletonContainer.displayName = "SkeletonContainer";

export const SelectTitleListSkeleton = styled(Skeleton)`
  width: 120px;
  height: 28px;
`;
SelectTitleListSkeleton.displayName = "SelectTitleListSkeleton";
