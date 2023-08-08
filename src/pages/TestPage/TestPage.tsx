import { useState } from 'react';
import { StyledContainer, ExplainSpan, ImgContainer, CharImg } from './styles';
import { Line } from 'rc-progress';
import { CardSlide, NextBtn, Tooltip } from '@/components';
import charWithHat from '@assets/charWithHat.png';
import { testList } from '@/constants/testList';
import { motion, AnimatePresence } from 'framer-motion';
import { useTooltip } from '@/hooks/useTooltip';
import { useTestContext } from '@/hooks/useTestContext';

export default function TestPage() {
  const [page, setPage] = useState(1);

  const { result } = useTestContext();

  const { toolTip, setTooltipVisible } = useTooltip();

  return (
    <StyledContainer>
      <Line
        percent={100 * (page / 4)}
        strokeColor="#6394ff"
        trailColor="#242b3a"
        strokeWidth={2.5}
        trailWidth={2.5}
        style={{ marginTop: '30px' }}
      />
      <ImgContainer>
        <ExplainSpan>
          더 근접하다고 생각되는 <br />
          항목을 선택해주세요!
        </ExplainSpan>
        <CharImg src={charWithHat} alt="모자 캐릭터" />
      </ImgContainer>
      <AnimatePresence>
        {
          <>
            {page === 1 && (
              <motion.div
                key={testList[0][0]}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
              >
                <CardSlide question={testList[0][0]} alpha={testList[0][1]} beta={testList[0][2]} />
              </motion.div>
            )}
            {page === 2 && (
              <motion.div
                key={testList[1][0]}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
              >
                <CardSlide question={testList[1][0]} alpha={testList[1][1]} beta={testList[1][2]} />
              </motion.div>
            )}
            {page === 3 && (
              <motion.div
                key={testList[2][0]}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
              >
                <CardSlide question={testList[2][0]} alpha={testList[2][1]} beta={testList[2][2]} />
              </motion.div>
            )}
            {page === 4 && (
              <motion.div
                key={testList[3][0]}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
              >
                <CardSlide question={testList[3][0]} alpha={testList[3][1]} beta={testList[3][2]} />
              </motion.div>
            )}
          </>
        }
      </AnimatePresence>
      <NextBtn
        onClick={() => {
          if (page === 1) {
            if (result?.length === 1) {
              setPage(page + 1);
            } else {
              setTooltipVisible();
            }
          }
          if (page === 2) {
            if (result?.length === 2) {
              setPage(page + 1);
            } else {
              setTooltipVisible();
            }
          }
          if (page === 3) {
            if (result?.length === 3) {
              setPage(page + 1);
            } else {
              setTooltipVisible();
            }
          }
          if (page === 4) {
            if (result?.length === 4) {
              setPage(page + 1);
            } else {
              setTooltipVisible();
            }
          }
        }}
        text="클릭하세요"
      />
      {toolTip && <Tooltip>선택지를 골라주세요</Tooltip>}
    </StyledContainer>
  );
}
