// Styles, Logo & Icons
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  PawPrint,
} from 'phosphor-react'
import {
  NavbarInnerContainer,
  LeftContainer,
  NavbarLinkContainer,
  NavbarLink,
  RightContainer,
} from './styles'

export function Header() {
  return (
    <>
      <NavbarInnerContainer>
        <LeftContainer>
          <h1>Petshop</h1>
          <PawPrint size={32} />
          <p>Feito por Herberth Andrade</p>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="https://github.com/andrademech" target="_blank">
              <GithubLogo size={24} />
            </NavbarLink>
            <NavbarLink
              to="https://www.linkedin.com/in/herberth-andrade-759b10127/"
              target="_blank"
            >
              <LinkedinLogo size={24} />
            </NavbarLink>
            <NavbarLink
              to="https://www.instagram.com/herberth.dev/"
              target="_blank"
            >
              <InstagramLogo size={24} />
            </NavbarLink>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
    </>
  )
}
