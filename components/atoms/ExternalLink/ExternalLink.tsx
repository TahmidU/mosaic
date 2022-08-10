import { ReactElement, ReactNode } from "react";

interface IExternalLinkProps {
  href?: string;
  children?: ReactNode;
  key?: number;
}

export default function ExternalLink({
  href,
  children,
  key,
}: IExternalLinkProps): ReactElement {
  return (
    <a key={key} target="_blank" href={href} rel="noopener noreferrer">
      {children}
    </a>
  );
}
