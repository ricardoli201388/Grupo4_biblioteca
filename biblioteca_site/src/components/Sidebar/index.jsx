import React from "react";
import {Container, Content} from './styles'
import {
    BiLogIn,
    BiLogOut
} from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { FaTimes } from 'react-icons/fa'

const sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <Content>
               
            </Content>
        </Container>
    
    )
}
export default sidebar;