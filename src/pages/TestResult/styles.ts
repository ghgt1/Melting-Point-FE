import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: 115px;
`;

export const DoneText = styled.p`
  color: #838383;
  font-size: 16px;
  margin-top: 30px;
  height: 22px;
`;

export const TitleText = styled.p`
  line-height: 30px;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 4px;
  height: 60px;
  white-space: pre-line;
  text-align: center;
`;

export const CardImage = styled.img`
  width: 280px;
  height: 400px;
  margin-top: 35px;
  margin-bottom: 30px;
`;

export const ExplainText = styled.p`
  line-height: 26px;
  margin: 0 32px;
  text-align: center;
  font-size: 16px;
  color: #c0c0c0;
  height: 52px;
  margin-top: 4px;
  margin-bottom: 50px;
`;
