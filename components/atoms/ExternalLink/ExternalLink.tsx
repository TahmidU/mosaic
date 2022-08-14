import { ReactElement, ReactNode } from "react";

interface IExternalLinkProps {
  href?: string;
  children?: ReactNode;
}

export default function ExternalLink({
  href,
  children,
}: IExternalLinkProps): ReactElement {
  return (
    <a target="_blank" href={href} rel="noopener noreferrer">
      {children}
    </a>
  );
}
