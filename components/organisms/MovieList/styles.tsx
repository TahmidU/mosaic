import Scrollbar from "components/atoms/Scrollbar";
import SlideButton from "../Carousel/SlideButton";
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
    margin: 0 2.5%;
  }

  > span:last-child {
    margin: 0 0 0 2.5%;
  }

  > span:first-child {
    margin: 0 2.5% 0 0;
  }

  > span:only-child {
    margin: 0;
  }

  @media only screen and (max-width: 395px) {
    > span:not(:first-child):not(:last-child) {
      margin: 0 3.5%;
    }

    > span:last-child {
      margin: 0 0 0 3.5%;
    }

    > span:first-child {
      margin: 0 3.5% 0 0;
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
  height: 300px;
`;
MovieListWrapper.displayName = "MovieListWrapper";

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

export const MovieCardList = styled(Scrollbar)`
  display: block;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  max-height: 290px;
  height: 100%;

  > div:first-child > div:not(:first-child):not(:last-child) {
    padding: 0 0.25rem;
  }

  > div:first-child > div:last-child {
    padding: 0 0 0 0.25rem;
  }

  > div:first-child > div:first-child {
    padding: 0 0.25rem 0 0;
  }

  > div:first-child > div:only-child {
    margin: 0;
  }
`;
MovieCardList.displayName = "MovieCardList";

export const MovieCardWrapper = styled.div`
  display: inline-block;
  width: calc((100% - (0.25rem * 4)) / 7);

  > div {
    margin: 0 auto;
  }

  @media only screen and (max-width: 1648px) {
    width: calc((100% - (0.25rem * 4)) / 6);
  }

  @media only screen and (max-width: 1346px) {
    width: calc((100% - (0.25rem * 4)) / 5);
  }

  @media only screen and (max-width: 1068px) {
    width: calc((100% - (0.25rem * 4)) / 4);
  }

  @media only screen and (max-width: 770px) {
    width: calc((100% - (0.25rem * 4)) / 3);

    > div > div > div:last-child {
      display: none;
    }
  }

  @media only screen and (max-width: 375px) {
    width: calc((100% - (0.25rem * 4)) / 2);
  }
`;
MovieCardWrapper.displayName = "MovieCardWrapper";
