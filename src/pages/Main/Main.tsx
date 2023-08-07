import { StyledTitle, StyledContainer, IglooImg } from './styles';
import mainIgloo from '@assets/mainIgloo.png';
import { RectangleBtn } from '@/components';

export default function Main() {
  const handleNextPage = () => {
    // 다음페이지로 이동 로직 들어감
  };

  return (
    <StyledContainer>
      <StyledTitle>
        아직은 조금 차가운 우리팀, <br />
        아이스브레이킹을 시작해볼까요?
      </StyledTitle>
      <IglooImg src={mainIgloo} alt="메인페이지 이글루" />
      <RectangleBtn text="입장하기" onClick={handleNextPage} />
    </StyledContainer>
  );
}
