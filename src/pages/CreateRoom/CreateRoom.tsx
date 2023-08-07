import { useState } from 'react';
import { motion } from 'framer-motion';
import { CopyText, StyledContainer, StyledHeader, TestContainer, UrlText } from './styles';
import { RectangleBtn, Tooltip } from '@/components';
import { clipboardCopy } from '@/utils/clipboardCopy';
import { useTooltip } from '@/hooks/useTooltip';

export default function CreateRoom() {
  const [url] = useState('http://awefas.fasefasdf.aewf');

  const { toolTip, setTooltipVisible } = useTooltip();

  const handleCopyURL = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    clipboardCopy(url)(e);
    setTooltipVisible();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <StyledContainer>
        <StyledHeader>우리 팀의 방이 생성되었어요</StyledHeader>
        <TestContainer />
        {/* TODO: 테스트용 URL. 추후에 api와 결합하여 URL작성 */}
        <UrlText>{url}</UrlText>
        <CopyText onClick={handleCopyURL}>복사해서 팀원에게 공유하기</CopyText>
        {toolTip && <Tooltip>URL이 클립보드에 복사되었습니다</Tooltip>}
        <RectangleBtn text="시작하기" />
      </StyledContainer>
    </motion.div>
  );
}
