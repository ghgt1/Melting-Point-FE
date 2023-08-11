import { LoadingContainer, LoadingSpinner, LoadingExplain } from './styles';

export default function LoadingOverlay() {
  return (
    <LoadingContainer>
      <LoadingExplain>
        다른 팀원이 완료될 때 까지 <br />
        기다리고 있어요!
      </LoadingExplain>
      <LoadingSpinner />
    </LoadingContainer>
  );
}
