import MovieInfo from "../MovieInfo";
import SlideButton from "components/molecules/SlideButton";
import StepStatus from "../StepStatus";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 55.7vw;
  position: relative;
  background-color: ${({ theme }) => theme.almostBlack};
`;
Container.displayName = "Container";

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  white-space: nowrap;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
ImageContainer.displayName = "ImageContainer";

export const SlideBtn = styled(SlideButton)`
  position: absolute;
  z-index: 10;
  top: 37.5%;

  @media only screen and (max-width: 768px) {
    top: 40%;
    height: 108px;
    width: 54px;
  }

  @media only screen and (max-width: 586px) {
    height: 75px;
    width: 37.5px;
  }
`;
SlideBtn.displayName = "SlideBtn";

export const PrevBtn = styled(SlideBtn)`
  left: 1%;
`;
PrevBtn.displayName = "PrevBtn";

export const NextBtn = styled(SlideBtn)`
  right: 1%;
`;
NextBtn.displayName = "NextBtn";

export const MovieInfoStyle = styled(MovieInfo)`
  display: flex;
  flex-direction: column;
  padding: 0 8em;

  > span:first-child {
    ${({ theme }) => theme.fonts.main.massive};
  }

  > span:nth-child(2) {
    ${({ theme }) => theme.fonts.main.big};
  }

  > span:nth-child(3) {
    ${({ theme }) => theme.fonts.main.regular};
  }

  @media only screen and (max-width: 586px) {
    padding: 0 4em;

    > span:first-child {
      ${({ theme }) => theme.fonts.main.big};
    }

    > span:nth-child(2) {
      ${({ theme }) => theme.fonts.main.regular};
    }

    > span:nth-child(3) {
      ${({ theme }) => theme.fonts.main.small};
    }
  }

  @media only screen and (max-width: 448px) {
    top: 50%;

    > span:first-child {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      ${({ theme }) => theme.fonts.main.big};
      white-space: unset;
    }

    > span:nth-child(2) {
      display: none;
    }

    > span:nth-child(3) {
      ${({ theme }) => theme.fonts.main.extraSmall};
    }
  }

  @media only screen and (max-width: 375px) {
    top: 48%;

    > span:first-child {
      ${({ theme }) => theme.fonts.main.mediumBig};
    }
  }
`;
MovieInfoStyle.displayName = "MovieInfoStyle";

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 12px;
  width: 100%;
  height: 20px;
  z-index: 20;
`;
StepsContainer.displayName = "StepsContainer";

export const StepStatusStyle = styled(StepStatus)`
  margin: 0 0.15rem;
`;
StepStatusStyle.displayName = "StepStatusStyle";
