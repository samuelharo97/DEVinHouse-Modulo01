import styled from 'styled-components'

export const CardLayout = styled.div`
  height: 350px;
  width: 300px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  
  
  > img {
    width: 300px;
    height: 200px;
    border-radius: 20px 20px 0 0;
  }
`

