import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #242b3a;
  border-radius: 20px;
  width: 310px;
  height: 480px;
  padding: 20px 15px 0 15px;
  margin-bottom: 27px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export const ListContainer = styled.div<{ $isCheck: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 12px 0;
  border-radius: 15px;
  width: 280px;
  height: 130px;
  padding: 0 48.5px;
  background-color: ${(props) => (props.$isCheck ? '#3163cf' : '#5978b9')};
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 220px;
  margin: 0 auto;
`;

export const BigMarker = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 3px;
`;

export const Marker = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 18px;
`;
