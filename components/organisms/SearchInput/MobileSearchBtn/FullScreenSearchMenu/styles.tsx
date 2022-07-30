import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
`;
Container.displayName = "Container";

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;
OptionsWrapper.displayName = "OptionsWrapper";
