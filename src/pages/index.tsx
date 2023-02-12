import { Container, Authoral } from './styles'
import { Pets } from '../components/Pets'

export function Home() {
  return (
    <Container>
      <Pets />
      <Authoral>
        <h5>Feito por Herberth Andrade</h5>
      </Authoral>
    </Container>
  )
}
