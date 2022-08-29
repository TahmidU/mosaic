import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export const MovieCardSkeleton = styled(Skeleton)`
  max-width: 160px;
  width: 100%;
  height: 330px;
  max-height: 330px;
`;
MovieCardSkeleton.displayName = "MovieCardSkeleton";
