import React from "react";
import {Container, Content, StyledLink} from './styles'
import {
    BiLogIn,
    BiLogOut
} from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { FaTimes } from 'react-icons/fa'
import SidebarItem from '../SidebarItem'
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai'

const sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <Content>
                <StyledLink to='/'><SidebarItem Icon={AiOutlineHome} Text="Home" /></StyledLink>
                <StyledLink to='/Login'><SidebarItem Icon={BiLogIn} Text="Login" /></StyledLink>
                <StyledLink to='/Login'><SidebarItem Icon={BiLogOut} Text="Logout" /></StyledLink>
                <StyledLink to='/dados'><SidebarItem Icon={CgProfile} Text="Perfil" /></StyledLink>
            </Content>
        </Container>
    
    )
}
export default sidebar;