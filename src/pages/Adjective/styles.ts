import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
`;

export const StyledTitle = styled.p`
  height: 60px;
  margin-top: 50px;
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  white-space: pre-line;
  text-align: center;
`;

export const StyledDescription = styled.p`
  color: #838383;
  margin-top: 6px;
  margin-bottom: 40px;
  height: 44px;
`;

export const AdjectiveContainer = styled.div`
  width: 330px;
  height: 440px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 7px;
  column-gap: 11px;
`;

export const AdjectiveBox = styled.div<{ $isChecked: boolean }>`
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 160px;
  height: 45px;
  padding: 7.5px 58.5px;
  font-weight: 600;
  background-color: ${(props) => (props.$isChecked ? '#3163cf' : '#242b3a')};
`;
