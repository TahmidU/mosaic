import styled from "styled-components";

export const ButtonStyle = styled.button`
  border: 10px solid ${({ theme }) => theme.red};
  border-radius: 10px;
`;
ButtonStyle.displayName = "ButtonStyle";
