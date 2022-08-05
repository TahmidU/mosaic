import { IVideo } from "types/api/videos";
import { useState } from "react";

export default function useVideoInfoCache(initialData: IVideo[] = []) {
  const [AllVideos, setAllVideos] = useState<IVideo[]>(initialData);
  const [currVideos, setVideo] = useState<IVideo>();

  function onPageChange(step: number) {
    setVideo(AllVideos[step]);
  }

  return { currVideos, onPageChange };
}
