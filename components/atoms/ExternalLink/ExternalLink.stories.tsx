import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import ExternalLink from "./ExternalLink";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ATOMS/ExternalLink",
  component: ExternalLink,
};
export default payload;

export const External = (args: any) => (
  <ExternalLink {...args}>
    <FaExternalLinkAlt />
  </ExternalLink>
);
External.args = {
  href: "",
};
