import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: space-evenly;
  align-items: center;
`;
Container.displayName = "Container";

export const CarouselContainer = styled.div`
  width: 80%;
  height: 862px;
  position: relative;
  border-radius: 12px;
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
