import { Indicator } from "./styles";
import { ReactElement } from "react";

interface StepStatusProps {
  enabled?: boolean;
}

export default function StepStatus({
  enabled = false,
}: StepStatusProps): ReactElement {
  return <Indicator enabled={enabled} />;
}
