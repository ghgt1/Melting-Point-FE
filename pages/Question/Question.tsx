import { useState, useEffect } from 'react';
import charwithHat from '@assets/charWithHat.png';
import question1 from '@assets/question1.png';
import question2 from '@assets/question2.png';
import question3 from '@assets/question3.png';
import question4 from '@assets/question4.png';
import {
  StyledContainer,
  TopContainer,
  StyledTitle,
  CharImg,
  QuestionContainer,
  PageNotice,
  StyledDescription,
  QuestionImg,
} from './styles';
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
                      <QuestionContainer>
                        <PageNotice>1/4</PageNotice>
                        <StyledDescription>
                          가장 최근에 본<br />
                          영화는 무엇인가요?
                        </StyledDescription>
                        <QuestionImg src={question1} alt="질문 이미지" />
                      </QuestionContainer>
                    </motion.div>
                  )}
                  {page === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                    >
                      <QuestionContainer>
                        <PageNotice>2/4</PageNotice>
                        <StyledDescription>
                          일하면서 음악을 즐겨듣나요?
                          <br />
                          듣는다면 어떤 종류의
                          <br />
                          음악을 듣나요?
                        </StyledDescription>
                        <QuestionImg src={question2} alt="질문 이미지" />
                      </QuestionContainer>
                    </motion.div>
                  )}
                  {page === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                    >
                      <QuestionContainer>
                        <PageNotice>3/4</PageNotice>
                        <StyledDescription>
                          현재 노트북 배경화면은
                          <br />
                          무엇인가요?
                        </StyledDescription>
                        <QuestionImg src={question3} alt="질문 이미지" />
                      </QuestionContainer>
                    </motion.div>
                  )}
                  {page === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                    >
                      <QuestionContainer>
                        <PageNotice>4/4</PageNotice>
                        <StyledDescription>
                          내일 세상이 멸망한다면
                          <br />
                          무엇을 하고싶나요?
                        </StyledDescription>
                        <QuestionImg src={question4} alt="질문 이미지" />
                      </QuestionContainer>
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
