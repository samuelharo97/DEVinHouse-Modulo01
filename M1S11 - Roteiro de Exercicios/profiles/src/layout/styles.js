import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  margin: auto;
  width: 100%;
  height: 100vh;
  justify-content: center;
  grid-template-rows: 150px, auto, 150px;
  grid-template-columns: 100%;
  grid-template-areas:
    'header'
    'content'
    'footer';
`
