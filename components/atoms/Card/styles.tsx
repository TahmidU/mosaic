import styled from "styled-components";

export const Container = styled.div`
  max-width: 160px;
  width: 100%;
  height: 330px;
  max-height: 330px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 0.25rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.cGrey.alpha(0.1).toString()};
  box-shadow: 2px 2px 8px 0px rgb(33 31 27 / 14%);
`;
Container.displayName = "Container";
