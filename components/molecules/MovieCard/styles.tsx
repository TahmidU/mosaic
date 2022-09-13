import Card from "components/atoms/Card";
import Image from "next/image";
import StarRating from "../StarRating";
import styled from "styled-components";

export const Container = styled(Card)`
  > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-top: 0.75em;
    > span:first-child {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      ${({ theme }) => theme.fonts.tertiary.regular};
      font-weight: 600;
      margin-bottom: 0.1em;
    }

    > span:last-child {
      ${({ theme }) => theme.fonts.tertiary.small};
      font-weight: 100;
      color: ${({ theme }) => theme.cAlmostBlack.alpha(0.7).toString()};
    }
  }
`;
Container.displayName = "Container";

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 150px;
  max-height: 225px;
  height: fit-content;
`;
ImageWrapper.displayName = "ImageWrapper";

export const MovieImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 14px;
`;
MovieImage.displayName = "MovieImage";

export const StarRatingStyle = styled(StarRating)`
  margin: 0.2rem 0 0.3rem 0;
`;
StarRatingStyle.displayName = "StarRatingStyle";
