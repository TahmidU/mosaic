import Card from "components/atoms/Card";
import styled from "styled-components";

export const Container = styled(Card)`
  display: flex;
  flex-direction: row;
  max-width: unset;
  width: 100%;
  height: unset;
  min-height: 142px;
  padding: 1rem;

  > div:first-child {
    margin-right: 0.8rem;
  }

  > div:last-child {
    display: flex;
    flex-direction: column;

    > span:first-child {
      ${({ theme }) => theme.fonts.main.bigger};
      font-weight: bold;
    }

    > span:last-child {
      ${({ theme }) => theme.fonts.main.regular};
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
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
