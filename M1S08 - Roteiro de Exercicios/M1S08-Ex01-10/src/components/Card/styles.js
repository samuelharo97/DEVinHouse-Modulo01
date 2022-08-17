import styled from 'styled-components'

export const CardLayout = styled.div`
  height: 500px;
  width: 90%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  margin-bottom: 80px;

  > img {
    width: 100%;
    height: 200px;
    border-radius: 20px 20px 0 0;
  }
`
