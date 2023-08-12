import { CardContainer, ListContainer, Marker, BigMarker, QuestionContainer } from './styles';
import { useState } from 'react';
import { useTestContext } from '@/hooks/useTestContext';

type CardSlideProps = { question: string; alpha: string; beta: string };

export default function CardSlide({ question, alpha, beta }: CardSlideProps) {
  const [select, setSelect] = useState<number>();

  const { setResult } = useTestContext();

  const handleClickTestFirst = () => {
    setSelect(1);
    if (!select) {
      setResult((prevState: string) => prevState + '1');
    } else {
      setResult((prevState: string) => prevState.slice(0, -1) + '1');
    }
  };

  const handleClickTestSecond = () => {
    setSelect(2);
    if (!select) {
      setResult((prevState: string) => prevState + '2');
    } else {
      setResult((prevState: string) => prevState.slice(0, -1) + '2');
    }
  };

  return (
    <CardContainer>
      <QuestionContainer>
        <BigMarker>Q.</BigMarker>
        {question}
      </QuestionContainer>
      <ListContainer $isCheck={select === 1} onClick={handleClickTestFirst}>
        <Marker>A.</Marker>
        {alpha}
      </ListContainer>
      <ListContainer $isCheck={select === 2} onClick={handleClickTestSecond}>
        <Marker>B.</Marker>
        {beta}
      </ListContainer>
    </CardContainer>
  );
}
