import Checkbox from "components/atoms/Checkbox";
import styled from "styled-components";

export const Container = styled.div`
  display: block;
  width: fit-content;
  height: fit-content;
  overflow-y: hidden;
  overflow-x: auto;

  > span:first-child {
    ${({ theme }) => theme.fonts.main.medium};
  }

  > span,
  > div {
    margin: 0 1rem;
  }
`;
Container.displayName = "Container";

export const FilterWrapper = styled.div`
  display: inline-block;
  height: fit-content;
  width: fit-content;
`;
FilterWrapper.displayName = "FilterWrapper";

export const CheckboxStyle = styled(Checkbox)``;
CheckboxStyle.displayName = "CheckboxStyle";
