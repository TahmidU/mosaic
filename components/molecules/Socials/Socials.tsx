import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import ExternalLink from "components/atoms/ExternalLink";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ReactElement } from "react";

export type Variant = "external" | "facebook" | "instagram" | "twitter";

interface ISocialsProps {
  variant?: Variant;
  href?: string;
}

export default function Socials({
  variant = "external",
  href,
}: ISocialsProps): ReactElement {
  if (variant === "facebook")
    return (
      <ExternalLink href={href}>
        <BsFacebook />
      </ExternalLink>
    );

  if (variant === "instagram")
    return (
      <ExternalLink href={href}>
        <BsInstagram />
      </ExternalLink>
    );

  if (variant === "twitter")
    return (
      <ExternalLink href={href}>
        <BsTwitter />
      </ExternalLink>
    );

  return (
    <ExternalLink href={href}>
      <FaExternalLinkAlt />
    </ExternalLink>
  );
}
