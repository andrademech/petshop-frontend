// Styles, Logo & Icons
import { PawPrint } from 'phosphor-react'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <h1>Petshop</h1>
      <PawPrint size={32} />
    </HeaderContainer>
  )
}
