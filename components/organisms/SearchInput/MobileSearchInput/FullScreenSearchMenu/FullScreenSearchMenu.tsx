import {
  CloseBtn,
  CloseIcon,
  Container,
  Header,
  MobileContainer,
  OptionsWrapper,
  SearchIconStyling,
  SearchInputStyle,
} from "./styles";
import { Dispatch, ReactElement, SetStateAction } from "react";

import Checkbox from "components/atoms/Checkbox";
import { ContainerAnimVariant } from "./animationVariants";
import useSearch from "./useSearch";

interface IFullScreenSearchMenuProps {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setSearchText: Dispatch<SetStateAction<string>>;
  searchText: string;
}

const SearchIcon = (props: any) => (
  <SearchIconStyling onClick={props.onClick} />
);

export default function FullScreenSearchMenu({
  setMenuOpen,
  isMenuOpen,
  setSearchText,
  searchText,
}: IFullScreenSearchMenuProps): ReactElement {
  const {
    onHandleMenuKeyDown,
    onHandleMenuClickSearch,
    filters,
    cancelFilters,
    setType,
  } = useSearch(searchText, isMenuOpen, setMenuOpen);

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
          <CloseBtn
            onClick={() => {
              setMenuOpen(false), cancelFilters();
            }}
          >
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

        <MobileContainer>
          <span>Type:</span>

          <div>
            <Checkbox
              isSelected={filters.type === "movie"}
              onClick={() => setType("movie")}
            >
              <span>Movies</span>
            </Checkbox>

            <Checkbox
              isSelected={filters.type === "tv"}
              onClick={() => setType("tv")}
            >
              <span>TV</span>
            </Checkbox>
          </div>
        </MobileContainer>
      </OptionsWrapper>
    </Container>
  );
}
