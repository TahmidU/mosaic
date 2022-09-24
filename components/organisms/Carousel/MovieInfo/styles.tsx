import { motion } from "framer-motion";
import styled from "styled-components";

export const TextStyle = styled(motion.div)`
  position: absolute;
  color: ${({ theme }) => theme.main};
  top: 55%;
  padding: 0 3em;
  width: 100%;

  > span:first-child {
    position: relative;
    z-index: 10;
    ${({ theme }) => theme.fonts.main.humongous};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  > span:nth-child(2) {
    position: relative;
    z-index: 10;
    ${({ theme }) => theme.fonts.main.massive};
    font-weight: 100;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  > span:nth-child(3) {
    position: relative;
    margin: 0.25em 0 0 0;
    z-index: 10;
    ${({ theme }) => theme.fonts.main.big};
    font-weight: 100;
  }

  span {
    display: block;
    width: 100%;
    white-space: normal;
  }

  @media (max-width: 1640px) {
    > span:first-child {
      ${({ theme }) => theme.fonts.main.colossal};
    }

    > span:nth-child(2) {
      ${({ theme }) => theme.fonts.main.big};
    }

    > span:nth-child(3) {
      ${({ theme }) => theme.fonts.main.medium};
    }
  }

  @media (max-width: 1200px) {
    > span:first-child {
      ${({ theme }) => theme.fonts.main.massive};
    }

    > span:nth-child(2) {
      ${({ theme }) => theme.fonts.main.big};
    }

    > span:nth-child(3) {
      ${({ theme }) => theme.fonts.main.medium};
    }
  }
`;
TextStyle.displayName = "TextStyle";
