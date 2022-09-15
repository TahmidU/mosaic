import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface IClientPortal {
  children: any;
  selector: any;
}

export default function ClientPortal({ children, selector }: IClientPortal) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);

    setMounted(true);
  }, [selector]);

  // @ts-ignore
  return mounted ? createPortal(children, ref.current) : null;
}
