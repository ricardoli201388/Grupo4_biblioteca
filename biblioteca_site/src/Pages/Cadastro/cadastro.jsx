
import { Container, Titulo, Caixa_texto, Texto, Botao} from "./styles";




function Cadastro(){

return (
    <Container>
        <Titulo>Cadastro</Titulo>  
        <Texto>Nome do usuário:</Texto>
    <Caixa_texto></Caixa_texto>
        <Texto>Cargo:</Texto>
    <Caixa_texto></Caixa_texto>
        <Texto>E-mail:</Texto>
    <Caixa_texto></Caixa_texto>
        <Texto>Senha:</Texto>
    <Caixa_texto></Caixa_texto>
        <Texto>Confirme sua senha:</Texto>
    <Caixa_texto></Caixa_texto>
    <Botao>Cadastrar</Botao>
    </Container>
)
}
export default Cadastro;