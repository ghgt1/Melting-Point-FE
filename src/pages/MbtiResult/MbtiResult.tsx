import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { LoadingOverlay, NextBtn, CharBlock, MbtiModal } from '@/components';
import { useMbtiResult } from '@/apis/getMbtiResult';
import { useMbtiOrder } from '@/apis/getMbtiOrder';
import { useRoomStatus } from '@/apis/getRoomStatus';
import { useNextGame } from '@/apis/postNextGame';
import { useParams, useNavigate } from 'react-router-dom';
import { StyledContainer, StyledTitle, MbtiContainer, MbtiBox, MbtiWrapper } from './styles';
import { returnChar } from '@/utils/returnChar';

export default function MbtiResult() {
  const { token, userId, number } = useParams();
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const { data } = useMbtiResult(token || ' ', Number(number || 1));
  const { data: orderData } = useMbtiOrder(token || ' ', Number(number || 1));
  const { data: roomData } = useRoomStatus(token || ' ');
  const { mutate } = useNextGame(token || ' ');

  const handleNextPage = () => {
    setModal(true);
    mutate();
  };

  const handleNextPerson = () => {
    mutate();
  };

  useEffect(() => {
    const eventSource = new EventSource(`${import.meta.env.VITE_API_URL}/events`);
    let count = 0;
    eventSource.onmessage = (event) => {
      // url검증
      const data = JSON.parse(event.data);
      if (data.url === token) {
        if (data.status) {
          if (count === 0) {
            setModal(true);
            count += 1;
          } else {
            if (roomData?.userCount === Number(number || 1)) {
              number && navigate(`/game/final/result/${token}`);
            } else {
              number && navigate(`/game/mbti/${userId}/${token}/${+number + 1}`);
            }
          }
        }
      }
    };

    return () => {
      eventSource.close();
    };
  }, [number, roomData]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <StyledContainer>
        <Suspense fallback={<LoadingOverlay onlySpinner={true} />}>
          <StyledTitle>
            팀원들이 예상한
            <br />
            {`${orderData?.nickname}님의 MBTI는?`}
          </StyledTitle>
          <CharBlock
            text={orderData?.nickname || ' '}
            textSize="20px"
            imgWidth="167px"
            imgSrc={returnChar(orderData?.img_id || 1)}
          />
          <MbtiContainer>
            {data?.user.map((person) => {
              return (
                <MbtiWrapper key={person.nickname}>
                  <CharBlock
                    text={person?.nickname || ' '}
                    textSize="10px"
                    imgWidth="49px"
                    imgSrc={returnChar(person?.img_id || 1)}
                  />
                  <MbtiBox>{person.choose_mbti}</MbtiBox>
                </MbtiWrapper>
              );
            })}
          </MbtiContainer>
          <NextBtn text={`${orderData?.nickname}님의 MBTI는?`} onClick={handleNextPage} />
        </Suspense>
      </StyledContainer>
      {modal && (
        <MbtiModal
          nickname={orderData?.nickname || ' '}
          mbti={data?.user_mbti || ' '}
          onClick={handleNextPerson}
          isLast={roomData?.userCount === Number(number || 1)}
        />
      )}
    </motion.div>
  );
}
