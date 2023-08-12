import styled from 'styled-components';

export const ModalOverlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 11px;
  width: 260px;
  height: 150px;
  border-radius: 16px;
  background-color: #3163cf;
  padding: 0 42px;
`;

export const ModalNicknme = styled.p`
  margin-top: 8px;
  width: 180px;
  font-size: 18px;
  font-weight: 600;
  white-space: pre-line;
  height: 52px;
`;

export const ModalButton = styled.div`
  width: 180px;
  height: 45px;
  background-color: #242b3a;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
