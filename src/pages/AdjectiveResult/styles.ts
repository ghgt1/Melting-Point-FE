import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: 115px;
  margin: 0 24px;
`;

export const TopContainer = styled.div`
  display: flex;
  gap: 60px;
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

export const TotalContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 11px;
`;

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 323px;
  height: 115px;
  padding: 10px;
  background-color: #242b3a;
  border-radius: 15px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 90px;
  row-gap: 6px;
  column-gap: 9px;
`;

export const AdjectiveBlock = styled.div`
  width: 97px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4f7fe5;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
`;
