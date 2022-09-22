import { IPayload } from "types/story";
import Input from "./Input";

const payload: IPayload = {
  title: "ATOMS/Input",
  component: Input,
};
export default payload;

export const Basic = (args: any) => <Input {...args} />;
Basic.args = {};

export const PrefixPost = (args: any) => {
  const PrefixComp = (props: any) => <span style={{ width: "100%" }}>£</span>;
  const PostfixComp = (props: any) => (
    <span style={{ width: "100%" }}>PCM</span>
  );

  return <Input {...args} prefix={<PrefixComp />} postfix={<PostfixComp />} />;
};
