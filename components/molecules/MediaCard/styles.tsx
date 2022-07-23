import Card from "components/atoms/Card";
import styled from "styled-components";

export const FatContainer = styled(Card)`
  width: 500px;
  max-width: 500px;
  height: 436px;
  max-height: 436px;
  padding: 0;

  > div:first-child {
    max-width: 500px;
    max-height: 350px;
  }

  > div:last-child {
    width: 100%;
    margin: 0;
  }
`;
FatContainer.displayName = "FatContainer";

export const TitleText = styled.p`
  text-align: start;
  width: 100%;
  ${({ theme }) => theme.fonts.main.bigger};
  padding: 0 1em;
  margin: 0.25em 0 0 0;
  font-weight: bold;
  white-space: normal;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
TitleText.displayName = "TitleText";
