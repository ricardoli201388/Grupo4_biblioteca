<<<<<<< HEAD
import { Container, Logo, DivHeader, BotaoCadastro, StyledLink } from "./styles";
=======
import { Container, Logo, DivHeader, BotaoCadastro, BotaoLogin } from "./styles";
>>>>>>> 8dcc6a3254c43bee4f0cd13ae16293e4aa4a568f
import logoIcon from "../../assets/logo.png"
import { FaBars } from 'react-icons/fa'
import React, { useState } from "react";
import Sidebar from '../Sidebar'
import { useNavigate, Link } from "react-router-dom";
import Botaologin from '../Botaologin'
import Botaocadastro from '../BotaoCadastro'

function Header() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)


return (
    <Container>
        <FaBars onClick={showSidebar} /> 
            {sidebar && <Sidebar active={setSidebar} />}
        <Logo src={logoIcon}/>
        
        <DivHeader>
            <StyledLink to="/Login">Login</StyledLink>
            <StyledLink to='/cadastro'>Cadastre-se</StyledLink>
            
        </DivHeader> 
    </Container>
)
}
export default Header;