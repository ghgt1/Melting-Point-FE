import { ModalOverlay, ModalContainer, ModalNicknme, ModalButton } from './styles';

type MbtiModalProps = {
  isLast?: boolean;
  nickname: string;
  mbti: string;
  onClick: () => void;
};

export default function MbtiModal({ isLast = false, nickname, mbti, onClick }: MbtiModalProps) {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalNicknme>
          {`${nickname}님의 MBTI는`}
          <br />
          {`${mbti}였습니다!`}
        </ModalNicknme>
        <ModalButton onClick={onClick}>
          {isLast ? '다음 게임 할게요!' : '다음 팀원 보기'}
        </ModalButton>
      </ModalContainer>
    </ModalOverlay>
  );
}
