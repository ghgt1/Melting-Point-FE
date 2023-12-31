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
import { useParams, useNavigate } from 'react-router-dom';
import { returnChar } from '@/utils/returnChar';
import { AdjectiveListDto } from '@/types/AdjectiveListDto';
import { CharBlock, NextBtn, MeltShow, LoadingOverlay } from '@/components';
import { useNextGame } from '@/apis/postNextGame';
import { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AdjectiveResult() {
  const { token, userId } = useParams();
  const { data } = useAdjectiveList(token || ' ');

  const { mutate } = useNextGame(token || ' ');

  const navigate = useNavigate();

  const [meltShow, setMeltShow] = useState(false);

  const handleNextPage = () => {
    mutate();
  };

  useEffect(() => {
    const eventSource = new EventSource(`${import.meta.env.VITE_API_URL}/events`);
    eventSource.onmessage = (event) => {
      // url검증
      const data = JSON.parse(event.data);
      if (data.url === token) {
        if (data.status) {
          setMeltShow(true);
          setTimeout(() => {
            navigate(`/game/question/${userId}/${token}`);
          }, 3000);
        }
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <>
      {meltShow ? (
        <MeltShow id={1} />
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <StyledContainer>
            <Suspense fallback={<LoadingOverlay onlySpinner={true} />}>
              <TopContainer>
                <StyledTitle>
                  형용사를 통해서 <br /> 나를 소개해보세요!
                </StyledTitle>
                <CharImg src={charWithHat} alt="마스코트 이미지" />
              </TopContainer>
              <TotalContainer>
                {data?.map((user: AdjectiveListDto) => {
                  return (
                    <ResultContainer key={user.nickname}>
                      <CharBlock
                        text={user.nickname}
                        imgSrc={returnChar(user.img_id)}
                        imgWidth={'80px'}
                        textSize={'14px'}
                      />
                      <GridContainer>
                        {user.expressions.map((expression, index) => {
                          return <AdjectiveBlock key={index}>{expression}</AdjectiveBlock>;
                        })}
                      </GridContainer>
                    </ResultContainer>
                  );
                })}
              </TotalContainer>
              <NextBtn text="다음 게임 할래요!" onClick={handleNextPage} />
            </Suspense>
          </StyledContainer>
        </motion.div>
      )}
    </>
  );
}
