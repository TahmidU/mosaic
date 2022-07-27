import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  max-width: 18.75rem;
  padding: 0.625rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.cAlmostWhite.alpha(0.25).toString()};
`;
Container.displayName = "Container";

export const SearchInput = styled.input`
  all: unset;
  margin: 0 1rem;
  width: 100%;
  ${({ theme }) => theme.fonts.main.regular};
`;
SearchInput.displayName = "SearchInput";

export const SearchIcon = styled(BsSearch)`
  width: 28px;
  height: auto;
  cursor: pointer;
`;
SearchIcon.displayName = "SearchIcon";
