import styled from 'styled-components';

export const MainButton = styled.button<{ $isFinish: boolean }>`
  background-color: #1a1e27;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  width: 375px;
  height: 90px;
  border-radius: 12px 12px 0 0;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  pointer-events: ${(props) => (props.$isFinish ? undefined : 'none')};
  color: ${(props) => (props.$isFinish ? '#ffffff' : 'rgba(255, 255, 255, 0.3)')};
`;
