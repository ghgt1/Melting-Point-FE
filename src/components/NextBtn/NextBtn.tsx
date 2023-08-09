import { MainButton } from './styles';

type NextBtnProps = {
  text: string;
  onClick: () => void;
};

export default function NextBtn({ text, onClick }: NextBtnProps) {
  return <MainButton onClick={onClick}>{text}</MainButton>;
}
