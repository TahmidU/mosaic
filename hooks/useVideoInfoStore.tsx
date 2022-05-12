import { IVideo } from "types/api/videos";
import { useState } from "react";

export default function useVideoInfoStore(initialData: IVideo[] = []) {
  const [AllVideos, setAllVideos] = useState<IVideo[]>(initialData);
  const [currVideos, setVideo] = useState<IVideo>();

  function onStepChange(step: number) {
    setVideo(AllVideos[step]);
  }

  return { currVideos, onStepChange };
}
