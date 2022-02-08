import { FooterContainer, MosaicContainer, MovieDBContainer } from "./styles";

import Logo from "../../../img/Logo";
import { ReactElement } from "react";

interface FooterProps {}

export default function Footer({}: FooterProps): ReactElement {
  return (
    <FooterContainer>
      <div>
        <MosaicContainer>
          <Logo />
          <span>@2022 Mosaic, Ltd. All rights reserved</span>
        </MosaicContainer>
        <MovieDBContainer>
          <span>Powered by</span>
        </MovieDBContainer>
      </div>
      <div>
        <span>Product</span>
        <span>Why Mosaic</span>
        <span>Regions</span>
        <span>Uptime</span>
        <span>Download App</span>
      </div>
      <div>
        <span>Community</span>
        <span>Our Community</span>
        <span>Beta Program</span>
        <span>Developers</span>
        <span>Forum</span>
      </div>
      <div>
        <span>Support</span>
        <span>Help</span>
        <span>Trouble</span>
        <span>Blog</span>
      </div>
      <div>
        <span>Company</span>
        <span>About Us</span>
        <span>Careers</span>
        <span>Contact Us</span>
      </div>
    </FooterContainer>
  );
}
