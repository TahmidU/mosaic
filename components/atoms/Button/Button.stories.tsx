import Button from ".";
import { IPayload } from "types/story";

const payload: IPayload = {
  title: "ATOMS/Button",
  component: Button,
};
export default payload;

export const Basic = (args: any) => <Button>Special Button</Button>;
Basic.args = {
  variant: "text",
};
