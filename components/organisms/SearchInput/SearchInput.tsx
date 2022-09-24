import { Dispatch, KeyboardEvent, ReactElement, SetStateAction } from "react";

import Input from "components/atoms/Input";
import { SearchIconStyling } from "./styles";
import useRoutes from "hooks/useRoutes";

interface ISearchBtnProp {
  onTextChange?: (text: string) => void;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  testId?: string;
  className?: string;
}

const SearchIcon = (props: any) => (
  <SearchIconStyling
    data-testid={`${props.testId}-SearchIcon`}
    onClick={props.onClick}
  />
);
export default function SearchInput({
  text,
  setText,
  testId = "SearchInput",
  className,
}: ISearchBtnProp): ReactElement {
  const { goToSearchPage } = useRoutes();

  const onEnter = (text: string) =>
    goToSearchPage(text.length > 0 ? text : undefined);

  const onHandleClickSearch = () => onEnter(text);

  const onHandleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter(text);
    }
  };
  return (
    <Input
      testId={testId}
      variant="stateful"
      value={text}
      className={className}
      onTextChange={setText}
      onKeyDown={onHandleKeyDown}
      postfix={<SearchIcon onClick={onHandleClickSearch} testId={testId} />}
    />
  );
}
