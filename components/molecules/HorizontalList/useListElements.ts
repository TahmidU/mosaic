import { useRef } from "react";

export default function useListElements() {
  const listReference = useRef<HTMLDivElement>(null);

  function slideRight() {
    if (listReference.current) {
      const list = listReference.current;

      const scrollAmount =
        list.scrollWidth !== list.scrollLeft + list.offsetWidth
          ? list.scrollLeft + list.offsetWidth
          : 0;
      list.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }

  function slideLeft() {
    if (listReference.current) {
      const list = listReference.current;

      const scrollAmount =
        list.scrollLeft !== 0
          ? list.scrollLeft - list.offsetWidth
          : list.scrollWidth;

      list.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }

  return { slideLeft, slideRight, listReference };
}
