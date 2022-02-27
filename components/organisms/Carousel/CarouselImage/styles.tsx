import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)<{
  index: number;
  currentStep: number;
}>`
  //display: inline-block;
  position: relative;
  max-width: 1280px;
  max-height: 720px;
  width: 100%;
  height: auto;
  top: calc(${({ index }) => `${index} * -37.5vw`});
`;
Container.displayName = "Container";

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
    rgba(0, 0, 0, 0.1125) 60.94%,
    rgba(0, 0, 0, 0) 99.99%
  ) !important;
`;
LinearGradient.displayName = "LinearGradient";

export const ImageStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 48px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: linear-gradient(
    359.99deg,
    rgba(0, 0, 0, 0.75) 31.25%,
    rgba(0, 0, 0, 0.1125) 60.94%,
    rgba(0, 0, 0, 0) 99.99%
  ) !important;
`;
ImageStyle.displayName = "ImageStyle";
