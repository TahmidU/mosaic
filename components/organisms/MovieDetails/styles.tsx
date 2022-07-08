import Card from "components/atoms/Card";
import styled from "styled-components";

export const Container = styled(Card)`
  width: 436px;
  max-width: unset;
  max-height: unset;
  height: 1398px;

  > div:first-child {
    width: 379px;
    height: 580px;
    max-width: unset;
    max-height: unset;

    > img:first-child {
      width: 379px;
      height: 580px;
    }
  }

  > div:nth-child(2) {
    width: 100%;
  }

  box-shadow: unset;
  border: unset;
`;
Container.displayName = "Container";

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
MainSection.displayName = "MainSection";

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    margin: 0 auto 0 0;
  }

  > span:first-child {
    ${({ theme }) => theme.fonts.tertiary.massive};
    font-weight: 100;
    text-align: start;
  }
`;
TitleBlock.displayName = "TitleBlock";

export const Socials = styled.div``;
Socials.displayName = "Socials";

export const SubSection = styled.div``;
SubSection.displayName = "SubSection";
