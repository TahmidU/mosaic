import { ReactElement, useEffect, useState } from "react";

import { Container } from "./styles";
import { IVideo } from "types/api/videos";

interface ClipsProps {}

export default function Clips({}: ClipsProps): ReactElement {
  const [videos, setVideos] = useState<IVideo>();

  useEffect(() => {}, []);

  return (
    <Container>
      <div>
        <span>Trailers {"&"} Clips</span>
        <span>Result: {""}</span>
      </div>
      <div></div>
    </Container>
  );
}
