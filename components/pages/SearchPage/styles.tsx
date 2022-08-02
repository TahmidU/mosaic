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
  width: 100%;

  > span:first-child {
    ${({ theme }) => theme.fonts.main.medium};
  }
`;
Header.displayName = "Header";

export const FiltersStyle = styled(Filters)`
  width: fit-content;
`;
FiltersStyle.displayName = "FiltersStyle";
