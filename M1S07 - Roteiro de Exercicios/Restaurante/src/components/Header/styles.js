import styled from 'styled-components'

export const Container = styled.div`
  height: 115px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  justify-content: left;

  img {
    width: 100px;
  }
`
