import MovieInfo from "../MovieInfo";
import StepStatus from "../StepStatus";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 55.7vw;
  position: relative;
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

export const MovieInfoStyle = styled(MovieInfo)`
  display: flex;
  flex-direction: column;

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
    > span:first-child {
      ${({ theme }) => theme.fonts.main.regular};
    }

    > span:nth-child(2) {
      ${({ theme }) => theme.fonts.main.small};
    }

    > span:nth-child(3) {
      ${({ theme }) => theme.fonts.main.extraSmall};
    }
  }

  @media only screen and (max-width: 375px) {
    top: 48%;
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
