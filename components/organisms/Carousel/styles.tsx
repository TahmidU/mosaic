import Image from "next/image";
import styled from "styled-components";
import SlideButton from "./SlideButton";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;
Container.displayName = "Container";

export const LinearGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 48px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: linear-gradient(
    73.03deg,
    rgba(0, 0, 0, 0.25) 60.99%,
    rgba(0, 0, 0, 0) 99.38%
  ) !important;
`;
LinearGradient.displayName = "LinearGradient";

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1378px;
  height: fit-content;
  max-height: 775px;
  position: relative;

  > span:nth-child(2) {
    border-radius: 48px;
  }
`;
CarouselContainer.displayName = "CarouselContainer";

export const ImageStyle = styled(Image)``;
ImageStyle.displayName = "ImageStyle";

export const TextStyle = styled.div`
  position: absolute;
  z-index: 1;

  > p:first-child {
  }

  > p:nth-child(2) {
  }
`;
TextStyle.displayName = "TextStyle";

export const SlideBtn = styled(SlideButton)`
  width: 36px;
  height: 36px;
`;
SlideBtn.displayName = "SlideBtn";

export const NextBtn = styled(SlideBtn)`
  position: absolute;
`;
