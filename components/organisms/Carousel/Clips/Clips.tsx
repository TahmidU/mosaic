import { Container, Content } from "./styles";
import { ReactElement, useEffect, useState } from "react";

import Clip from "./Clip";
import { IVideos } from "types/api/videos";

interface IClipsProps {
  videos?: IVideos;
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
        <span data-testid="ClipsResults">
          Results: {videos?.results.length}
        </span>
      </div>
      <Content>
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
