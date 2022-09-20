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

const allowedSocialTypes = ["external", "facebook", "instagram", "twitter"];

export default function Socials({ links }: ISocialsProps): ReactElement {
  const supportedLinks = links.filter((_link) =>
    allowedSocialTypes.includes(_link.variant)
  );

  return (
    <Container>
      {supportedLinks.map((_link, _index) => (
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
          testId={`${_link.variant}-${_index}`}
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
      ))}
    </Container>
  );
}
