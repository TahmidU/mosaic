import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";

export default function useOuterClick(
  setOpen: Dispatch<SetStateAction<boolean>>
) {
  const reference = useRef<null | HTMLDivElement>(null);

  const handleClickOut = useCallback(
    (e: MouseEvent) => {
      if (reference.current && !reference.current.contains(e.target as Node)) {
        setOpen(false);
      }
    },
    [setOpen, reference]
  );

  useEffect(() => {
    window.removeEventListener("mousedown", handleClickOut);
    window.addEventListener("mousedown", handleClickOut);
    return () => {
      window.removeEventListener("mousedown", handleClickOut);
    };
  }, [handleClickOut]);

  return {
    reference,
  };
}
