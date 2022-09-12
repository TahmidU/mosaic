import {
  Container,
  LeftSlideBtn,
  List,
  ListAnim,
  ListWrapper,
  RightSlideBtn,
  SubListStyle,
} from "./styles";
import { ReactElement, ReactNode } from "react";

import { AnimatePresence } from "framer-motion";
import useListElements from "./useListElements";

interface IHorizontalListProps {
  title: string;
  subListTitles?: string[];
  children?: ReactNode;
  onSubTitleClick?: (title: string) => void;
  className?: string;
  loading?: boolean;
  loadingElements?: ReactElement<any, any>;
  testId?: string;
}

export default function HorizontalList({
  title,
  subListTitles,
  children,
  onSubTitleClick = () => {},
  className,
  loading,
  loadingElements,
  testId = "HorizontalList",
}: IHorizontalListProps): ReactElement {
  const { listReference, slideLeft, slideRight } = useListElements();

  const LoadingElements = () => (loadingElements ? loadingElements : <></>);

  return (
    <Container className={className} data-testid={testId}>
      <h1>{title}</h1>
      {subListTitles && (
        <SubListStyle
          options={subListTitles}
          onChange={(_selected: string) => onSubTitleClick(_selected)}
        />
      )}
      <ListWrapper>
        {loading ? (
          !loadingElements ? (
            <></>
          ) : (
            <LoadingElements />
          )
        ) : (
          <AnimatePresence>
            <ListAnim
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.25 }}
            >
              <LeftSlideBtn
                variant="circleSimpleLeft"
                onClick={slideLeft}
                testId={`${testId}-LeftBtn`}
              />
              <List ref={listReference} data-testid={`${testId}-List`}>
                {children}
              </List>
              <RightSlideBtn
                variant="circleSimpleRight"
                onClick={slideRight}
                testId={`${testId}-RightBtn`}
              />
            </ListAnim>
          </AnimatePresence>
        )}
      </ListWrapper>
    </Container>
  );
}
