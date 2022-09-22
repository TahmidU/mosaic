import { useState } from "react";
import { fakeMovieData } from "resources/TestResources/MovieDetails";
import { FakeVideos } from "resources/TestResources/Videos";
import { IPayload } from "types/story";
import VideoModal from "./VideoModal";

const payload: IPayload = {
  title: "MOLECULES/VideoModal",
  component: VideoModal,
};
export default payload;

export const Basic = (args: any) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div style={{ width: "100wv", height: "100vh" }}>
      <button onClick={() => setOpen(true)}>Open</button>
      <div id="modalPortal" style={{ width: "100wv", height: "100vh" }}></div>

      <VideoModal
        videos={FakeVideos}
        modalOpen={isOpen}
        setModalOpen={setOpen}
        {...args}
      />
    </div>
  );
};
Basic.args = {
  open: true,
  onClose: () => {},
  onNext: () => {},
  onPrev: () => {},
};
