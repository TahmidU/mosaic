import styled from "styled-components";

export const Container = styled.div`
  > div:last-child {
    overflow-y: scroll;
    max-height: 720px;
    height: 38vw;
  }
`;
Container.displayName = "Container";
