import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 160px;
  width: 100%;
  height: 330px;
  max-height: 330px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 0.25rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.cGrey.alpha(0.1).toString()};
  box-shadow: 2px 2px 8px 0px rgb(33 31 27 / 14%);
`;
Container.displayName = "Container";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 379px;
  height: fit-content;
  max-height: 580px;
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
`;
SubSection.displayName = "SubSection";
