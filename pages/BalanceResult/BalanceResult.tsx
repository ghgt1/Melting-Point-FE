import { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  StyledContainer,
  PageNotice,
  StyledTitle,
  StyledDescription,
  SelectContainer,
  SelectBox,
  MarkerContainer,
  Marker,
  SelectTextBox,
  CharContainer,
} from './styles';
import { useBalanceList } from '@/apis/getBalance';
import { useParams, useNavigate } from 'react-router-dom';
import { splitBalance } from '@/utils/splitBalance';
import { CharBlock, MeltShow, NextBtn, LoadingOverlay } from '@/components';
import { returnChar } from '@/utils/returnChar';
import { useNextGame } from '@/apis/postNextGame';

export default function BalanceResult() {
  const { token, userId, number } = useParams();
  const navigate = useNavigate();

  const { data } = useBalanceList(token || ' ', Number(number || 1));

  const { mutate } = useNextGame(token || ' ');

  const [meltShow, setMeltShow] = useState(false);

  const aPercent = splitBalance(data?.percent[0] || ' ')[1];
  const aDescription = splitBalance(data?.percent[0] || ' ')[0];

  const bPercent = splitBalance(data?.percent[1] || ' ')[1];
  const bDescription = splitBalance(data?.percent[1] || ' ')[0];

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
          if (Number(number) === 4) {
            setMeltShow(true);
            setTimeout(() => {
              navigate(`/game/mbti/${userId}/${token}/1`);
            }, 3000);
          } else {
            number && navigate(`/game/balance/${userId}/${token}/${+number + 1}`);
          }
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
        <MeltShow id={3} />
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <StyledContainer>
            <Suspense fallback={<LoadingOverlay onlySpinner={true} />}>
              <PageNotice>{`${number}/4`}</PageNotice>
              <StyledTitle>자유롭게 논의해보세요</StyledTitle>
              <StyledDescription>팀원들의 선택 결과에요</StyledDescription>
              <SelectContainer>
                <SelectBox $isCheck={aPercent > bPercent}>
                  <MarkerContainer>
                    <Marker></Marker>
                    <Marker>A.</Marker>
                    <Marker>{`${aPercent}%`}</Marker>
                  </MarkerContainer>
                  <SelectTextBox>{aDescription}</SelectTextBox>
                  <CharContainer>
                    {data?.user.map((person) => {
                      if (person.balance_type === aDescription) {
                        return (
                          <CharBlock
                            text={person.nickname}
                            textSize="10px"
                            imgWidth="60px"
                            imgSrc={returnChar(person.img_id)}
                            key={person.nickname}
                          />
                        );
                      }
                    })}
                  </CharContainer>
                </SelectBox>
                <SelectBox $isCheck={bPercent > aPercent}>
                  <MarkerContainer>
                    <Marker></Marker>
                    <Marker>B.</Marker>
                    <Marker>{`${bPercent}%`}</Marker>
                  </MarkerContainer>
                  <SelectTextBox>{bDescription}</SelectTextBox>
                  <CharContainer>
                    {data?.user.map((person) => {
                      if (person.balance_type === bDescription) {
                        return (
                          <CharBlock
                            text={person.nickname}
                            textSize="10px"
                            imgWidth="60px"
                            imgSrc={returnChar(person.img_id)}
                            key={person.nickname}
                          />
                        );
                      }
                    })}
                  </CharContainer>
                </SelectBox>
              </SelectContainer>
              <NextBtn
                text={Number(number) === 4 ? '다음 게임 할게요!' : '다음'}
                onClick={handleNextPage}
              />
            </Suspense>
          </StyledContainer>
        </motion.div>
      )}
    </>
  );
}
