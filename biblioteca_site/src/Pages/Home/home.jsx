import {
  Container,
  Containercarrossel,
  Carrosselimg,
  Cabecalho,
  Titulo,
  Tabela,
  ColunaFuncionario,
  ColunaCargo,
  ColunaChegada,
  ColunaCronometro,
  Texto,
} from "./styles";

<<<<<<< Updated upstream
import { Carousel } from "antd";
import {
  carrosselprojetos,
  carrosselreclamações,
  carrosselnoticias,
  carrosselblog,
} from "../../assets";

=======
import { Carousel } from "antd"; //
>>>>>>> Stashed changes
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
