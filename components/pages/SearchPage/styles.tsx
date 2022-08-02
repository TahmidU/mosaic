import Filters from "components/molecules/Filters";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1rem 1.5rem;
`;
Container.displayName = "Container";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: unset;
  }

  > span:first-child {
    ${({ theme }) => theme.fonts.main.medium};
  }
`;
Header.displayName = "Header";

export const FiltersStyle = styled(Filters)`
  width: fit-content;

  @media only screen and (max-width: 768px) {
    margin: 0 0 1rem 0;
    > span:first-child {
      margin: 0;
    }
  }
`;
FiltersStyle.displayName = "FiltersStyle";
