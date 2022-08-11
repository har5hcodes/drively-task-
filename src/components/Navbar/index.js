import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, MobileIcon } from './NavbarElements'


const Navbar = ({toggle}) => {
  return (
     <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">drively</NavLogo>  
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">Learner</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Blogs</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Partner with us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">About us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact us</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
     </>
  )
}

export default Navbar