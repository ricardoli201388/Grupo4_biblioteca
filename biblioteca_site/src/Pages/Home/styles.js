import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  background-color: #28846c;
  font-family: "poppins";
`;

export const Titulo = styled.p`
  font-size: 20px;
  color: white;
  width: 100%;
  text-align: center;

  @media (max-width: 700px) {
    display: ${(props) => (props.sumir ? "none" : "block")};
    font-size: 15px;
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #0e5a46;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Texto = styled.p`
  font-size: 18px;
  color: black;
  padding-top: 50px;
`;
export const Tabela = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #84c396;
`;

export const ColunaFuncionario = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6%;
  padding-bottom: 50px;
`;

export const ColunaCargo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 10%;
  @media (max-width: 700px) {
    display: ${(props) => (props.sumir ? "none" : "block")};
  }
`;

export const ColunaStatus = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8%;
  margin-left: 5%;
  @media (max-width: 700px) {
    display: ${(props) => (props.sumir ? "none" : "block")};
  }
`;

export const ColunaChegada = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16%;
  margin-left: 8%;
`;
export const ColunaCronometro = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8%;
`;

export const Containercarrossel = styled.div`
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 2%;
  margin-bottom: 2%;
  overflow: hidden;
  z-index: 1;
`;

export const Carrosselimg = styled.img``;

export const Loading = styled.img`
  margin-left: 20%;
  margin-right: 20%;
  overflow: hidden;
`;
