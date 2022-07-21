import { FC, ReactChild, ReactElement, ReactNode } from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface ISocialProps {
  href?: string;
  icon: FC;
}

export default function Social({ href, icon }: ISocialProps): ReactElement {
  const IconNode = icon;

  return (
    <a target="_blank" href={href} rel="noopener noreferrer">
      <IconNode />
    </a>
  );
}
