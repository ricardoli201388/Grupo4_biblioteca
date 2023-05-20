import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  background-color: #28846C;
`;

export const Titulo = styled.p`
  font-size: 20px;
  color: white;
  width: 100%;
  text-align: center;
  @media (max-width: 700px){
    display:${(props)=>props.sumir ?"none":"block"}
  }
  `;

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #0E5A46;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 500px;
`

export const Texto = styled.p`
  font-size: 23px;
  color: black;
  padding-top:50px;
`
export const Tabela = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   background-color: #84C396;
`

export const ColunaFuncionario = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 120px;
  padding-bottom:50px;
`

export const ColunaCargo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 140px;
  
  @media (max-width: 700px){
    display:${(props)=>props.sumir ?"none":"block"}
  }
`
export const ColunaChegada = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 150px;
`
export const ColunaCronometro = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 150px;
`
