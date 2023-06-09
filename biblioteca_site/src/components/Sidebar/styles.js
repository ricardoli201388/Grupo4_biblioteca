import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  z-index: 10;
  background-color: #074132;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 250px;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 25px;
    margin-left: 25px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
