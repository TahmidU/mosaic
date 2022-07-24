import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { Container } from "./styles";
import ExternalLink from "components/atoms/ExternalLink";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Links } from "utils";
import { ReactElement } from "react";
import { SocialTypes } from "types/socials";

export type Variant = "external" | "facebook" | "instagram" | "twitter";

interface ISocialsProps {
  links: { variant: SocialTypes; href: string }[];
}

export default function Socials({ links }: ISocialsProps): ReactElement {
  return (
    <Container>
      {links.map((_link, _index) =>
        (_link.variant === "external" && _link.href) ||
        (_link.variant === "instagram" && _link.href) ||
        (_link.variant === "facebook" && _link.href) ||
        (_link.variant === "twitter" && _link.href) ? (
          <ExternalLink
            key={_index}
            href={
              _link.variant === "external"
                ? _link.href
                : _link.variant === "facebook"
                ? `${Links.facebookURL}${_link.href}`
                : _link.variant === "instagram"
                ? `${Links.instagramURL}${_link.href}`
                : `${Links.twitterURL}${_link.href}`
            }
          >
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
        ) : (
          <></>
        )
      )}
    </Container>
  );
}
