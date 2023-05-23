import { Container, Titulo, Caixa_texto, Texto, Botao} from "./styles";

function Login(){

return (
    <Container>
        <Titulo>Login</Titulo>  
        <Texto>Nome do usuário:</Texto>
    <Caixa_texto></Caixa_texto>
        <Texto>Senha:</Texto>
    <Caixa_texto></Caixa_texto>
    <Botao>Login</Botao>
    </Container>
)
}
export default Login;
