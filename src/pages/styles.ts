import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
`

export const Authoral = styled.div`
  width: 95%;
  display: flex;
  justify-content: flex-end;
  h5 {
    margin-top: 1.5rem;
    color: ${(props) => props.theme['gray-300']};
  }
`
