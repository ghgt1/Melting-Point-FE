import { useState, useEffect, Suspense } from 'react';
import {
  StyledContainer,
  StyledTitle,
  StyledDescription,
  MbtiContainer,
  MbtiLine,
  MbtiBlock,
} from './styles';
import { motion } from 'framer-motion';
import { CharBlock, LoadingOverlay, NextBtn } from '@/components';
import { returnChar } from '@/utils/returnChar';
import { useMbtiOrder } from '@/apis/getMbtiOrder';
import { useMbti } from '@/apis/postMbti';
import { useParams, useNavigate } from 'react-router-dom';

export default function Mbti() {
  const { token, userId, number } = useParams();
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);
  const [select1, setSelect1] = useState<string>('');
  const [select2, setSelect2] = useState<string>('');
  const [select3, setSelect3] = useState<string>('');
  const [select4, setSelect4] = useState<string>('');

  const { data } = useMbtiOrder(token || ' ', Number(number || 1));

  const { mutate } = useMbti({
    url: token || ' ',
    user_id: Number(userId || 1),
    round_id: Number(number || 1),
    mbti: select1 + select2 + select3 + select4,
    to_user_id: data?.user_id || 1,
  });

  const self = Number(userId || 1) === data?.user_id;

  const handleNextPage = () => {
    setClicked(true);
    mutate();
  };

  useEffect(() => {
    const eventSource = new EventSource(`${import.meta.env.VITE_API_URL}/events`);
    eventSource.onmessage = (event) => {
      // url검증
      const data = JSON.parse(event.data);
      if (data.url === token) {
        if (data.status) {
          number && navigate(`/game/mbti/result/${userId}/${token}/${+number}`);
        }
      }
    };
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <StyledContainer>
        <Suspense fallback={<LoadingOverlay onlySpinner={true} />}>
          {self ? (
            <StyledTitle>
              {`나의 MBTI를`}
              <br />
              선택해주세요
            </StyledTitle>
          ) : (
            <StyledTitle>
              {`${data?.nickname}의 MBTI를`}
              <br />
              추측해보세요
            </StyledTitle>
          )}
          {self ? (
            <StyledDescription>팀원들이 MBTI를 추측해줄거에요</StyledDescription>
          ) : (
            <StyledDescription>중복선택은 불가능해요</StyledDescription>
          )}

          <CharBlock
            text={data?.nickname || ' '}
            textSize="20px"
            imgWidth="167px"
            imgSrc={returnChar(data?.img_id || 1)}
          />
          <MbtiContainer>
            <MbtiLine>
              <MbtiBlock
                $isCheck={select1 === 'E'}
                onClick={() => {
                  setSelect1('E');
                }}
              >
                E
              </MbtiBlock>
              <MbtiBlock
                $isCheck={select1 === 'I'}
                onClick={() => {
                  setSelect1('I');
                }}
              >
                I
              </MbtiBlock>
            </MbtiLine>
            <MbtiLine>
              <MbtiBlock
                $isCheck={select2 === 'N'}
                onClick={() => {
                  setSelect2('N');
                }}
              >
                N
              </MbtiBlock>
              <MbtiBlock
                $isCheck={select2 === 'S'}
                onClick={() => {
                  setSelect2('S');
                }}
              >
                S
              </MbtiBlock>
            </MbtiLine>
            <MbtiLine>
              <MbtiBlock
                $isCheck={select3 === 'F'}
                onClick={() => {
                  setSelect3('F');
                }}
              >
                F
              </MbtiBlock>
              <MbtiBlock
                $isCheck={select3 === 'T'}
                onClick={() => {
                  setSelect3('T');
                }}
              >
                T
              </MbtiBlock>
            </MbtiLine>
            <MbtiLine>
              <MbtiBlock
                $isCheck={select4 === 'P'}
                onClick={() => {
                  setSelect4('P');
                }}
              >
                P
              </MbtiBlock>
              <MbtiBlock
                $isCheck={select4 === 'J'}
                onClick={() => {
                  setSelect4('J');
                }}
              >
                J
              </MbtiBlock>
            </MbtiLine>
          </MbtiContainer>
        </Suspense>
      </StyledContainer>
      <NextBtn
        text="다음"
        onClick={handleNextPage}
        isFinish={
          select1.length === 1 &&
          select2.length === 1 &&
          select3.length === 1 &&
          select4.length === 1
        }
      />
      {clicked && <LoadingOverlay />}
    </motion.div>
  );
}
