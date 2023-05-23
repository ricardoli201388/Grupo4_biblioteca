import { Container, Logo, DivHeader, BotaoCadastro } from "./styles";
import logoIcon from "../../assets/logo.png"
import { FaBars } from 'react-icons/fa'
import React, { useState } from "react";
import Sidebar from '../Sidebar'
// import { useNavigate } from "react-router-dom";
import Botaologin from '../Botaologin'
import Botaocadastro from '../BotaoCadastro'

function Header() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)


return (
    <Container>
        <FaBars onClick={showSidebar} /> 
            {sidebar && <sidebar active={setSidebar} />}
        <Logo src={logoIcon}/>
        
        <DivHeader>
            <Botaologin />
            <Botaocadastro/>
        </DivHeader> 
    </Container>
)
}
export default Header;