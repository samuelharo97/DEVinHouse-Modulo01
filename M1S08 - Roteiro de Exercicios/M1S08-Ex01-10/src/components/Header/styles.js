import styled from 'styled-components'

export const Container = styled.div`
  height: 115px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;

  img {
    width: 100px;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 1.5rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 1rem;
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;
  }
`
