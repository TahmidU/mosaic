import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 18.75rem;
  padding: 0.625rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.cBlack.alpha(0.1).toString()};
  backdrop-filter: blur(4px);
  justify-content: end;

  > input:first-child {
    width: 100%;
  }

  > svg:last-child {
    color: ${({ theme }) => theme.cBlack.alpha(0.5).toString()};
  }

  :hover {
    ${({ theme }) => `border-color:${theme.cBlack.alpha(0.25).toString()};`}
  }

  :focus-within {
    border-color: ${({ theme }) => theme.cBlack.alpha(0.5).toString()};

    > svg:last-child {
      color: ${({ theme }) => theme.cBlack.alpha(1).toString()};
    }
  }
`;
Container.displayName = "Container";

export const InputStyle = styled.input`
  all: unset;
  margin: 0 1rem;
  ${({ theme }) => theme.fonts.main.medium};

  :not(:focus) {
    color: ${({ theme }) => theme.cBlack.alpha(0.625).toString()};
  }
`;
InputStyle.displayName = "InputStyle";
