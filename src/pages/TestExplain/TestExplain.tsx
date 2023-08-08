import { useState } from 'react';
import { motion } from 'framer-motion';
import { StyledContainer, StyledTitle, ExplainImg, NameNoticeSpan, StyledInput } from './styles';
import TestExplainImg from '@assets/testExplain.png';
import { RectangleBtn } from '@/components';

export default function TestExplain() {
  const [name, setName] = useState('');

  // TODO:닉네임 validation 필요

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNextPage = () => {
    // TODO: 심리테스트 페이지로 이동
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <StyledContainer>
        <StyledTitle>
          먼저, <br />
          간단한 테스트를 진행할거에요!
        </StyledTitle>
        <ExplainImg src={TestExplainImg} alt="테스트 설명 이미지" />
        <NameNoticeSpan>닉네임을 설정해 주세요</NameNoticeSpan>
        <StyledInput
          placeholder="닉네임을 입력해주세요"
          value={name}
          onChange={handleInputChange}
        />
        <RectangleBtn text="입장하기" onClick={handleNextPage} />
      </StyledContainer>
    </motion.div>
  );
}
