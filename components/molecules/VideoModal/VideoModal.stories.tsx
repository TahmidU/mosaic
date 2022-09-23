import { useState } from "react";
import { fakeVideos } from "resources/testResources/Videos";
import { IPayload } from "types/story";
import VideoModal from "./VideoModal";

const payload: IPayload = {
  title: "MOLECULES/VideoModal",
  component: VideoModal,
};
export default payload;

export const Basic = () => {
  const [isOpen, setOpen] = useState({ open: false, initialIndex: 0 });
  return (
    <>
      {!isOpen.open && (
        <button onClick={() => setOpen((prev) => ({ ...prev, open: true }))}>
          Open Modal
        </button>
      )}
      <VideoModal
        videos={fakeVideos}
        modalOpen={isOpen}
        setModalOpen={setOpen}
      />
    </>
  );
};
Basic.args = {};
Basic.parameters = {
  controls: {
    include: [],
  },
};
