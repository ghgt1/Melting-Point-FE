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
  margin-bottom: 31.5px;
  height: 66px;
  text-align: center;
  white-space: pre-line;
  font-weight: bold;
  line-height: 33px;
  font-size: 22px;
`;

export const MbtiContainer = styled.div`
  margin-top: 46px;
  width: 275px;
  height: 260px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const MbtiWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  border-radius: 15px;
  background-color: #1a1e27;
  width: 275px;
  height: 80px;
  padding: 10px 25px;
`;

export const MbtiBox = styled.div`
  border-radius: 15px;
  background-color: #3163cf;
  width: 150px;
  height: 45px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
