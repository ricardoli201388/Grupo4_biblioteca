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
  margin-bottom: 5%;
  font-size: 40px;
  font-weight: bold;
  color: white;
  @media (max-width: 700px) {
    font-size: 30px;
    margin-left: 10%;
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
    margin-top: 5%;
    margin-left: 10%;
    margin-bottom: 15%;
  }
`;
export const Botao = styled.button`

  display: inline-block;
  margin-bottom: 10%;
  margin-top: 5%;
  margin-left: 65%;
  margin-right: 20%;
  padding: 12px;
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
    margin-left: 25%;
    font-size: 10px;
  }
`;
