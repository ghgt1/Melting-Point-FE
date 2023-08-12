import { StyledContainer, StyledTitle, StyledDescription, MeltingImg, EndText } from './styles';
import meltImg1 from '@assets/meltImg1.png';
import meltImg2 from '@assets/meltImg2.png';
import meltImg3 from '@assets/meltImg3.png';
import meltImg4 from '@assets/meltImg4.png';
import { motion } from 'framer-motion';

type MeltShowProps = { id: number };

export default function MeltShow({ id }: MeltShowProps) {
  switch (id) {
    case 1:
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <StyledContainer>
            <StyledTitle>
              우리 팀 이글루에, <br /> 모닥불이 피어났어요!
            </StyledTitle>
            <StyledDescription>불을 더 뜨겁게 지펴볼까요?</StyledDescription>
            <MeltingImg src={meltImg1} alt="이글루 녹는과정 이미지" />
            <EndText>
              같은 질문에 우리 팀원들은
              <br /> 각자 뭐라고 답변할까요?
            </EndText>
          </StyledContainer>
        </motion.div>
      );
    case 2:
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <StyledContainer>
            <StyledTitle>
              이글루가 녹아, <br /> 새로운 팀베이스를 지어야해요!
            </StyledTitle>
            <StyledDescription>힘을 합쳐 함께 지어보아요</StyledDescription>
            <MeltingImg src={meltImg2} alt="이글루 녹는과정 이미지" />
            <EndText>
              상황별로 팀원들과 나의 선택에는
              <br /> 어떤 차이가 있을까요?
            </EndText>
          </StyledContainer>
        </motion.div>
      );
    case 3:
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <StyledContainer>
            <StyledTitle>
              우리의 새로운 팀베이스가
              <br /> 점점 자리를 잡아가고 있어요!
            </StyledTitle>
            <StyledDescription>더욱 견고한 사이가 되어보아요</StyledDescription>
            <MeltingImg src={meltImg3} alt="이글루 녹는과정 이미지" />
            <EndText>
              조금은 친해진 우리..
              <br /> 서로에 대해 맞춰볼까요?
            </EndText>
          </StyledContainer>
        </motion.div>
      );
    case 4:
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <StyledContainer>
            <StyledTitle>
              우리가 앞으로 함께할
              <br /> 새로운 팀베이스에요!
            </StyledTitle>
            <StyledDescription>이만큼 우리의 사이도 단단해졌겠죠?</StyledDescription>
            <MeltingImg src={meltImg4} alt="이글루 녹는과정 이미지" />
            <EndText>
              이제 모든 준비가 완료되었어요!
              <br /> 서로를 믿고 함께 시작해봐요
            </EndText>
          </StyledContainer>
        </motion.div>
      );
    default:
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <StyledContainer>
            <StyledTitle>
              이글루가 녹고, <br /> 모닥불이 피어났어요!
            </StyledTitle>
            <StyledDescription>더 좋은 팀베이스가 되어가고 있어요</StyledDescription>
            <MeltingImg src={meltImg1} alt="이글루 녹는과정 이미지" />
            <EndText>
              다음은 공통질문에
              <br /> 각자 대답하는 시간이에요
            </EndText>
          </StyledContainer>
        </motion.div>
      );
  }
}
