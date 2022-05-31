import SlideButton from "../../molecules/SlideButton";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    ${({ theme }) => theme.fonts.main.massive};
    font-weight: bolder;
  }
`;
Container.displayName = "Container";

export const SubListTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 2.75rem 0;
  overflow-x: auto;
  overflow-y: hidden;

  > span:not(:first-child):not(:last-child) {
    margin: 0 1.5%;
  }

  > span:last-child {
    margin: 0 0 0 1.5%;
  }

  > span:first-child {
    margin: 0 1.5% 0 0;
  }

  > span:only-child {
    margin: 0;
  }

  @media only screen and (max-width: 395px) {
    > span:not(:first-child):not(:last-child) {
      margin: 0 2.5%;
    }

    > span:last-child {
      margin: 0 0 0 2.5%;
    }

    > span:first-child {
      margin: 0 2.5% 0 0;
    }
  }
`;
SubListTitle.displayName = "SubListTitle";

export const SubTitle = styled.span<{ highlight: boolean }>`
  cursor: pointer;
  ${({ theme }) => theme.fonts.main.big};
  font-weight: 700;
  color: ${({ theme, highlight }) =>
    highlight ? theme.cRed.alpha(0.65).toString() : theme.text};

  @media only screen and (max-width: 768px) {
    ${({ theme }) => theme.fonts.main.regular};
    text-align: center;
  }

  @media only screen and (max-width: 395px) {
    ${({ theme }) => theme.fonts.main.small};
    text-align: center;
  }
`;
SubTitle.displayName = "SubTitle";

export const MovieListWrapper = styled.div`
  display: flex;
  position: relative;
  height: 350px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
MovieListWrapper.displayName = "MovieListWrapper";

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

export const MovieCardListAnim = styled(motion.div)`
  display: block;
  white-space: nowrap;
  width: 100%;
  max-height: 350px;
  height: 100%;
  position: relative;
`;
MovieCardListAnim.displayName = "MovieCardListAnim";

export const MovieCardList = styled.div`
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
MovieCardList.displayName = "MovieCardList";

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

export const MovieCardWrapper = styled.div`
  display: inline-block;
  width: calc((100%) / 10);

  > div {
    margin: 0 auto;
  }

  @media only screen and (max-width: 1755px) {
    width: calc((100%) / 9);
  }

  @media only screen and (max-width: 1648px) {
    width: calc((100%) / 8);
  }

  @media only screen and (max-width: 1442px) {
    width: calc((100%) / 7);
  }

  @media only screen and (max-width: 1264px) {
    width: calc((100%) / 6);
  }

  @media only screen and (max-width: 1086px) {
    width: calc((100%) / 5);
  }

  @media only screen and (max-width: 912px) {
    width: calc((100%) / 4);
  }

  @media only screen and (max-width: 748px) {
    width: calc((100%) / 3);
  }

  @media only screen and (max-width: 568px) {
    width: calc((100%) / 2);
  }
`;
MovieCardWrapper.displayName = "MovieCardWrapper";
