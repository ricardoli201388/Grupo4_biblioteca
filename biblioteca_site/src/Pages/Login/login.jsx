import { Container, Titulo, Caixa_texto, Texto } from "./styles";

function Login(){

return (
    <Container>
        <Titulo>Login</Titulo>  
        <Texto>Nome do usuário:</Texto>
    <Caixa_texto>
        <input></input>
    </Caixa_texto>
        <Texto>Senha:</Texto>
    <Caixa_texto>
        <input></input>
    </Caixa_texto>
    </Container>
)
}
export default Login;
