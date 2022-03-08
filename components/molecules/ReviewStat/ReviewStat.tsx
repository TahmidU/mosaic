import { Container, ProgCircle, TextStyle } from "./styles";
import { ReactElement, useState } from "react";

interface ReviewStatProps {}

export default function ReviewStat({}: ReviewStatProps): ReactElement {
  const [percentage, setPercentage] = useState(0);

  return (
    <Container>
      <ProgCircle width={160} height={160} radius={80} strokeWidth={10} />
      <TextStyle> {`${percentage}%`} </TextStyle>
    </Container>
  );
}
