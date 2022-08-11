import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from "./SidebarElements";

const Sidebar = ({isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>Learner</SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>Blogs</SidebarLink>
            <SidebarLink to="services" onClick={toggle}>Partner with us</SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>About us</SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>Contact us</SidebarLink>
          </SidebarMenu> 
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
