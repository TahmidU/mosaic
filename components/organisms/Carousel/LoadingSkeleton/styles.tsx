import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

export const CarouselSkeleton = styled(Skeleton)`
  height: 720px;
  width: 100%;

  @media only screen and (max-width: 1264px) {
    height: 55.7vw;
  }

  @media only screen and (max-width: 499px) {
    height: 70vw;
  }
`;
CarouselSkeleton.displayName = "CarouselSkeleton";
