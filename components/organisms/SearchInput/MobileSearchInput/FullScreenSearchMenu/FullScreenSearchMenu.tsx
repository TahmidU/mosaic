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
  testId?: string;
}

const SearchIcon = (props: any) => (
  <SearchIconStyling onClick={props.onClick} data-testid={props.testId} />
);

export default function FullScreenSearchMenu({
  setMenuOpen,
  isMenuOpen,
  setSearchText,
  searchText,
  testId = "FullScreenSearchMenu",
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
      data-testid={testId}
    >
      <OptionsWrapper>
        <Header>
          <div></div>
          <span>Search {"&"} Filter</span>
          <CloseBtn
            data-testid={`${testId}-CloseBtn`}
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
          testId={`${testId}-SearchInput`}
          postfix={
            <SearchIcon
              onClick={onHandleMenuClickSearch}
              testId={`${testId}-SearchIcon`}
            />
          }
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
