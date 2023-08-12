import { MemberImg, CardContainer, NameSpan } from './styles';

type MemberImgCardProps = {
  src: string;
  name: string;
};

export default function MemberImgCard({ src, name }: MemberImgCardProps) {
  return (
    <CardContainer>
      <MemberImg src={src} alt="유저이미지" />
      <NameSpan>{name}</NameSpan>
    </CardContainer>
  );
}
