import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F4C2C2;
  height: 100vh;
  width: 100%;
  font-size: 1.5rem;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 500ms;
  transform: translateX(-100%);
  transform: ${({ modalOpen }) => modalOpen ? 'translateX(0)' : 'translateX(100%)'};
  z-index: 9;

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    font-family: poor story;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #FED677;
    }
  }
`;

const Menu = ({ modalOpen, setModalOpen }) => {
  
  return (
    <StyledModal modalOpen={modalOpen}>
      {modalOpen && (
        <>
          <Link onClick={() => (( setModalOpen(!modalOpen)))} to="/">
            Home
          </Link>
          <Link onClick={() => (( setModalOpen(!modalOpen)))} to="/Contact">
            Contact 
          </Link>
        </>
      )}
    </StyledModal>
  )
}

export default Menu
