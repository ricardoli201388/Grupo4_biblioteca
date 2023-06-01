import { Container, Texto } from "./styles";

export default function Usuario({ usuario }) {
  return (
    <Container>
      <Titulo>Meus Dados</Titulo>
      <Texto>
        Nome do usuário: <Valor>{usuario.nome}</Valor>
      </Texto>
      <Texto>
        Cargo: <Valor>{usuario.cargo}</Valor>
      </Texto>
      <Texto>
        E-mail: <Valor>{usuario.email}</Valor>
      </Texto>
    </Container>
  );
}
