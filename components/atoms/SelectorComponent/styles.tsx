import styled from "styled-components";

export const Container = styled.select`
  border-radius: 1.25rem;
  padding: 0.625rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='32' viewBox='0 0 24 24' width='32' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  ${({ theme }) => theme.fonts.main.big};
  width: 168px;
  cursor: pointer;
`;
Container.displayName = "Container";

export const Option = styled.option``;
Option.displayName = "Option";
