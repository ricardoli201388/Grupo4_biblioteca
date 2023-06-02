import { Container, Titulo, Texto, Botao, Valor, Usuario } from "./styles";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../../stores/auth";


function Dados() {
  const usuario = useAuthStore((state) => state.usuario);

  return (
    <Container>
      <Usuario usuario={usuario}></Usuario>
      {/* <Titulo>Meus Dados</Titulo>
      <Texto>
        Nome do usuário: <Valor>{usuario.nome}</Valor>
      </Texto>
      <Texto>
        Cargo: <Valor>{usuario.cargo}</Valor>
      </Texto>
      <Texto>
        E-mail: <Valor>{usuario.email}</Valor>
       </Texto> */}

      <Link to="/Editar">
        <Botao>Editar dados</Botao>
      </Link>
    </Container>
  );
}
export default Dados;
