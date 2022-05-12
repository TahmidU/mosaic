import styled from "styled-components";

export const CustomThumb = styled.div`
  background-color: ${({ theme }) => theme.cBlack.alpha(0.8).toString()};
  border-radius: 1rem;
  width: 8px;

  :hover,
  :active {
    background-color: ${({ theme }) => theme.cBlack.alpha(1).toString()};
  }
`;
CustomThumb.displayName = "CustomThumb";

export const CustomTrack = styled.div`
  position: absolute;
  top: 0;
  right: 1px;
  background-color: ${({ theme }) => theme.cGrey.alpha(0.45).toString()};
  border-radius: 1rem;
  width: 8px;
  height: 100%;
`;
CustomTrack.displayName = "CustomTrack";
