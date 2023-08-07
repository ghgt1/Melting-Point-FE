import { MainButton } from './styles';

type RectangleBtnProps = {
  text: string;
};

export default function RectangleBtn({ text }: RectangleBtnProps) {
  return <MainButton>{text}</MainButton>;
}
