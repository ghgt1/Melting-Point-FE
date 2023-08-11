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
    case 2:
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <StyledContainer>
            <StyledTitle>
              이글루가 녹고, <br /> 모닥불이 피어났어요!
            </StyledTitle>
            <StyledDescription>더 좋은 팀베이스가 되어가고 있어요</StyledDescription>
            <MeltingImg src={meltImg2} alt="이글루 녹는과정 이미지" />
            <EndText>
              다음은 공통질문에
              <br /> 각자 대답하는 시간이에요
            </EndText>
          </StyledContainer>
        </motion.div>
      );
    case 3:
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <StyledContainer>
            <StyledTitle>
              이글루가 녹고, <br /> 모닥불이 피어났어요!
            </StyledTitle>
            <StyledDescription>더 좋은 팀베이스가 되어가고 있어요</StyledDescription>
            <MeltingImg src={meltImg3} alt="이글루 녹는과정 이미지" />
            <EndText>
              다음은 공통질문에
              <br /> 각자 대답하는 시간이에요
            </EndText>
          </StyledContainer>
        </motion.div>
      );
    case 4:
      return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <StyledContainer>
            <StyledTitle>
              이글루가 녹고, <br /> 모닥불이 피어났어요!
            </StyledTitle>
            <StyledDescription>더 좋은 팀베이스가 되어가고 있어요</StyledDescription>
            <MeltingImg src={meltImg4} alt="이글루 녹는과정 이미지" />
            <EndText>
              다음은 공통질문에
              <br /> 각자 대답하는 시간이에요
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
