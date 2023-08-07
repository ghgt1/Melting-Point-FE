import styled from 'styled-components';

export const StyledTooltip = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;

  white-space: nowrap;
  animation: tooltipSlideUp 0.5s forwards;
  @keyframes tooltipSlideUp {
    0% {
      bottom: 45%;
      opacity: 0;
    }
    100% {
      bottom: 47%;
      opacity: 0.9;
    }
  }
`;
