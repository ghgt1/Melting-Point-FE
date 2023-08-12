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
  margin-top: 18px;
  height: 66px;
  text-align: center;
  white-space: pre-line;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
`;

export const BalanceImg = styled.img`
  margin-top: 18px;
  width: 150px;
  height: 150px;
`;

export const SelectContainer = styled.div`
  height: 270px;
  width: 327px;
  display: flex;
  flex-direction: column;
  row-gap: 11px;
  margin-top: 26px;
`;

export const SelectBox = styled.div<{ $isCheck: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  width: 327px;
  height: 130px;
  padding: 0 55px;
  background-color: ${(props) => (props.$isCheck ? '#3163cf' : '#5978b9')};
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  line-height: 24px;
  word-break: keep-all;
`;

export const Marker = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 18px;
`;
