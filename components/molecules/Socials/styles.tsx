import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  > a {
    all: unset;
    cursor: pointer;
  }

  a:first-child {
    margin: 0 0.5rem 0 0;
  }

  a:not(:first-child):not(:last-child) {
    margin: 0 0.5rem;
  }

  a:last-child {
    margin: 0 0 0 0.5rem;
  }
`;
Container.displayName = "Container";
