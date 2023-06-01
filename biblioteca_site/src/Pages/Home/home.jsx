import {
  Container,
  Containercarrossel,
  Carrosselimg,
  Cabecalho,
  Titulo,
  Tabela,
  ColunaFuncionario,
  ColunaCargo,
  ColunaStatus,
  ColunaChegada,
  ColunaCronometro,
  Texto,
} from "./styles";

import { Carousel } from "antd";
import {
  carrosselprojetos,
  carrosselreclamações,
  carrosselnoticias,
  carrosselblog,
} from "../../assets";

function Home() {
  return (
    <Container>
      <Containercarrossel>
        <Carousel autoplay>
          <Carrosselimg src={carrosselprojetos} />
          <Carrosselimg src={carrosselreclamações} />
          <Carrosselimg src={carrosselnoticias} />
          <Carrosselimg src={carrosselblog} />
        </Carousel>
      </Containercarrossel>

      <Cabecalho>
        <Titulo>Funcionário</Titulo>
        <Titulo sumir>Cargo</Titulo>
        <Titulo sumir>Status</Titulo>
        <Titulo>Chegada</Titulo>
        <Titulo>Cronometro</Titulo>
      </Cabecalho>

      <Tabela>
        <ColunaFuncionario>
          <Texto>Victor</Texto>
          <Texto>Amanda</Texto>
          <Texto>Eduardo</Texto>
          <Texto>Ricardo</Texto>
        </ColunaFuncionario>

        <ColunaCargo sumir>
          <Texto>Trainee</Texto>
          <Texto>Consultor de tecnologia</Texto>
          <Texto>Trainee</Texto>
          <Texto>Trainee</Texto>
        </ColunaCargo>

        <ColunaStatus sumir>
          <Texto>Feliz</Texto>
          <Texto>Animado</Texto>
          <Texto>Cansado</Texto>
          <Texto>Alegre</Texto>
        </ColunaStatus>

        <ColunaChegada>
          <Texto>20:00</Texto>
          <Texto>20:10</Texto>
          <Texto>10:00</Texto>
          <Texto>10:20</Texto>
        </ColunaChegada>

        <ColunaCronometro>
          <Texto>00:00</Texto>
          <Texto>00:10</Texto>
          <Texto>10:00</Texto>
          <Texto>00:20</Texto>
        </ColunaCronometro>
      </Tabela>
    </Container>
  );
}
export default Home;
