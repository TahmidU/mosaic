import styled from "styled-components";

export const CustomThumb = styled.div`
  background-color: ${({ theme }) => theme.cBlack.alpha(0.8).toString()};
  border-radius: 1rem;
  width: 6px;

  :hover,
  :active {
    background-color: ${({ theme }) => theme.cBlack.alpha(1).toString()};
  }
`;
CustomThumb.displayName = "CustomThumb";
