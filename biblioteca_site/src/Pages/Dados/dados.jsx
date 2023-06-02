import { Container, Titulo, Texto, Botao, Valor, Usuario } from "./styles";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../../stores/auth";

function Dados() {
  const usuario = useAuthStore((state) => state.usuario);

  return (
    <Container>
      <Usuario usuario={usuario}></Usuario>
      <Titulo>Meus Dados</Titulo>
      <Texto>Nome do usuário: Ricardo</Texto>
      <Texto>Cargo: Trainee</Texto>
      <Texto>E-mail: teste1@teste.com</Texto>

      <Link to="/Editar">
        <Botao>Editar dados</Botao>
      </Link>
    </Container>
  );
}
export default Dados;
