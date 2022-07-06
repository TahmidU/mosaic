import Card from "components/atoms/Card";
import styled from "styled-components";

export const CardStyle = styled(Card)`
  > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    > span:first-child {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      ${({ theme }) => theme.fonts.tertiary.regular};
      font-weight: 600;
      margin-bottom: 0.1em;
    }

    > span:last-child {
      ${({ theme }) => theme.fonts.tertiary.small};
      font-weight: 100;
      color: ${({ theme }) => theme.cAlmostBlack.alpha(0.7)};
    }
  }
`;
CardStyle.displayName = "CardStyle";
