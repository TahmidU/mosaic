import { useState } from "react";
import { FakeVideos } from "resources/TestResources/Videos";
import { IPayload } from "types/story";
import VideoModal from "./VideoModal";

const payload: IPayload = {
  title: "MOLECULES/VideoModal",
  component: VideoModal,
};
export default payload;

export const Basic = (args: any) => {
  const [isOpen, setOpen] = useState({ open: false, initialIndex: 0 });
  return (
    <>
      {!isOpen.open && (
        <button onClick={() => setOpen((prev) => ({ ...prev, open: true }))}>
          Open Modal
        </button>
      )}
      <VideoModal
        videos={FakeVideos}
        modalOpen={isOpen}
        setModalOpen={setOpen}
      />
    </>
  );
};
Basic.parameters = {
  controls: {
    include: [],
  },
};
