import { Container, Content } from "./styles";
import { ReactElement, useEffect, useState } from "react";

import Clip from "./Clip";
import { IVideo } from "types/api/videos";

interface IClipsProps {
  videos?: IVideo;
  onClipClickedCallback: (videoIndex: number) => void;
}

export default function Clips({
  videos,
  onClipClickedCallback,
}: IClipsProps): ReactElement {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    videos && setLoading(false);
  }, [videos]);

  return (
    <Container>
      <div>
        <span>Trailers {"&"} Clips</span>
        <span>Result: {videos?.results.length}</span>
      </div>
      <Content universal>
        {!loading ? (
          videos?.results.map((_video, index) => (
            <Clip
              key={index}
              YTKey={_video.key}
              title={_video.name}
              type={_video.type}
              onClick={() => onClipClickedCallback(index)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Content>
    </Container>
  );
}
