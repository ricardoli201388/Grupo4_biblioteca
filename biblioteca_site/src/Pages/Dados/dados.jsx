import { Container, Titulo, Texto, Botao} from "./styles";

function Dados(){

    return (
        <Container>
            <Titulo>Meus Dados</Titulo>  
            <Texto>Nome do usuário:</Texto>
            <Texto>Cargo:</Texto>
            <Texto>E-mail:</Texto>
        
        <Botao>Editar dados</Botao>
        </Container>
    )
    }
    export default Dados;