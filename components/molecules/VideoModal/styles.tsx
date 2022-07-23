import SlideButton from "../SlideButton";
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.cBlack.alpha(0.7).toString()};
  width: 100%;
  height: 100%;
  z-index: 99999;
`;
Overlay.displayName = "Overlay";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99999;
`;
Container.displayName = "Container";

const SlideBtn = styled(SlideButton)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
SlideBtn.displayName = "SlideBtn";

export const LeftBtn = styled(SlideBtn)`
  position: fixed;
  top: 40%;
  left: 2%;
`;
LeftBtn.displayName = "LeftBtn";

export const RightBtn = styled(SlideBtn)`
  position: fixed;
  top: 40%;
  right: 2%;
`;
RightBtn.displayName = "RightBtn";

export const VideoContainer = styled.div`
  position: fixed;
  top: 5%;
  right: 15%;
  width: 70%;
  height: 90%;
  background-color: transparent;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 45%;
    right: 5%;
    top: 28%;
  }

  @media only screen and (max-width: 500px) {
    width: 90%;
    height: 30%;
    right: 5%;
    top: 28%;
  }
`;
VideoContainer.displayName = "VideoContainer";

export const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  max-height: 720px;
  background-color: transparent;
`;
Frame.displayName = "Frame";

export const CloseBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  cursor: pointer;
  width: 42px;
  height: 42px;
  right: 4%;
  top: 5%;

  svg,
  path {
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.cAlmostWhite.alpha(0.7).toString()};
    fill: ${({ theme }) => theme.cAlmostWhite.alpha(0.7).toString()};
    stroke: ${({ theme }) => theme.cAlmostWhite.alpha(0.7).toString()};
  }

  :hover {
    svg,
    path {
      color: ${({ theme }) => theme.cAlmostWhite.alpha(0.85).toString()};
      fill: ${({ theme }) => theme.cAlmostWhite.alpha(0.85).toString()};
      stroke: ${({ theme }) => theme.cAlmostWhite.alpha(0.85).toString()};
    }
  }

  @media only screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
    right: 5%;
    top: 15%;
  }
`;
CloseBtn.displayName = "CloseBtn";
