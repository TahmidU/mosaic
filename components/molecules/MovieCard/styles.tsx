import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 150px;
  width: 100%;
  max-height: 300px;
  height: auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
Container.displayName = "Container";

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

export const MovieText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.15em;

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
    color: ${({ theme }) => theme.grey};
  }
`;
MovieText.displayName = "MovieText";
