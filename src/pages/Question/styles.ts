import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  margin: 0 24px;
`;

export const TopContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 56px;
  align-items: center;
`;

export const StyledTitle = styled.p`
  white-space: pre-line;
  height: 60px;
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
`;

export const CharImg = styled.img`
  width: 87px;
`;

export const QuestionImg = styled.img`
  margin-top: 28px;
  width: 327px;
  height: 445px;
`;
