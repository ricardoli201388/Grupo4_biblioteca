import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  height: 100%;
  background-color: #28846C;
`;

export const Titulo = styled.p`
  margin-top: 5%;
  margin-left: 20%;
  margin-bottom: 5%;
  font-size: 40px;
  font-weight: bold;
  color: white;
`;

export const Texto = styled.p`
  margin-top: 0.5%;
  margin-left: 30%;
  margin-bottom: 1%;
  font-size: 20px;
  color: white;
`;
export const Botao = styled.button`
display: inline-block;
  margin-top: 5%;
  margin-left: 65%;
  margin-right: 25%;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: black;
  background-color: #83D7C1;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;