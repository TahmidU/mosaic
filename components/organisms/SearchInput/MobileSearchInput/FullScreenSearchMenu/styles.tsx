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

export const SearchInputStyle = styled(Input)`
  width: 70%;
  margin: 0 auto;
`;
SearchInputStyle.displayName = "SearchInputStyle";
