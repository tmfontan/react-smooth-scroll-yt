import React from 'react'
import { FaBars } from 'react-icons/fa'

import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavButton,
  NavButtonLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>dolla</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to=''>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='about'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='lwi_info'>Louisiana Watershed Initiative (LWI)</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='crs_info'>Community Rating System (CRS)</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='contact'>Contact</NavLinks>
              </NavItem>
            </NavMenu>
            <NavButton>
              <NavButtonLink to="/signin">Sign In</NavButtonLink>
            </NavButton>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar;