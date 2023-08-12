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
  height: 33px;
  font-size: 22px;
  font-weight: bold;
  margin-top: 32px;
`;

export const StyledDescription = styled.p`
  margin-top: 6px;
  height: 22px;
  color: #838383;
`;

export const Resultcontainer = styled.div`
  margin-top: 23px;
  width: 327px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 11px;
  column-gap: 16px;
`;

export const FinalCharContainer = styled.div`
  width: 158px;
  height: 252px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const MbtiBox = styled.div`
  background-color: #242b3a;
  border-radius: 10px;
  height: 32px;
  width: 158px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
`;
