import { StyledContainer, DoneText, TitleText, CardImage, ExplainText } from './styles';
import { useNickNameContext } from '@/hooks/useNickNameContext';
import charOrange from '@assets/charOrange.png';
import charYellow from '@assets/charYellow.png';
import charGreen from '@assets/charGreen.png';
import charBlue from '@assets/charBlue.png';
import { NextBtn } from '@/components';
import { motion } from 'framer-motion';
import { useTestContext } from '@/hooks/useTestContext';
import { testResult } from '@/constants/testList';
import { useParams } from 'react-router-dom';
import { useRoomCheckIn } from '@/apis/postRoomCheckIn';
import { useEffect } from 'react';

export default function TestResult() {
  const { nickName } = useNickNameContext();
  const { result } = useTestContext();
  const { token } = useParams();

  const { data, mutate } = useRoomCheckIn({
    img_id: testResult[result][0],
    nickname: nickName || ' ',
    url: token || ' ',
  });

  console.log(data);

  useEffect(() => {
    console.log(data);
    if (data) {
      // Data is available, handle it here
      console.log(data);
    }
  }, [data]);

  const handleNextPage = () => {
    mutate();
  };

  const imgSrc = (() => {
    switch (testResult[result][0]) {
      case 1:
        return charBlue;
      case 2:
        return charOrange;
      case 3:
        return charGreen;
      case 4:
        return charYellow;
      default:
        return charBlue;
    }
  })();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <StyledContainer>
        <DoneText>테스트가 완료되었어요</DoneText>
        <TitleText>
          {`${nickName} 님은`}
          <br />
          {`${testResult[result][1]}이네요!`}
        </TitleText>
        <CardImage src={imgSrc} alt={testResult[result][1]} />
        <ExplainText>{testResult[result][2]}</ExplainText>
        <NextBtn text="다음" onClick={handleNextPage} />
      </StyledContainer>
    </motion.div>
  );
}
