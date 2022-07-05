import Card from "components/atoms/Card";
import Image from "next/image";
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

export const Wrapper = styled.div`
  width: 100%;
  max-width: 150px;
  height: 100%;
  max-height: 225px;
  position: relative;
`;
Wrapper.displayName = "Wrapper";

export const MovieImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 14px;
`;
MovieImage.displayName = "MovieImage";

export const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.75em;
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
`;
SubSection.displayName = "SubSection";
