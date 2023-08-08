import { MainButton } from './styles';

type RectangleBtnProps = {
  text: string;
  onClick: () => void;
};

export default function RectangleBtn({ text, onClick }: RectangleBtnProps) {
  return <MainButton onClick={onClick}>{text}</MainButton>;
}
