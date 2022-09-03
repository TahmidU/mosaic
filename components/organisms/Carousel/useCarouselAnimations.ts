import { useEffect, useRef, useState } from "react";

export default function useCarouselAnimations() {
  const [isTimerPaused, setTimerConfig] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function addEventListeners() {
      if (image) {
        image.addEventListener("mouseover", pauseAutoSlide);
        image.addEventListener("mouseleave", resumeAutoSlide);
      }
    }

    function removeEventListeners() {
      if (image) {
        image.removeEventListener("mouseover", pauseAutoSlide);
        image.removeEventListener("mouseleave", resumeAutoSlide);
      }
    }

    const image = imageRef.current;
    addEventListeners();

    return () => {
      removeEventListeners();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageRef.current]);

  const pauseAutoSlide = () => setTimerConfig(true),
    resumeAutoSlide = () => setTimerConfig(false);

  return { isTimerPaused, imageRef };
}
