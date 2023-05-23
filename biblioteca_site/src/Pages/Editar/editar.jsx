import { Container, Titulo, Caixa_texto, Texto, Botao} from "./styles";

function Editar(){

return (
    <Container>
        <Titulo>Editar Dados</Titulo>  
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
    <Botao>Salvar Dados</Botao>
    </Container>
)
}
export default Editar;