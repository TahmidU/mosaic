import { Container, ProgCircle, TextStyle } from "./styles";
import { ReactElement, useEffect, useState } from "react";

interface ReviewStatProps {
  to: number;
}

export default function ReviewStat({ to }: ReviewStatProps): ReactElement {
  const [percentage, setPercentage] = useState({
    curr: 0,
    to: to,
  });

  function updatePercent() {
    if (percentage.curr > percentage.to) {
      setPercentage((prev) => ({ ...prev, curr: prev.curr - 1 }));
    } else if (percentage.curr < percentage.to) {
      setPercentage((prev) => ({ ...prev, curr: prev.curr + 1 }));
    }
  }

  useEffect(() => {
    const updater = setTimeout(updatePercent, 30);

    return () => {
      clearTimeout(updater);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentage]);

  return (
    <Container>
      <ProgCircle width={160} height={160} radius={80} strokeWidth={10} />
      <TextStyle> {`${percentage.curr}%`} </TextStyle>
    </Container>
  );
}
