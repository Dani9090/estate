import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledModal = styled.div`
  width: auto;
  z-index: 999999;
  position: relative;
  display: none;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  top: 0;
  right: 0;
  background: none;
  padding-left: 6px;
  
  z-index: 999999;
  border: 2px solid black;
  border-radius: 10%;
  position: absolute;

  &:focus {
    outline: 2px auto black;
    -moz-outline-radius: 5px;

  }

  ${({ theme }) => theme.media.tablet} {
    width: 50px;
    height: 50px;

    background: none;
    z-index: 9999;
    padding-left: 10px;
    margin-top: 35px;
    margin-right: 10px;
    margin-left: 0;

    &:focus {
      outline: 2px auto black;
      -moz-outline-radius: 5px;

    }
  }

  ${({ theme }) => theme.media.desktop} {
    width: 40px;
    height: 40px;
    margin: 0;
    background: none;
    z-index: 9999;
    padding-left: 7px;

    &:focus {
      outline: 2px auto black;
      -moz-outline-radius: 5px;

    }
  }

;
`;
const ButtonInner = styled.div`
  position: relative;

  ::before, ::after {
    content: '';
    position: absolute;
    display: flex;
    width: 25px;
    height: 2px;
    left: 0;
    background-color: black;
    transition: transform .25s .15s ease-in-out;

  }

  ::before {
    top: -7px;
    transform: translateY(7px) rotate(45deg);
  }

  ::after {
    top: 7px;
    left: 0;
    transform: translateY(-7px) rotate(-45deg);
  }
`;
const StyledInner = styled.div`
  display: grid;
  place-items: center;
  position: relative;

  p {
    font-family: ${({ theme }) => theme.font.family.montserrat};
    text-align: center;
    margin-top: 70px;

  }
`;

const customStyles = {
  content: {
    width: "auto",
    height: "200px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "99999999999"
  }
};

const ModalTest = ({ isModalOpen, setModalOpen }) => {

  const toogleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <StyledModal>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toogleModalClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledInner>

          <Button onClick={toogleModalClose}>
            <ButtonInner />
          </Button>
          <p>Dziekujemy za wysłanie zapytania skontaktujemy się</p>
        </StyledInner>
      </Modal>
    </StyledModal>
  );
};
ModalTest.propTypes = {
  isModalOpen: PropTypes.bool,
  setModalOpen:PropTypes.func,
}

ModalTest.defaultProps = {
  isModalOpen: false,

}
export default ModalTest;
