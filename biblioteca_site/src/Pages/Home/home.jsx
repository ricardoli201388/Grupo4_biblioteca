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
  Loading,
} from "./styles";

import { Carousel } from "antd";
import {
  carrosselprojetos,
  carrosselreclamações,
  carrosselnoticias,
  carrosselblog,
} from "../../assets";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const getUsuarios = async () => {
    try {
      setCarregando(true);
      const res = await api.get("/usuarios");
      setUsuarios(res.data);
    } catch (error) {
      console.error(erro);
      alert(erro.reponse.data.message);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {}, []);

  if (carregando)
    return (
      <Container>
        <Loading src={testebook}></Loading>
      </Container>
    );

  return (
    <Container>
      {/* {usuarios.map((usuario) => <h1>{usuario.nome}</h1>)} */}
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
          <Texto>Ricardo</Texto>
        </ColunaFuncionario>

        <ColunaCargo sumir>
          <Texto>Trainee</Texto>
        </ColunaCargo>

        <ColunaStatus sumir>
          <Texto>Feliz</Texto>
        </ColunaStatus>

        <ColunaChegada>
          <Texto>17:20</Texto>
        </ColunaChegada>

        <ColunaCronometro>
          <Texto>00:00</Texto>
        </ColunaCronometro>
      </Tabela>
    </Container>
  );
}
export default Home;
