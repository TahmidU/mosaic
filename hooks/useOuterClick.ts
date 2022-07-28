import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export default function useOuterClick(
  setOpen?: Dispatch<SetStateAction<boolean>>
) {
  const reference = useRef<null | any>(null);
  const [isActive, setActive] = useState(false);

  const handleClickOut = useCallback(
    (e: MouseEvent) => {
      if (reference.current && !reference.current.contains(e.target as Node)) {
        setOpen?.(false), setActive(false);
      } else {
        setActive(true);
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
    isActive,
  };
}
