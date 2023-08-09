import { useState } from 'react';
import { motion } from 'framer-motion';
import { StyledContainer, StyledTitle, ExplainImg, NameNoticeSpan, StyledInput } from './styles';
import TestExplainImg from '@assets/testExplain.png';
import { RectangleBtn, Tooltip } from '@/components';
import { nickNamePattern } from '@/constants/nicknamePattern';
import { useTooltip } from '@/hooks/useTooltip';
import { useNavigate, useParams } from 'react-router-dom';
import { useNickNameContext } from '@/hooks/useNickNameContext';

export default function TestExplain() {
  const [name, setName] = useState('');
  const { toolTip, setTooltipVisible } = useTooltip();
  const navigate = useNavigate();
  const { token } = useParams();

  const { setNickName } = useNickNameContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNextPage = () => {
    // 유효성검사
    const isValidNickname = nickNamePattern.test(name);
    if (!isValidNickname) {
      setTooltipVisible();
    } else {
      setNickName(name);
      navigate(`/test/${token}`);
    }
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
        {toolTip && <Tooltip>닉네임은 특수문자 제외 1글자이상, 7글자 이하여야합니다.</Tooltip>}
        <RectangleBtn text="입장하기" onClick={handleNextPage} />
      </StyledContainer>
    </motion.div>
  );
}
