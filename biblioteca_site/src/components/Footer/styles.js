import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 100%;
  height: 100px;
  background-color: white;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 73px;
  width: 341px;
  margin-top: 15px;
  margin-right: 32px;
  @media (max-width: 700px) {
    height: 36px;
    width: 170px;
  }
`;

export const Iconesfooter = styled.img`
  height: 30px;
  width: 110px;
  margin-top: 32px;
  margin-left: 32px;
  @media (max-width: 700px) {
    height: 15px;
    width: 65px;
  }
`;
