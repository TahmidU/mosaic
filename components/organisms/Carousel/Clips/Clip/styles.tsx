import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-areas: "thumb meta";
  cursor: pointer;
  border-radius: 14px;
  padding: 0.425em;

  :hover {
    background-color: ${({ theme }) => theme.cGrey.alpha(0.2).toString()};
  }

  > div:first-child {
    grid-area: thumb;
  }

  > div:last-child {
    grid-area: meta;
    justify-self: start;
    align-self: flex-start;

    display: flex;
    flex-direction: column;

    height: 100%;

    margin: 0.25em 0 0 0.75em;

    > span:first-child {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      ${({ theme }) => theme.fonts.main.big};
      font-weight: 600;

      @media only screen and (max-width: 1370px) {
        ${({ theme }) => theme.fonts.main.regular};
      }
    }

    > span:last-child {
      ${({ theme }) => theme.fonts.main.regular};

      @media only screen and (max-width: 1370px) {
        ${({ theme }) => theme.fonts.main.small};
      }
    }
  }
`;
Container.displayName = "Container";

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 160px;
  height: 100%;
  max-height: 90px;

  overflow: hidden;
  span,
  img {
    border-radius: 8px;
  }
`;
ImageContainer.displayName = "ImageContainer";
