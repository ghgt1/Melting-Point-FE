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

export const StyledTitle = styled.p`
  margin-top: 46px;
  height: 66px;
  text-align: center;
  white-space: pre-line;
  font-weight: bold;
  line-height: 33px;
  font-size: 22px;
`;

export const StyledDescription = styled.p`
  margin-top: 4px;
  color: #838383;
  height: 22px;
  margin-bottom: 10px;
`;

export const MbtiContainer = styled.div`
  margin-top: 69px;
  width: 327px;
  height: 230px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const MbtiLine = styled.div`
  width: 327px;
  display: flex;
  gap: 7px;
`;

export const MbtiBlock = styled.div<{ $isCheck: boolean }>`
  background-color: ${(props) => (props.$isCheck ? '#3163cf' : '#242b3a')};
  border-radius: 15px;
  padding: 8px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 49px;
`;
