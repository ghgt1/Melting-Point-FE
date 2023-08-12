import { useState, useEffect, Suspense } from 'react';
import {
  StyledContainer,
  StyledDescription,
  StyledTitle,
  Resultcontainer,
  FinalCharContainer,
  MbtiBox,
} from './styles';
import { motion } from 'framer-motion';
import { useFinalResult } from '@/apis/getFinalResult';
import { useNextGame } from '@/apis/postNextGame';
import { MemberImgCard, MeltShow, NextBtn, LoadingOverlay } from '@/components';
import { useParams, useNavigate } from 'react-router-dom';
import roomCharOrange from '@assets/roomCharOrange.png';
import roomCharYellow from '@assets/roomCharYellow.png';
import roomCharGreen from '@assets/roomCharGreen.png';
import roomCharBlue from '@assets/roomCharBlue.png';

export default function FinalResult() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [meltShow, setMeltShow] = useState(false);

  const { data } = useFinalResult(token || ' ');

  const { mutate } = useNextGame(token || ' ');

  const handleImg = (id: number) => {
    switch (id) {
      case 1:
        return roomCharBlue;
      case 2:
        return roomCharOrange;
      case 3:
        return roomCharGreen;
      case 4:
        return roomCharYellow;
      default:
        return roomCharBlue;
    }
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
            navigate(`/`);
          }, 3000);
        }
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const handleNextPage = () => {
    mutate();
  };

  return (
    <>
      {meltShow ? (
        <MeltShow id={4} />
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <StyledContainer>
            <Suspense fallback={<LoadingOverlay onlySpinner={true} />}>
              <StyledTitle>우리 팀원을 소개합니다!</StyledTitle>
              <StyledDescription>팀원들에 대해 많이 알게 되셨나요?</StyledDescription>
              <Resultcontainer>
                {data?.map((user) => {
                  return (
                    <FinalCharContainer key={user.nickname}>
                      <MemberImgCard name={user.nickname} src={handleImg(user.img_id)} />
                      <MbtiBox>{user.mbti}</MbtiBox>
                    </FinalCharContainer>
                  );
                })}
              </Resultcontainer>
              <NextBtn onClick={handleNextPage} text="마무리 할게요!" />
            </Suspense>
          </StyledContainer>
        </motion.div>
      )}
    </>
  );
}
