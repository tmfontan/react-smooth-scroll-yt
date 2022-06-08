import React from 'react'

import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarButtonWrap, SidebarButtonRoute} from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
        <Icon onClick={ toggle }>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='home'onClick={ toggle }>
                    Home
                </SidebarLink>
                <SidebarLink to='about'onClick={ toggle }>
                    About
                </SidebarLink>
                <SidebarLink to='lwi_info' onClick={ toggle }>
                    Louisiana Watershed Initiative (LWI)
                </SidebarLink>
                <SidebarLink to='crs_info' onClick={ toggle }>
                    Community Rating System (CRS)
                </SidebarLink>
                <SidebarLink to='contact' onClick={ toggle }>
                    Contact
                </SidebarLink>
            </SidebarMenu>
            <SidebarButtonWrap>
                <SidebarButtonRoute to="/signin">
                    Sign In
                </SidebarButtonRoute>
            </SidebarButtonWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar