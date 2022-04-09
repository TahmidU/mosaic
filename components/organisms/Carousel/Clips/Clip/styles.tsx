import styled from "styled-components";

export const Container = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "grid" : "none")};
  grid-template-columns: 10% 90%;
  grid-template-areas: "thumb meta";

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

    margin: 0.25em 0 0 0;

    ${({ theme }) => theme.fonts.main.big};

    > span:first-child {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    > span:last-child {
      ${({ theme }) => theme.fonts.main.regular};
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
