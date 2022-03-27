import { Indicator } from "./styles";
import { ReactElement } from "react";

interface StepStatusProps {
  enabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function StepStatus({
  enabled = false,
  onClick = () => {},
  className,
}: StepStatusProps): ReactElement {
  return (
    <Indicator
      data-testid="StepStatusIndicator"
      className={className}
      enabled={enabled}
      onClick={onClick}
    />
  );
}
