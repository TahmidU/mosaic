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
  display: flex;
  flex-direction: column;

  > span:first-child {
    ${({ theme }) => theme.fonts.main.massive};
  }

  > span:nth-child(2) {
    ${({ theme }) => theme.fonts.main.big};
  }

  > span:nth-child(3) {
    ${({ theme }) => theme.fonts.main.regular};
  }
`;
MovieInfoStyle.displayName = "MovieInfoStyle";
