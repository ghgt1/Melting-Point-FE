import { CharImg, StyledText, ImgBlock } from './styles';

type CharBlockProps = {
  text: string;
  imgSrc: string;
  imgWidth: string;
  textSize: string;
};

export default function CharBlock({ text, imgSrc, imgWidth, textSize }: CharBlockProps) {
  return (
    <ImgBlock>
      <CharImg src={imgSrc} alt="캐릭터이미지" $imgWidth={imgWidth} />
      <StyledText $textSize={textSize}>{text}</StyledText>
    </ImgBlock>
  );
}
