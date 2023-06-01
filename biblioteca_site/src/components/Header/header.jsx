import {
  Container,
  Logo,
  DivHeader,
  StyledLink,
  BotaoLogout,
} from "./styles";
import logoIcon from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { useNavigate, Link } from "react-router-dom";
import Botaologin from "../Botaologin";
import Botaocadastro from "../BotaoCadastro";
import useAuthStore from "../../stores/auth";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const usuario = useAuthStore((state) => state.usuario);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const navigate = useNavigate()
  
  const logout = () => {

    clearAuth()
    navigate('/login')
  }

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <FaBars onClick={showSidebar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <Logo src={logoIcon} />

      <DivHeader>
        <StyledLink to="/Login">Login</StyledLink>
        <StyledLink to="/cadastro">Cadastre-se</StyledLink>
        {!!usuario && (<>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/Dados'>Perfil</StyledLink>
        <h2>Seja bem-vindo { usuario.nome }</h2>
        <BotaoLogout type='button' onClick={logout}  >Logout</BotaoLogout>

        </>)
        }
      </DivHeader>
    </Container>
  );
}
export default Header;
