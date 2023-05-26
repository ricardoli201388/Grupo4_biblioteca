import { Container, Titulo, Texto, Botao} from "./styles";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Dados(){

    return (
        <Container>
            <Titulo>Meus Dados</Titulo>  
            <Texto>Nome do usuário:</Texto>
            <Texto>Cargo:</Texto>
            <Texto>E-mail:</Texto>
        
        <Link to='/Editar'><Botao>Editar dados</Botao></Link>
        </Container>
    )
    }
    export default Dados;