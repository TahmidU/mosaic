import Image from "next/image";
import ReviewStat from "../ReviewStat";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 150px;
  width: 150px;
  max-height: 276px;
  height: 276px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  :hover {
    > div:first-child > div:last-child {
      opacity: 100%;
    }
  }
`;
Container.displayName = "Container";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 150px;
  height: 100%;
  max-height: 225px;
  position: relative;
`;
Wrapper.displayName = "Wrapper";

export const MovieImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 14px;
`;
MovieImage.displayName = "MovieImage";

export const MovieReview = styled(ReviewStat)`
  position: absolute;
  z-index: 5;
  width: 100%;
  max-width: 54px;
  height: 100%;
  max-height: 54px;
  right: 2.5%;
  top: 72%;
  opacity: 30%;
`;
MovieReview.displayName = "MovieReview";

export const MovieText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.15em;

  > span:first-child {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    ${({ theme }) => theme.fonts.tertiary.regular};
    font-weight: 600;
    margin-bottom: 0.1em;
  }

  > span:last-child {
    ${({ theme }) => theme.fonts.tertiary.small};
    font-weight: 100;
    color: ${({ theme }) => theme.grey};
  }
`;
MovieText.displayName = "MovieText";
