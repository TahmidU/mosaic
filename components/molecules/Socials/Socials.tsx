import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Container } from "./styles";
import ExternalLink from "components/atoms/ExternalLink";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ReactElement } from "react";

export type Variant = "external" | "facebook" | "instagram" | "twitter";

interface ISocialsProps {
  links: { variant: Variant; href: string }[];
}

export default function Socials({ links }: ISocialsProps): ReactElement {
  return (
    <Container>
      {links.map((_link, _index) => (
        <ExternalLink key={_index} href={_link.href}>
          {_link.variant === "external" ? (
            <FaExternalLinkAlt />
          ) : _link.variant === "facebook" ? (
            <BsFacebook />
          ) : _link.variant === "instagram" ? (
            <BsInstagram />
          ) : (
            <BsTwitter />
          )}
        </ExternalLink>
      ))}
    </Container>
  );
}
