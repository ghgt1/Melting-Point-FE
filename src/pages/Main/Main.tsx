import { StyledTitle, StyledContainer, IglooImg } from './styles';
import mainIgloo from '@assets/mainIgloo.svg';
import { RectangleBtn } from '@/components';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();

  const handleNextPage = () => {
    // 다음페이지로 이동 로직 들어감
    navigate('/create');
  };

  return (
    <StyledContainer>
      <StyledTitle>
        아직은 꽁꽁 얼어있는 우리 팀, <br />
        아이스브레이킹을 시작해볼까요?
      </StyledTitle>
      <IglooImg src={mainIgloo} alt="메인페이지 이글루" />
      <RectangleBtn text="입장하기" onClick={handleNextPage} />
    </StyledContainer>
  );
}
