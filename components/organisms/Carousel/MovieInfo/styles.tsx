import { motion } from "framer-motion";
import styled from "styled-components";

export const TextStyle = styled(motion.div)`
  position: absolute;
  color: ${({ theme }) => theme.main};
  top: 55%;
  left: 2%;
  width: 100%;

  > p:first-child {
    position: relative;
    z-index: 10;
    ${({ theme }) => theme.fonts.main.humongous};
    top: -40px;
    left: 2%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > p:nth-child(2) {
    position: relative;
    z-index: 10;
    ${({ theme }) => theme.fonts.main.massive};
    font-weight: 100;
    top: -115px;
    left: 2%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  > p:nth-child(3) {
    position: relative;
    z-index: 10;
    ${({ theme }) => theme.fonts.main.big};
    font-weight: 100;
    top: -130px;
    left: 2%;
  }

  p {
    width: 90%;
    white-space: normal;
  }

  @media (max-width: 1640px) {
    > p:first-child {
      ${({ theme }) => theme.fonts.main.massive};
      top: 6px;
    }

    > p:nth-child(2) {
      ${({ theme }) => theme.fonts.main.big};
      top: -28px;
    }

    > p:nth-child(3) {
      ${({ theme }) => theme.fonts.main.medium};
      top: -40px;
    }
  }
`;
TextStyle.displayName = "TextStyle";
