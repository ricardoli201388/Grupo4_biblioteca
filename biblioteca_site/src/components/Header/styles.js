import styled from"styled-components";

export const Container = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  height: 80px;
  background-color: #0E5A46;
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


}

`;

export const Logo = styled.img`
    height: 50px;
    width: 270px;
    margin-top: 15px;
    margin-left: 100px;

    /* @media (max-width: 700px) {
    width: 40px;
    height: 40px;
  } */
`;

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 50px;
  color: white;
  height: 80px;
  width: 300px;

`;

export const Text = styled.button`
  font-size: 23px;
  color: white;
  background-color: #0E5A46;
  font-family: "poppins", sans-serif;
  border: none;
  margin-right: 20px;
  margin-top: 25px;
`;



