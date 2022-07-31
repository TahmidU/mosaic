import { AiOutlineClose } from "react-icons/ai";
import Input from "components/atoms/Input";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  background-color: ${({ theme }) => theme.white};
  right: 0;
`;
Container.displayName = "Container";

export const OptionsWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;
OptionsWrapper.displayName = "OptionsWrapper";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 0 1rem;

  ${({ theme }) => theme.fonts.main.medium};
  span {
    text-align: center;
  }
`;
Header.displayName = "Header";

export const CloseBtn = styled.button`
  all: unset;
  cursor: pointer;
`;
CloseBtn.displayName = "CloseBtn";

export const CloseIcon = styled(AiOutlineClose)`
  width: 24px;
  height: 24px;
`;
CloseIcon.displayName = "CloseIcon";

export const SearchInputStyle = styled(Input)`
  width: 70%;
  margin: 0 auto;

  input::-webkit-search-cancel-button {
    /* Remove default */
    -webkit-appearance: none;
    /*Your new styles */
    height: 16px;
    width: 16px;
    background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
      no-repeat 50% 50%;
    background-size: contain;
  }
`;
SearchInputStyle.displayName = "SearchInputStyle";
