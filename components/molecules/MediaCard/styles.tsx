import Card from "components/atoms/Card";
import styled from "styled-components";

export const FatContainer = styled(Card)`
  width: 500px;
  max-width: 500px;
  height: 436px;
  max-height: 436px;

  > div:first-child {
    max-width: 500px;
    max-height: 350px;
  }

  > div:last-child {
    width: 100%;
  }
`;
FatContainer.displayName = "FatContainer";

export const TitleText = styled.p`
  text-align: start;
  width: 95%;
  ${({ theme }) => theme.fonts.main.bigger};
  margin: 0;
  font-weight: bold;
  white-space: normal;
`;
TitleText.displayName = "TitleText";
