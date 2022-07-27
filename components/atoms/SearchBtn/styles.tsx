import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)<{ show: boolean }>`
  display: flex;
  width: 100%;
  max-width: 18.75rem;
  padding: 0.625rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.cAlmostWhite.alpha(0.25).toString()};

  > div:first-child {
    width: 100%;
  }
`;
Container.displayName = "Container";

export const SearchInput = styled.input<{ show: boolean }>`
  all: unset;
  ${({ show }) => (show ? "width: 100%;" : "display:none;")}
  margin: 0 1rem;
  ${({ theme }) => theme.fonts.main.regular};
`;
SearchInput.displayName = "SearchInput";

export const SearchIcon = styled(BsSearch)`
  justify-self: center;
  min-width: 24px;
  width: 24px;
  height: auto;
  cursor: pointer;
`;
SearchIcon.displayName = "SearchIcon";
