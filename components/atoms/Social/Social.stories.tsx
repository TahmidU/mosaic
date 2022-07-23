import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IPayload } from "types/story";
import Social from "./Social";

const payload: IPayload = {
  title: "ATOMS/Social",
  component: Social,
};
export default payload;

export const External = (args: any) => (
  <Social {...args} icon={FaExternalLinkAlt} />
);
External.args = {
  href: "",
};
External.parameters = {
  controls: {
    exclude: ["icon"],
  },
};

export const Facebook = (args: any) => <Social {...args} icon={BsFacebook} />;
Facebook.args = {
  href: "",
};
Facebook.parameters = {
  controls: {
    exclude: ["icon"],
  },
};

export const Twitter = (args: any) => <Social {...args} icon={BsTwitter} />;
Twitter.args = {
  href: "",
};
Twitter.parameters = {
  controls: {
    exclude: ["icon"],
  },
};

export const Instagram = (args: any) => <Social {...args} icon={BsInstagram} />;
Instagram.args = {
  href: "",
};
Instagram.parameters = {
  controls: {
    exclude: ["icon"],
  },
};
