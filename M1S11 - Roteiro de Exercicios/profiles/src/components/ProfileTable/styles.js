import styled from 'styled-components'

export const TableContainer = styled.main`
  grid-area: content;
  width: 80%;
  margin: auto;

  > div {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
  }

  table {
    width: 80%;
    color: ${({ theme }) => theme.COLORS.TEXT};
  }

  thead {
    > tr > th:nth-child(1) {
      width: 50px;
      /* color: green; */
    }
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.COLORS.ROW_SECONDARY};
  }
  tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.COLORS.ROW_PRIMARY};
  }
`
