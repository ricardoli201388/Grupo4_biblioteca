import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  height: 100%;
  background-color: #28846c;
  font-family: "poppins";
`;

export const Titulo = styled.p`
  margin-top: 5%;
  margin-left: 20%;
  font-size: 40px;
  font-weight: bold;
  color: white;
  @media (max-width: 700px) {
    font-size: 30px;
    margin-left: 10%;
  }
`;

export const Caixa_texto = styled.input`
  margin-left: 30%;
  margin-right: 30%;
  border: none;
  border-radius: 6px;
  font-size: 30px;
  background-color: white;
  padding-left: 10px;
  @media (max-width: 700px) {
    margin-left: 15%;
    margin-right: 15%;
  }
`;
export const Texto = styled.p`
  margin-top: 0.5%;
  margin-left: 30%;
  margin-bottom: 1%;
  font-size: 20px;
  color: white;
  @media (max-width: 700px) {
    font-size: 15px;
    margin-top: 10%;
    margin-left: 15%;
  }
`;
export const Botao = styled.button`
  display: inline-block;
  margin-bottom: 10%;
  margin-top: 3%;
  margin-left: 40%;
  margin-right: 40%;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: black;
  background-color: #83d7c1;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: "poppins";
  @media (max-width: 700px) {
    margin-top: 15%;
    margin-left: 30%;
    margin-right: 30%;
    font-size: 10px;
  }
`;
