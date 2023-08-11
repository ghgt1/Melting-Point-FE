import {
  StyledContainer,
  StyledTitle,
  CharImg,
  TopContainer,
  ResultContainer,
  TotalContainer,
  GridContainer,
  AdjectiveBlock,
} from './styles';
import charWithHat from '@assets/charWithHat.png';
import { useAdjectiveList } from '@/apis/getAdjectiveList';
import { useParams } from 'react-router-dom';
import { returnChar } from '@/utils/returnChar';
import { AdjectiveListDto } from '@/types/AdjectiveListDto';
import { CharBlock, NextBtn } from '@/components';

export default function AdjectiveResult() {
  const { token } = useParams();
  const { data } = useAdjectiveList(token || ' ');

  const handleNextPage = () => {
    console.log('다음페이지이동!');
  };

  return (
    <StyledContainer>
      <TopContainer>
        <StyledTitle>
          형용사를 통해서 <br /> 나를 소개해보세요!
        </StyledTitle>
        <CharImg src={charWithHat} alt="마스코트 이미지" />
      </TopContainer>
      <TotalContainer>
        {data?.map((user: AdjectiveListDto) => {
          return (
            <ResultContainer>
              <CharBlock
                text={user.nickname}
                imgSrc={returnChar(user.img_id)}
                imgWidth={'80px'}
                textSize={'14px'}
              />
              <GridContainer>
                {user.expressions.map((expression) => {
                  return <AdjectiveBlock>{expression}</AdjectiveBlock>;
                })}
              </GridContainer>
            </ResultContainer>
          );
        })}
      </TotalContainer>
      <NextBtn text="다음 게임 할래요!" onClick={handleNextPage} />
    </StyledContainer>
  );
}
