import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  margin-top: 55px;
  white-space: pre-line;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  line-height: 33px;
`;

export const ExplainImg = styled.img`
  margin-top: 35px;
  width: 260px;
  height: 211px;
`;

export const NameNoticeSpan = styled.p`
  margin-top: 92.5px;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
`;

export const StyledInput = styled.input`
  text-align: center;
  margin-top: 13px;
  width: 147px;
  height: 25px;
  font-size: 16px;
  color: #838383;
  border-bottom: 1px solid #838383;
  padding-bottom: 6px;

  &::placeholder {
    font-size: 14px;
    text-align: center;
  }

  margin-bottom: 112px;
`;
