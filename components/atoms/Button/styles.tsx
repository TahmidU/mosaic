import styled from "styled-components";

export const ButtonBasis = styled.button`
  all: unset;
  cursor: pointer;
  ${({ theme }) => theme.fonts.main.regular};
`;
ButtonBasis.displayName = "ButtonBasis";

export const TextButtonContainer = styled(ButtonBasis)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
TextButtonContainer.displayName = "TextButtonContainer";
