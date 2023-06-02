import { Container, Texto, Titulo } from "./styles";

export default function Usuario({ usuario }) {
  return (
    <Container>
      <Titulo>Meus Dados</Titulo>
      <Texto>
        Nome do usuário: <Texto>{usuario.nome}</Texto>
      </Texto>
      <Texto>
        Cargo: <Texto>{usuario.cargo}</Texto>
      </Texto>
      <Texto>
        E-mail: <Texto>{usuario.email}</Texto>
      </Texto>
    </Container>
  );
}
