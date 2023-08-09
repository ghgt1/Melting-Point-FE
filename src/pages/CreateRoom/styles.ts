import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeader = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 73.45px;
`;

// TODO: 이미지 받기 전에 테스트용 style컨테이너 생성

export const TestContainer = styled.div`
  width: 325px;
  height: 240px;
  background-color: #efefef;
  margin-top: 10px;
  border-radius: 15px;
`;

export const UrlText = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin-top: 107px;
`;

export const CopyText = styled.p`
  font-size: 20px;
  color: #ffffff;
  margin: 18px 0 115px 0;
  text-decoration: underline;
  cursor: pointer;
`;
