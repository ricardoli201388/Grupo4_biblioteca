import styled from "styled-components";

export const Titulo = styled.div`
margin-top: 5%;
    margin-left: 20%;
  font-size: 40px;
  font-weight: bold;
  color: white;
  @media (max-width: 700px) {
    font-size: 30px;
    margin-left: 10%;
  }

`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  height: 100%;
  background-color: #28846c;
  font-family: "poppins";
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
