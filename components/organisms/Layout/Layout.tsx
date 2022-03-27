import React, { ReactElement } from "react";

import Footer from "../Footer";
import Navbar from "../Navbar";
import { Container } from "./styles";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <Container>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </Container>
  );
}
