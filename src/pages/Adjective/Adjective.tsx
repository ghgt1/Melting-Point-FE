import { useState, useEffect } from 'react';
import {
  StyledContainer,
  StyledTitle,
  StyledDescription,
  AdjectiveContainer,
  AdjectiveBox,
} from './styles';
import { adjectiveList } from '@/constants/adjectiveList';
import { NextBtn, Tooltip } from '@/components';
import { useTooltip } from '@/hooks/useTooltip';

type AdjectiveDTO = {
  id: number;
  expression: string;
};

export default function Adjective() {
  const [adjectives, setAdjectives] = useState<number[]>([]);
  const [isDone, setIsDone] = useState(false);
  const { toolTip, setTooltipVisible } = useTooltip();

  const handleNextPage = () => {
    console.log('ZC');
  };

  const handleAdjectiveClick = (id: number) => {
    if (adjectives.includes(id)) {
      const newArray = adjectives.filter((number) => number !== id);
      setAdjectives(newArray);
    } else {
      if (adjectives.length === 4) {
        setTooltipVisible();
      } else {
        setAdjectives([...adjectives, id]);
      }
    }
  };

  useEffect(() => {
    if (adjectives.length >= 1) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  }, [adjectives]);

  return (
    <StyledContainer>
      <StyledTitle>
        나를 표현할 수 있는
        <br />
        형용사를 선택해주세요
      </StyledTitle>
      <StyledDescription>
        최소 1가지이상을 선택해주세요
        <br />
        최대 4가지까지 선택이 가능해요
      </StyledDescription>
      <AdjectiveContainer>
        {adjectiveList.map((adjective: AdjectiveDTO, index: number) => {
          return (
            <AdjectiveBox
              key={adjective.id}
              $isChecked={adjectives.includes(index + 1)}
              onClick={() => {
                handleAdjectiveClick(adjective.id);
              }}
            >
              {adjective.expression}
            </AdjectiveBox>
          );
        })}
      </AdjectiveContainer>
      <NextBtn text="결과 볼게요!" onClick={handleNextPage} isFinish={isDone} />
      {toolTip && <Tooltip>형용사는 최소 1개에서 최대 4개까지 선택 가능해요</Tooltip>}
    </StyledContainer>
  );
}
