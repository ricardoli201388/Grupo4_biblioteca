import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  height: 80px;
  background-color: #0e5a46;
  justify-content: space-between;
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 23px;
    margin-left: 27px;
    cursor: pointer;
    @media (max-width: 700px) {
      height: 20px;
      width: 20px;
      margin-top: 28px;
      margin-left: 10px;
    }
  }
`;

export const Logo = styled.img`
  height: 55px;
  width: 265px;
  margin-top: 15px;
  margin-left: 100px;

  @media (max-width: 700px) {
    height: 25px;
    width: 120px;
    margin-top: 25px;
    margin-left: 35px;
  }
`;

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 50px;
  color: white;
  height: 80px;
  //width: 300px;
  //margin-top: 25px;
`;

export const BotaoLogin = styled.button`
  font-size: 23px;
  color: white;
  background-color: #0e5a46;
  font-family: "poppins", sans-serif;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 25px;
  background-color: #0e5a46;
  border: none;
  cursor: pointer;

  &:hover {
    /* color: black; */
    /* transition: .4s */
    border: solid;
    border-color: white;
    border-width: 1px;
  }
`;

export const BotaoCadastro = styled.button`
  font-size: 23px;
  color: white;
  font-family: "poppins", sans-serif;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 25px;
  background-color: #0e5a46;
  border: none;
  cursor: pointer;

  &:hover {
    /* color: black; */
    /* transition: .4s */
    border: solid;
    border-color: white;
    border-width: 1px;
  }
`;
export const StyledLink = styled(Link)`
  font-size: 23px;
  color: white;
  font-family: "poppins", sans-serif;
  margin-right: 20px;
  margin-top: 30px;
  margin-bottom: 25px;
  background-color: #0e5a46;
  text-decoration: none;

  &:hover {
    color: black; 
    /* transition: .4s */
    /* border: solid;
    border-color: white;
    border-width: 1px; */
  }

  @media (max-width: 700px) {
    font-size: 12px;
    margin-right: 3px;
    margin-top: 30px;
    margin-left: 5px;
  }
`;

export const BotaoLogout = styled.button`
    font-size: 23px;
  color: white;
  background-color: #0e5a46;
  font-family: "poppins", sans-serif;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 25px;
  background-color: #0e5a46;
  border: none;
  cursor: pointer;

  &:hover {
    color: black;
  }

`
