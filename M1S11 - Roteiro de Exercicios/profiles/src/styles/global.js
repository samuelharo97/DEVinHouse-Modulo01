import { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  a, button {
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover {
    filter: brightness(0.9);
  }
`
