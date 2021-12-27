import Button from ".";

const payload = {
  title: "ATOMS/Button",
  component: Button,
};
export default payload;

export const Basic = (args: any) => <Button {...args} />;
Basic.args = {};
