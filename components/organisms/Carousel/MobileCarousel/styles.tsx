import MovieInfo from "../MovieInfo";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 55.7vw;
  position: relative;
`;
Container.displayName = "Container";

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  white-space: nowrap;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
ImageContainer.displayName = "ImageContainer";

export const MovieInfoStyle = styled(MovieInfo)`
  top: 40%;
  display: flex;
  flex-direction: column;

  > p:first-child {
    ${({ theme }) => theme.fonts.main.big};
  }

  > p:nth-child(2) {
    ${({ theme }) => theme.fonts.main.regular};
  }

  > p:nth-child(3) {
    ${({ theme }) => theme.fonts.main.small};
  }
`;
MovieInfoStyle.displayName = "MovieInfoStyle";
