import styled from 'styled-components';

export const ImgBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CharImg = styled.img<{ imgWidth: string }>`
  width: ${(props) => props.imgWidth};
`;

export const StyledText = styled.p<{ textSize: string }>`
  font-size: ${(props) => props.textSize};
  height: 20px;
  margin-top: 4px;
  font-weight: 600;
`;
