import { useEffect, useRef, useState } from "react";

import { createPortal } from "react-dom";

interface IClientPortal {
  children: any;
  selector: any;
}

export default function ClientPortal({ children, selector }: IClientPortal) {
  const ref = useRef();

  useEffect(() => {
    ref.current = document.querySelector(selector);
  }, [selector]);

  return createPortal(children, document.querySelector(selector));
}
