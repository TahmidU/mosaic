import styled, { css } from "styled-components";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Card from "components/atoms/Card";
import { FaExternalLinkAlt } from "react-icons/fa";
import StarRating from "components/molecules/StarRating";

export const Container = styled(Card)`
  width: 436px;
  max-width: unset;
  max-height: unset;
  height: 1398px;
  cursor: unset;

  > div:first-child {
    width: 379px;
    height: 580px;
    max-width: unset;
    max-height: unset;

    > img:first-child {
      width: 379px;
      height: 580px;
    }
  }

  > div:nth-child(2) {
    width: 100%;
  }

  box-shadow: unset;
  border: unset;
`;
Container.displayName = "Container";

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
MainSection.displayName = "MainSection";

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  > span {
    margin: 0 auto 0 0;
    text-align: start;
  }

  > span:first-child {
    font-weight: 400;
    ${({ theme }) => theme.fonts.tertiary.bigger};
  }

  > span:last-child {
    font-weight: 300;
    ${({ theme }) => theme.fonts.tertiary.regular};
  }
`;
TitleBlock.displayName = "TitleBlock";

export const StarRatingStyle = styled(StarRating)`
  margin: 0 0 1rem 0;
`;
StarRatingStyle.displayName = "StarRatingStyle";

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  svg:first-child {
    margin: 0 0.5rem 0 0;
  }

  svg:not(:first-child):not(:last-child) {
    margin: 0 0.5rem;
  }

  svg:last-child {
    margin: 0 0 0 0.5rem;
  }
`;
Socials.displayName = "Socials";

const iconStyling = css`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const ExternalLinkIcon = styled(FaExternalLinkAlt)`
  ${iconStyling}
`;
ExternalLinkIcon.displayName = "ExternalLinkIcon";

export const FacebookIcon = styled(BsFacebook)`
  ${iconStyling}
`;
FacebookIcon.displayName = "FacebookIcon";

export const InstagramIcon = styled(BsInstagram)`
  ${iconStyling}
`;
InstagramIcon.displayName = "InstagramIcon";

export const TwitterIcon = styled(BsTwitter)`
  ${iconStyling}
`;
TwitterIcon.displayName = "TwitterIcon";

export const SubSection = styled.div``;
SubSection.displayName = "SubSection";
