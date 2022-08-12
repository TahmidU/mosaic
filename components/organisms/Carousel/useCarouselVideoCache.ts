import { useContext, useEffect, useState } from "react";

import GlobalContext from "context/GlobalContext";
import { IVideos } from "types/api/videos";
import { carouselMediaQuery } from "components/organisms/Carousel";
import { useMediaQuery } from "react-responsive";

interface IVideoCache {
  [id: number]: IVideos;
}

export default function useVideoInfoCache() {
  const [cachedVideos, setCachedVideos] = useState<IVideoCache>({});
  const [id, setId] = useState(-1);
  const { globalRequests } = useContext(GlobalContext);
  const isMobile = useMediaQuery(carouselMediaQuery);

  async function fetchVideos(id: number) {
    return await globalRequests?.getVideoData(id);
  }

  useEffect(() => {
    if (!isMobile) {
      const cached = cachedVideos[id];

      if (!cached) {
        fetchVideos(id).then((data) =>
          setCachedVideos((prev) => ({ ...prev, [id]: data }))
        );
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isMobile]);

  function onPageChange(id: number) {
    setId(id);
  }

  return {
    onPageChange,
    currentVideos: id !== -1 ? cachedVideos[id] : undefined,
  };
}
