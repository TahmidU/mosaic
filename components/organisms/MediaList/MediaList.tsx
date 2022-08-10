import { Dispatch, ReactElement, SetStateAction } from "react";
import {
  MediaCardStyle,
  MediaHorizontalList,
  MediaListWrapper,
} from "./styles";

import { IVideo } from "types/api/videos";
import { Links } from "utils";

interface IMediaListProps {
  videoData?: IVideo;
  setModal: Dispatch<
    SetStateAction<{
      open: boolean;
      initialIndex: number;
    }>
  >;
  className?: string;
}

export default function MediaList({
  videoData,
  setModal,
  className,
}: IMediaListProps): ReactElement {
  return (
    <MediaHorizontalList title="Media" className={className}>
      {videoData &&
        videoData.results.map((_video, index) => (
          <MediaListWrapper key={index}>
            <MediaCardStyle
              title={_video.name}
              src={`${Links.youtubeThumbnailURL}${_video.key}/hqdefault.jpg`}
              onClick={() => setModal({ open: true, initialIndex: index })}
            />
          </MediaListWrapper>
        ))}
    </MediaHorizontalList>
  );
}
