import Card from "components/atoms/Card";
import styled from "styled-components";

export const Container = styled(Card)`
  display: flex;
  flex-direction: row;
  max-width: unset;
  align-items: flex-start;
  width: 100%;
  height: 180px;
  padding: 1rem;

  > div:first-child {
    margin-right: 0.8rem;
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-self: flex-start;
    ${({ theme }) => theme.fonts.main.medium};

    > span:first-child {
      ${({ theme }) => theme.fonts.main.bigger};
      font-weight: bold;
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      margin: 0 0 0.7em 0;
      align-items: center;

      > span:first-child {
        margin-right: 1rem;
        ${({ theme }) => theme.fonts.main.regular};
        color: ${({ theme }) => theme.cAlmostBlack.alpha(0.7)};
        font-weight: 100;
      }
    }

    > span:last-child {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  @media only screen and (max-width: 768px) {
    > div:last-child {
      > span:first-child {
        ${({ theme }) => theme.fonts.main.medium};
      }

      > span:last-child {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        ${({ theme }) => theme.fonts.main.regular};
      }
    }
  }
`;
Container.displayName = "Container";

export const ImageWrapper = styled.div`
  height: 142px;
  width: 95px;
  overflow: hidden;
  border-radius: 1rem;
`;
ImageWrapper.displayName = "ImageWrapper";
