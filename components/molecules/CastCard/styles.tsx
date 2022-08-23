import Card from "components/atoms/Card";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled(Card)`
  max-height: 360px;
  height: 360px;
`;
Container.displayName = "Container";

export const ImageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  margin: 0 0 1rem 0;
  max-width: 150px;
  max-height: 225px;
`;
ImageWrapper.displayName = "ImageWrapper";

export const CastImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 14px;
`;
CastImage.displayName = "CastImage";

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: start;
  ${({ theme }) => theme.fonts.main.regular};

  > span {
    text-align: start;
  }

  > span:first-child {
    font-weight: bold;
    margin: 0 0 0.25em 0;
  }

  > span:not(:first-child) {
    font-weight: 300;
  }
`;
TextSection.displayName = "TextSection";
