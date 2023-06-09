import { Container, Logo, DivHeader, StyledLink, BotaoLogout } from "./styles";
import logoIcon from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import Botaologin from "../Botaologin";
import Botaocadastro from "../BotaoCadastro";
import useAuthStore from "../../stores/auth";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const usuario = useAuthStore((state) => state.usuario);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  // const navigate = useNavigate();

  //const logout = () => {
  // clearAuth()
  // navigate('/login')
  //};

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <FaBars onClick={showSidebar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <Logo src={logoIcon} />

      <DivHeader>
        <StyledLink to="/Login" sumir>Login</StyledLink>
        <StyledLink to="/cadastro" sumir>Cadastre-se</StyledLink>
        {!!usuario && (
          <>
            <StyledLink to="/" sumir>Home</StyledLink>
            <StyledLink to="/Dados" sumir>Perfil</StyledLink>
           
            <BotaoLogout type="button" onClick={clearAuth} sumir>
              Logout
            </BotaoLogout>
          </>
        )}
      </DivHeader>
    </Container>
  );
}
export default Header;
