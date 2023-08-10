import { StyledContainer, StyledDescription, StyledTitle, ExplainImg } from './styles';
import gameExplain from '@assets/gameExplain.png';
import { NextBtn } from '@/components';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function GameExplain() {
  const { token, userId } = useParams();
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate(`/game/lobby/${userId}/${token}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <StyledContainer>
        <StyledTitle>
          우리 팀의 아이스브레이킹은
          <br />
          이렇게 진행될 예정이에요
        </StyledTitle>
        <StyledDescription>아직은 차가운 분위기를 녹여볼까요?</StyledDescription>
        <ExplainImg src={gameExplain} alt="게임 설명 이미지" />
        <NextBtn text="시작할래요!" onClick={handleNextPage} />
      </StyledContainer>
    </motion.div>
  );
}
