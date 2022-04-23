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
  position: fixed;
  top: 5%;
  right: 15%;
  width: 70%;
  height: 90%;
  background-color: transparent;
  z-index: 99999;
`;
Container.displayName = "Container";

export const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;
Frame.displayName = "Frame";
