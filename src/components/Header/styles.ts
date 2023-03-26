import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  gap: 1rem;
`

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`

export const NavbarLink = styled(Link)`
  color: white;
  font-size: 1.25rem;
  text-decoration: none;
  margin: 10px;
`
