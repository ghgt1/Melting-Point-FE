import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  margin: 0 24px;
`;

export const PageNotice = styled.div`
  margin-top: 46px;
  width: 80px;
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

export const StyledTitle = styled.p`
  margin-top: 30px;
  height: 33px;
  font-size: 22px;
  font-weight: bold;
`;

export const StyledDescription = styled.p`
  height: 22px;
  margin-top: 3px;
  color: #838383;
`;

export const SelectContainer = styled.div`
  height: 422px;
  width: 327px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 45px;
`;

export const SelectBox = styled.div<{ $isCheck: boolean }>`
  border-radius: 15px;
  width: 327px;
  height: 205px;
  background-color: ${(props) => (props.$isCheck ? '#3163cf' : '#5978b9')};
  padding: 20px 0px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
`;

export const SelectTextBox = styled.p`
  padding: 0 65px;
  font-size: 18px;
  font-weight: 600;
  word-break: keep-all;
`;

export const MarkerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Marker = styled.p`
  width: auto;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const CharContainer = styled.div`
  margin-top: 20px;
  width: 327px;
  height: 60px;
  display: flex;
  gap: 9px;
  justify-content: center;
  align-items: center;
`;
