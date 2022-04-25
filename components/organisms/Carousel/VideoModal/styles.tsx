import GrClose from "react-icons/gr";
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

export const LeftBtn = styled(SlideButton)`
  position: fixed;
  bottom: 30%;
`;
LeftBtn.displayName = "LeftBtn";

export const RightBtn = styled(SlideButton)`
  position: fixed;
  bottom: 30%;
  right: 1.5%;
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
`;
VideoContainer.displayName = "VideoContainer";

export const Frame = styled.iframe`
  width: 100%;
  height: 100%;
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
  width: 24px;
  height: 24px;
  right: 5%;
  top: 5%;

  svg,
  path {
    height: 100%;
    width: 100%;
    color: ${({ theme }) => theme.white};
    fill: ${({ theme }) => theme.white};
    stroke: ${({ theme }) => theme.white};
  }
`;
CloseBtn.displayName = "CloseBtn";
