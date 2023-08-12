import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import balanceChar from '@assets/balanceChar.png';
import {
  StyledContainer,
  StyledTitle,
  PageNotice,
  BalanceImg,
  SelectBox,
  SelectContainer,
  Marker,
} from './styles';
import { balanceList } from '@/constants/balanceList';
import { useBalance } from '@/apis/postBalance';
import { NextBtn, LoadingOverlay } from '@/components';
import { motion } from 'framer-motion';

export default function Balance() {
  const { token, userId, number } = useParams();

  const navigate = useNavigate();

  const [select, setSelect] = useState<number>();
  const [clicked, setClicked] = useState(false);

  const { mutate } = useBalance({
    url: token || ' ',
    balance_id: Number(number || 1),
    user_id: Number(userId || 1),
    type: (select && number && balanceList[+number - 1][select - 1]) as string,
  });

  const handleFirstClick = () => {
    setSelect(1);
  };

  const handleSecondClick = () => {
    setSelect(2);
  };

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
          number && navigate(`/game/balance/result/${userId}/${token}/${+number}`);
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
        <PageNotice>{`${number}/4`}</PageNotice>
        {Number(number || 1) === 4 ? (
          <StyledTitle>
            피땀눈물 흘려 완성한 제안서
            <br />둘 중 하나를 선택한다면?
          </StyledTitle>
        ) : (
          <StyledTitle>
            둘 중 하나를
            <br />
            선택해야 한다면?
          </StyledTitle>
        )}
        <BalanceImg src={balanceChar} alt="밸런스게임 마스코트" />
        <SelectContainer>
          <SelectBox $isCheck={select === 1} onClick={handleFirstClick}>
            <Marker>A.</Marker>
            {number && balanceList[+number - 1][0]}
          </SelectBox>
          <SelectBox $isCheck={select === 2} onClick={handleSecondClick}>
            <Marker>B.</Marker>
            {number && balanceList[+number - 1][1]}
          </SelectBox>
        </SelectContainer>
        <NextBtn
          text="결과 볼게요!"
          onClick={handleNextPage}
          isFinish={select === 1 || select === 2}
        />
      </StyledContainer>
      {clicked && <LoadingOverlay />}
    </motion.div>
  );
}
