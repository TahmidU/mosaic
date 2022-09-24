import { useState } from "react";
import { IPayload } from "types/story";
import TypeFilter from "./TypeFilter";

const payload: IPayload = {
  title: "MOLECULES/TypeFilter",
  component: TypeFilter,
};
export default payload;

export const Basic = (args: any) => {
  const [type, setType] = useState("movie");

  return <TypeFilter setType={setType} selected={type} {...args} />;
};
Basic.args = {};
Basic.parameters = {
  controls: {
    include: [],
  },
};
