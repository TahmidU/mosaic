import { createPortal } from "react-dom";

interface IClientPortal {
  children: any;
  selector: any;
}

export default function ClientPortal({ children, selector }: IClientPortal) {
  return createPortal(children, document.querySelector(selector));
}
