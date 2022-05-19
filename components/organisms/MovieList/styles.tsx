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
`;
SubListTitle.displayName = "SubListTitle";

export const SubTitle = styled.span<{ highlight: boolean }>`
  cursor: pointer;
  ${({ theme }) => theme.fonts.main.big};
  font-weight: 600;
  color: ${({ theme, highlight }) =>
    highlight ? theme.cRed.alpha(0.65).toString() : theme.text};
`;
SubTitle.displayName = "SubTitle";

export const MovieListWrapper = styled.div`
  display: flex;
  position: relative;
`;
MovieListWrapper.displayName = "MovieListWrapper";

export const LeftSlide = styled(SlideButton)`
  position: absolute;
  left: 2.5%;
  top: 30%;
  z-index: 1;
`;
LeftSlide.displayName = "LeftSlide";

export const RightSlide = styled(SlideButton)`
  position: absolute;
  right: 2.5%;
  top: 30%;
  z-index: 1;
`;
RightSlide.displayName = "RightSlide";

export const MovieCardList = styled.div`
  display: block;
  overflow-x: hidden;
  white-space: nowrap;
  //max-width: 1648px;
  width: 100%;
  max-height: 290px;
  height: auto;

  > div:not(:first-child):not(:last-child) {
    padding: 0 0.25rem;
  }

  > div:last-child {
    padding: 0 0 0 0.25rem;
  }

  > div:first-child {
    padding: 0 0.25rem 0 0;
  }

  > div:only-child {
    margin: 0;
  }
`;
MovieCardList.displayName = "MovieCardList";

export const MovieCardWrapper = styled.div`
  display: inline-block;
  width: calc((100% - (0.25rem * 4)) / 7);

  > div {
    margin-left: auto;
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
