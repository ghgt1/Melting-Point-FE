import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  margin: 0 24px;
  padding-bottom: 115px;
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

export const QuestionContainer = styled.div`
  margin-top: 28px;
  background: linear-gradient(152.16deg, #002b78, #050d1e);
  border-radius: 15px;
  width: 327px;
  height: 445px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
`;

export const PageNotice = styled.div`
  margin-top: 46px;
  width: 95px;
  height: 30px;
  border-radius: 15px;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  background-color: #3163cf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDescription = styled.p`
  font-weight: 600;
  line-height: 34px;
  font-size: 22px;
  white-space: pre-line;
  margin-top: 20px;
  text-align: center;
  height: 102px;
  display: flex;
  align-items: center;
`;

export const QuestionImg = styled.img`
  margin-top: 35px;
  width: 230px;
  height: 188px;
`;
