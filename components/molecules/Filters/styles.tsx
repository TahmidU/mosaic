import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
Container.displayName = "Container";

/*
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: fit-content;

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
CheckboxStyle.displayName = "CheckboxStyle";*/
