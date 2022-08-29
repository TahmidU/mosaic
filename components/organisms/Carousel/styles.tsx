import LoadingSkeleton from "./LoadingSkeleton";
import ReviewStat from "components/molecules/ReviewStat";
import SlideButton from "../../molecules/SlideButton";
import StepStatus from "./StepStatus";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 1rem 1rem;
  height: 720px;
  max-height: 720px;
  align-self: center;
  width: 100%;
`;
Container.displayName = "Container";

export const Frame = styled.div`
  display: flex;
  justify-self: center;
  max-height: 720px;
  flex-direction: row;
  width: 100%;
  max-width: 1280px;
  height: 38vw;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.reverseMain};
  border-radius: 48px 48px 60px 60px;
  overflow: hidden;
`;
Frame.displayName = "Frame";

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  position: relative;
  cursor: pointer;

  > span:nth-child(2) {
    border-radius: 48px;
  }
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
    font-weight: 100;
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
    font-weight: 100;
    top: -130px;
    left: 2%;
  }

  p {
    width: 90%;
    white-space: normal;
  }

  @media (max-width: 1640px) {
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

export const DesktopCarouselStyle = dynamic(() => import("./Carousel"), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});
export const MobileCarouselStyle = dynamic(() => import("./MobileCarousel"), {
  ssr: false,
  loading: () => <LoadingSkeleton />,
});
