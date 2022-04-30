import { Container, Content } from "./styles";
import { ReactElement, useEffect, useState } from "react";

import Clip from "./Clip";
import { IVideo } from "types/api/videos";

interface ClipsProps {
  videos?: IVideo;
  onClipClickedCallback: (url: string) => void;
}

export default function Clips({
  videos,
  onClipClickedCallback,
}: ClipsProps): ReactElement {
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
              onClick={(url) => onClipClickedCallback(url)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Content>
    </Container>
  );
}
