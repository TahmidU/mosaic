import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";

export const LinearGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 48px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: linear-gradient(
    359.99deg,
    rgba(0, 0, 0, 0.75) 31.25%,
    rgba(0, 0, 0, 0.2) 60.94%,
    rgba(0, 0, 0, 0) 99.99%
  ) !important;
  pointer-events: none;
`;
LinearGradient.displayName = "LinearGradient";

export const ImageWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  //height: calc(100vh - 80px);
  overflow: hidden;
`;
ImageWrapper.displayName = "ImageWrapper";

export const ImageStyle = styled(Image)`
  width: 100%;
  //height: 100%;
  //height: fit-content;
  pointer-events: none;
`;
ImageStyle.displayName = "ImageStyle";
