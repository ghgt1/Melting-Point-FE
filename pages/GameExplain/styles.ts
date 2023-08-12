import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: 115px;
`;

export const StyledTitle = styled.p`
  margin-top: 50px;
  white-space: pre-line;
  height: 60px;
  font-size: 22px;
  line-height: 30px;
  font-weight: bold;
`;

export const StyledDescription = styled.p`
  height: 22px;
  color: #838383;
`;

export const ExplainImg = styled.img`
  margin-top: 35px;
  width: 260px;
  height: 450px;
`;
