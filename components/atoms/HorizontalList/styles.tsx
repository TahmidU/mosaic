import SlideButton from "components/molecules/SlideButton";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import styled from "styled-components";

const SubList = dynamic(() => import("components/molecules/SubList"), {
  ssr: false,
});

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    ${({ theme }) => theme.fonts.main.massive};
    font-weight: bolder;
  }
`;
Container.displayName = "Container";

export const SubListStyle = styled(SubList)`
  @media only screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;
SubListStyle.displayName = "SubListStyle";

export const ListWrapper = styled.div`
  display: flex;
  position: relative;
  height: 350px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
ListWrapper.displayName = "ListWrapper";

export const LoadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span:last-child {
    ${({ theme }) => theme.fonts.secondary.bigger};
    font-weight: 500;
  }
`;
LoadingContainer.displayName = "LoadingContainer";

export const LeftSlide = styled(SlideButton)`
  position: absolute;
  top: 36%;
  left: 6.35%;
  z-index: 1;
  max-height: 24px;
  height: 100%;
  max-width: 24px;
  width: 100%;
`;
LeftSlide.displayName = "LeftSlide";

export const RightSlide = styled(LeftSlide)`
  left: unset;
  right: 4.8%;
`;
RightSlide.displayName = "RightSlide";

export const ListAnim = styled(motion.div)`
  display: block;
  white-space: nowrap;
  width: 100%;
  max-height: 350px;
  height: 100%;
  position: relative;
`;
ListAnim.displayName = "ListAnim";

export const List = styled.div`
  display: block;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  max-height: 350px;
  height: 100%;

  ::-webkit-scrollbar {
    height: 0.625rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.cAlmostBlack.alpha(0.8).toString()};
    border-radius: 1rem;

    :hover {
      background-color: ${({ theme }) =>
        theme.cAlmostBlack.alpha(0.85).toString()};
    }
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.cAlmostWhite};
    border-radius: 1rem;
  }

  > div {
    padding: 0 0.25rem;
  }

  > div:only-child {
    margin: 0;
  }
`;
List.displayName = "List";

export const LeftSlideBtn = styled(SlideButton)`
  position: absolute;
  z-index: 10;
  top: 25%;
  left: -1%;

  @media only screen and (max-width: 748px) {
    display: none;
  }
`;
LeftSlideBtn.displayName = "LeftSlideBtn";

export const RightSlideBtn = styled(LeftSlideBtn)`
  left: unset;
  right: -1%;
`;
RightSlideBtn.displayName = "RightSlideBtn";
