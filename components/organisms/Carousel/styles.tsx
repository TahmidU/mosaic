import ReviewStat from "components/molecules/ReviewStat";
import SlideButton from "./SlideButton";
import StepStatus from "./StepStatus";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  margin: 1rem 1rem;
  height: 100%;
  max-height: 720px;
  align-self: center;
`;
Container.displayName = "Container";

export const CarouselMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1280px;
  height: fit-content;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.reverseMain};
  border-radius: 48px 48px 60px 60px;
  overflow: hidden;
`;
CarouselMainContainer.displayName = "CarouselMainContainer";

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  height: fit-content;
  position: relative;

  > span:nth-child(2) {
    border-radius: 48px;
  }
`;
CarouselContainer.displayName = "CarouselContainer";

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;

  height: fit-content;
  width: 100%;

  max-width: 1280px;
  overflow: hidden;
`;
ImageContainer.displayName = "ImageContainer";

export const TextStyle = styled(motion.div)`
  position: absolute;
  color: ${({ theme }) => theme.main};
  top: 55%;
  left: 2%;
  width: 100%;

  > p:first-child {
    position: relative;
    z-index: 10;
    ${({ theme }) => theme.fonts.main.humongous};
    font-weight: bolder;
    top: -40px;
    left: 2%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > p:nth-child(2) {
    position: relative;
    z-index: 10;
    ${({ theme }) => theme.fonts.main.massive};
    top: -115px;
    left: 2%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  > p:nth-child(3) {
    position: relative;
    z-index: 10;
    ${({ theme }) => theme.fonts.main.big};
    top: -130px;
    left: 2%;
  }

  p {
    width: 90%;
    white-space: normal;
  }

  @media (max-width: 1474px) {
    > p:first-child {
      ${({ theme }) => theme.fonts.main.massive};
      top: 6px;
    }

    > p:nth-child(2) {
      ${({ theme }) => theme.fonts.main.big};
      top: -28px;
    }

    > p:nth-child(3) {
      ${({ theme }) => theme.fonts.main.medium};
      top: -40px;
    }
  }
`;
TextStyle.displayName = "TextStyle";

export const SlideBtn = styled(SlideButton)`
  width: 28px;
  height: 28px;
  position: absolute;
  z-index: 10;
`;
SlideBtn.displayName = "SlideBtn";

export const NextBtn = styled(SlideBtn)`
  right: 52px;
`;
NextBtn.displayName = "NextBtn";

export const PrevBtn = styled(SlideBtn)`
  left: 52px;
`;
PrevBtn.displayName = "PrevBtn";

export const ProgBar = styled.div`
  position: absolute;
  z-index: 11;
  bottom: 0%;
  width: calc(100% - 62px);
`;
ProgBar.displayName = "ProgBar";

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 22;
  bottom: 3%;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  width: 400px;
  align-items: center;
  justify-content: space-evenly;
`;
StepsContainer.displayName = "StepContainer";

export const StepsStyle = styled(StepStatus)`
  cursor: pointer;
`;
StepsStyle.displayName = "StepsStyle";

export const CarouselReview = styled(ReviewStat)`
  position: absolute;
  z-index: 20;
  top: 2%;
  left: 88%;
  width: 128px;
  height: 128px;

  @media (max-width: 1600px) {
    width: 86px;
    height: 86px;
  }
`;
CarouselReview.displayName = "CarouselReview";
