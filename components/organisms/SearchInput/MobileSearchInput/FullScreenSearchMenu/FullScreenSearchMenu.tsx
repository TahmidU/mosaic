import {
  CloseBtn,
  CloseIcon,
  Container,
  Header,
  OptionsWrapper,
  SearchIconStyling,
  SearchInputStyle,
} from "./styles";
import { Dispatch, KeyboardEvent, ReactElement, SetStateAction } from "react";

import { ContainerAnimVariant } from "./animation-variants";

interface IFullScreenSearchMenuProps {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setSearchText: Dispatch<SetStateAction<string>>;
  searchText: string;
  onHandleClickSearch: () => void;
  onHandleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const SearchIcon = (props: any) => (
  <SearchIconStyling onClick={props.onClick} />
);

export default function FullScreenSearchMenu({
  setMenuOpen,
  isMenuOpen,
  setSearchText,
  searchText,
  onHandleClickSearch,
  onHandleKeyDown,
}: IFullScreenSearchMenuProps): ReactElement {
  const onHandleMenuKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setMenuOpen(false), onHandleKeyDown(e);
    }
  };

  const onHandleMenuClickSearch = () => {
    setMenuOpen(false), onHandleClickSearch();
  };

  return (
    <Container
      variants={ContainerAnimVariant}
      initial={"close"}
      animate={isMenuOpen ? "open" : "close"}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <OptionsWrapper>
        <Header>
          <div></div>
          <span>Search {"&"} Filter</span>
          <CloseBtn onClick={() => setMenuOpen(false)}>
            <CloseIcon />
          </CloseBtn>
        </Header>
        <SearchInputStyle
          type="search"
          variant="stateful"
          value={searchText}
          onTextChange={setSearchText}
          onKeyDown={onHandleMenuKeyDown}
          postfix={<SearchIcon onClick={onHandleMenuClickSearch} />}
        />
      </OptionsWrapper>
    </Container>
  );
}
