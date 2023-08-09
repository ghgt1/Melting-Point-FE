// import { useState } from 'react';
import { motion } from 'framer-motion';
import { CopyText, StyledContainer, StyledHeader, MainImg, UrlText } from './styles';
import { RectangleBtn, Tooltip } from '@/components';
import { clipboardCopy } from '@/utils/clipboardCopy';
import { createUrl } from '@/utils/createUrl';
import { useTooltip } from '@/hooks/useTooltip';
import { useNavigate } from 'react-router-dom';
import charwithHat from '@assets/charWithHat.png';
// import { useRoomUrl } from '@/apis/getRoomUrl';

export default function CreateRoom() {
  const { toolTip, setTooltipVisible } = useTooltip();

  const navigate = useNavigate();

  // const { data } = useRoomUrl();

  const data = 'e323358ae8046237b935e5543a1e62efa8ea42d0';

  const url = createUrl(data || '');

  const handleCopyURL = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (data) clipboardCopy(url)(e);
    setTooltipVisible();
  };

  const handleNextPage = () => {
    navigate(`/explain/${data}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <StyledContainer>
        <StyledHeader>우리 팀의 방이 생성되었어요</StyledHeader>
        <MainImg src={charwithHat} alt={'메인이미지'} />
        {/* TODO: 테스트용 URL. 추후에 api와 결합하여 URL작성 */}
        <UrlText>{url}</UrlText>
        <CopyText onClick={handleCopyURL}>복사해서 팀원에게 공유하기</CopyText>
        {toolTip && <Tooltip>URL이 클립보드에 복사되었습니다</Tooltip>}
        <RectangleBtn text="입장할게요" onClick={handleNextPage} />
      </StyledContainer>
    </motion.div>
  );
}
