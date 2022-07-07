import { Container, ExtraDetailSection, ShortDetailSection } from "./styles";

import { ReactElement } from "react";

interface IDetailsPageProps {}

export default function DetailsPage({}: IDetailsPageProps): ReactElement {
  return (
    <Container>
      <ShortDetailSection>Hello</ShortDetailSection>
      <ExtraDetailSection>Goodbye</ExtraDetailSection>
    </Container>
  );
}
