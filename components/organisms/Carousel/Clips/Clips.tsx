import { ReactElement, useContext, useEffect, useState } from "react";

import Clip from "./Clip";
import { Container } from "./styles";
import GlobalContext from "context/GlobalContext";
import { IVideo } from "types/api/videos";
import clipsRequests from "./requests";

interface ClipsProps {
  videos?: IVideo;
}

export default function Clips({ videos }: ClipsProps): ReactElement {
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
      <div>
        {!loading ? (
          videos?.results.map((_video, index) => (
            <Clip
              key={index}
              YTKey={_video.key}
              title={_video.name}
              type={_video.type}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Container>
  );
}
