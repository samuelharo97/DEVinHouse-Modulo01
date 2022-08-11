import styled from 'styled-components'

export const Container = styled.footer`
  height: 115px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 50px;
  /* 
  img {
    width: 100px;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 25px;
    font-weight: 700;
  }
 */
  div {
    display: flex;
    align-items: center;
  }

  > p {
    border-top: solid 1px white;
    padding: 10px 7px 0;
  }
`
