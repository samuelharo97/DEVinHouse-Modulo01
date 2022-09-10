import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  > img {
    width: 100px;
    height: 100px;
  }
  > h1 {
    text-align: center;
  }
  > button {
    height: 50px;
    width: 100px;
  }
`
