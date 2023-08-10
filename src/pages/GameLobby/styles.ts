import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
`;

export const StyledTitle = styled.p`
  height: 30px;
  margin-top: 50px;
  font-size: 22px;
  font-weight: bold;
`;

export const Description = styled.p`
  margin-top: 4px;
  line-height: 22px;
  white-space: pre-line;
  height: 22px;
  color: #838383;
  text-align: center;
`;

export const MemberContainer = styled.div`
  margin-top: 45px;
  width: 330px;
  height: 433px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 11px;
  column-gap: 11px;
  margin-bottom: 30px;
`;
