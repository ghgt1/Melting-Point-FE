import { MainButton } from './styles';

type NextBtnProps = {
  text: string;
  onClick: () => void;
  isFinish?: boolean;
};

export default function NextBtn({ text, onClick, isFinish = true }: NextBtnProps) {
  return (
    <MainButton onClick={onClick} $isFinish={isFinish}>
      {text}
    </MainButton>
  );
}
