import Card from "components/atoms/Card";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled(Card)`
  width: 500px;
  max-width: 500px;
  height: 436px;
  max-height: 436px;
  padding: 0;

  > div:last-child {
    width: 100%;
    margin: 0;
  }
`;
Container.displayName = "Container";

export const ImageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  max-width: 500px;
  max-height: 350px;
`;
ImageWrapper.displayName = "ImageWrapper";

export const MediaImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 14px;
`;
MediaImage.displayName = "MediaImage";

export const TitleText = styled.p`
  text-align: start;
  width: 100%;
  ${({ theme }) => theme.fonts.main.bigger};
  padding: 0 1em;
  margin: 0.25em 0;
  font-weight: bold;
  white-space: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
TitleText.displayName = "TitleText";
