import React from 'react';
import { StyledTooltip } from './styles';

type TooltipProps = {
  children: React.ReactNode;
};

export default function Tooltip({ children }: TooltipProps) {
  return <StyledTooltip>{children}</StyledTooltip>;
}
