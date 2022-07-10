import Card from "components/atoms/Card";
import styled from "styled-components";

export const Container = styled(Card)`
  div:nth-child(2) {
    width: 90%;
  }
  max-height: 360px;
  height: 360px;
`;
Container.displayName = "Container";

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
  ${({ theme }) => theme.fonts.main.regular};

  > span {
    text-align: start;
  }

  > span:first-child {
    font-weight: bold;
    margin: 0 0 0.25em 0;
  }

  > span:not(:first-child) {
    font-weight: 300;
  }
`;
TextSection.displayName = "TextSection";
