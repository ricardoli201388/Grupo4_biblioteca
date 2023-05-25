import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #074132;
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  font-family: "poppins";
  > svg {
    margin: 0 20px;
  }

  &:hover {
    border: solid;
    border-color: white;
  }
`;

// export const StyledLink = styled(Link)`
//     text-decoration: none;
// `
