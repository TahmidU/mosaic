import MovieInfo from "../MovieInfo";
import SlideButton from "components/molecules/SlideButton";
import StepStatus from "../StepStatus";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 55.7vw;
  position: relative;
  background-color: ${({ theme }) => theme.almostBlack};
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 499px) {
    height: 70vw;
  }
`;
Container.displayName = "Container";

export const Frame = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`;
Frame.displayName = "Frame";

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  white-space: nowrap;
  height: 100%;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
`;
ImageContainer.displayName = "ImageContainer";

export const SlideBtn = styled(SlideButton)`
  position: absolute;
  z-index: 10;
  top: 35%;
  height: 25%;
  border-color: transparent;
  background-color: ${({ theme }) => theme.almostBlack};
  opacity: 20%;
  width: 8.625%;

  :hover,
  :active {
    background-color: ${({ theme }) => theme.almostBlack};
    opacity: 50%;
  }
`;
SlideBtn.displayName = "SlideBtn";

export const PrevBtn = styled(SlideBtn)``;
PrevBtn.displayName = "PrevBtn";

export const NextBtn = styled(SlideBtn)`
  right: 0%;
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

  @media only screen and (max-width: 499px) {
    position: relative;
    top: unset;
    padding: 0.55em 1em 0.05em 1em;
    min-height: 15vw;

    > span:first-child {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      ${({ theme }) => theme.fonts.main.medium};
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
    > span:first-child {
      ${({ theme }) => theme.fonts.main.regular};
    }
  }

  @media only screen and (max-width: 330px) {
    > span:first-child {
      ${({ theme }) => theme.fonts.main.small};
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
  bottom: 10px;
  width: 100%;
  height: 20px;
  z-index: 20;

  @media only screen and (max-width: 499px) {
    bottom: -11px;
  }
`;
StepsContainer.displayName = "StepsContainer";

export const StepStatusStyle = styled(StepStatus)`
  margin: 0 0.15rem;

  @media only screen and (max-width: 499px) {
    margin: 0 0.0625rem;
  }
`;
StepStatusStyle.displayName = "StepStatusStyle";
