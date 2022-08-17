import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
  }

  :root {
    font-size: 62,5%;
  }

  #root{
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100vw;
    flex-wrap: wrap;
    
  }

  body { 
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE}; 

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
