import { useState } from 'react';

export function useTooltip() {
  const [toolTip, setTooltip] = useState(false);

  const setTooltipVisible = () => {
    setTooltip(true);
    setTimeout(() => {
      setTooltip(false);
    }, 2000);
  };

  return { toolTip, setTooltipVisible };
}
