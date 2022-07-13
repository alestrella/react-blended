import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  padding: 40px 25px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 4px;
  padding: 6px 12px;
  color: white;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #303f9f;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
`;
