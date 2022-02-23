import Image from "next/image";
import styled from "styled-components";
import SlideButton from "./SlideButton";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;
  margin: 2rem 1rem;
`;
Container.displayName = "Container";

export const CarouselMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  max-width: 1280px;
  height: auto;
  max-height: 720px;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
`;
CarouselMainContainer.displayName = "CarouselMainContainer";

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  height: fit-content;
  max-height: 720px;
  position: relative;

  > span:nth-child(2) {
    border-radius: 48px;
  }
`;
CarouselContainer.displayName = "CarouselContainer";

export const ImageContainer = styled.div``;
ImageContainer.displayName = "ImageContainer";

export const TextStyle = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.main};
  top: 55%;
  left: 2%;
  width: 100%;

  > p:first-child {
    position: absolute;
    z-index: 10;
    ${({ theme }) => theme.fonts.main.humongous};
    font-weight: bolder;
    top: -40px;
    left: 2%;
  }

  > p:nth-child(2) {
    position: absolute;
    z-index: 10;
    ${({ theme }) => theme.fonts.main.massive};
    top: 80px;
    left: 2%;
  }

  > p:nth-child(3) {
    position: absolute;
    z-index: 10;
    ${({ theme }) => theme.fonts.main.massive};
    top: 160px;
    left: 2%;
  }
`;
TextStyle.displayName = "TextStyle";

export const SlideBtn = styled(SlideButton)`
  width: 28px;
  height: 28px;
  position: absolute;
  z-index: 10;
`;
SlideBtn.displayName = "SlideBtn";

export const NextBtn = styled(SlideBtn)`
  right: 35px;
`;
NextBtn.displayName = "NextBtn";

export const PrevBtn = styled(SlideBtn)`
  left: 35px;
`;
PrevBtn.displayName = "PrevBtn";

export const ProgBar = styled.div`
  position: absolute;
  z-index: 11;
  bottom: 0;
  width: calc(100% - 80px);
`;
ProgBar.displayName = "ProgBar";
