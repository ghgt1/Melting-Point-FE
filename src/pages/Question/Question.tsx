import { useState, useEffect } from 'react';
import charwithHat from '@assets/charWithHat.png';
import question1 from '@assets/question1.png';
import question2 from '@assets/question2.png';
import question3 from '@assets/question3.png';
import question4 from '@assets/question4.png';
import { StyledContainer, TopContainer, StyledTitle, CharImg, QuestionImg } from './styles';
import { pageCountConvert } from '@/utils/pageCountConvert';
import { AnimatePresence, motion } from 'framer-motion';
import { NextBtn, MeltShow } from '@/components';
import { useParams, useNavigate } from 'react-router-dom';
import { useNextGame } from '@/apis/postNextGame';
import { useNextQuestion } from '@/apis/patchNextQuestion';

export default function Question() {
  const [page, setPage] = useState(1);
  const [meltShow, setMeltShow] = useState(false);
  const { token, userId } = useParams();

  const navigate = useNavigate();

  const { mutate } = useNextGame(token || ' ');
  const { mutate: nextMutate } = useNextQuestion({ question_id: page, url: token || ' ' });

  const handleNextPage = () => {
    if (page === 4) {
      mutate();
    } else {
      nextMutate();
    }
  };

  useEffect(() => {
    const eventSource = new EventSource(`${import.meta.env.VITE_API_URL}/events`);
    eventSource.onmessage = (event) => {
      // url검증
      const data = JSON.parse(event.data);
      if (data.url === token) {
        if (data.status) {
          if (page === 4) {
            setMeltShow(true);
            setTimeout(() => {
              navigate(`/game/balance/${userId}/${token}/1`);
            }, 3000);
          } else {
            setPage((prevState) => {
              return prevState + 1;
            });
          }
        }
      }
    };
    return () => {
      eventSource.close();
    };
  }, [page]);

  return (
    <>
      {meltShow ? (
        <MeltShow id={2} />
      ) : (
        <StyledContainer>
          <TopContainer>
            <StyledTitle>
              {`${pageCountConvert(page)}번째 질문이에요!`}
              <br />
              자유롭게 대화 해 볼까요?
            </StyledTitle>
            <CharImg src={charwithHat} alt="마스코트 이미지" />
          </TopContainer>
          {
            <AnimatePresence>
              {
                <>
                  {page === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                    >
                      <QuestionImg src={question1} alt="1번질문지" />
                    </motion.div>
                  )}
                  {page === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                    >
                      <QuestionImg src={question2} alt="2번질문지" />
                    </motion.div>
                  )}
                  {page === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                    >
                      <QuestionImg src={question3} alt="3번질문지" />
                    </motion.div>
                  )}
                  {page === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                    >
                      <QuestionImg src={question4} alt="4번질문지" />
                    </motion.div>
                  )}
                </>
              }
            </AnimatePresence>
          }
          <NextBtn text={page === 4 ? '다음 게임 할래요!' : '다음'} onClick={handleNextPage} />
        </StyledContainer>
      )}
    </>
  );
}
