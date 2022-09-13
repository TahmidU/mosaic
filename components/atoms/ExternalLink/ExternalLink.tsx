import { ReactElement, ReactNode } from "react";

interface IExternalLinkProps {
  href?: string;
  children?: ReactNode;
  testId?: string;
}

export default function ExternalLink({
  href,
  children,
  testId = "ExternalLink",
}: IExternalLinkProps): ReactElement {
  return (
    <a
      data-testid={testId}
      target="_blank"
      href={href}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
