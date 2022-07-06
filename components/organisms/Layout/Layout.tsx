import React, { ReactElement, ReactNode } from "react";

import { Container } from "./styles";
import Footer from "../Footer";
import Navbar from "../Navbar";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps): ReactElement {
  return (
    <Container>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </Container>
  );
}
