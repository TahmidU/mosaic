import { IDefaultTheme, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: IDefaultTheme }>`
  
  html::-webkit-scrollbar{
    width: 0.625rem;
  }

  html::-webkit-scrollbar-thumb{
    background-color: ${({ theme }) =>
      theme.cAlmostBlack.alpha(0.8).toString()};
    border-radius: 1rem;

    :hover{
        background-color: ${({ theme }) =>
          theme.cAlmostBlack.alpha(0.85).toString()}; 
    }
  }

  html::-webkit-scrollbar-track{
    background-color: ${({ theme }) => theme.cAlmostWhite};
  }

`;
GlobalStyles.displayName = "GlobalStyles";
