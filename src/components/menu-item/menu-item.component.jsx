import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleHeader,
  SubtitleContainer,
} from "./menu-item.styles";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useNavigate();
  const location = useLocation();

  return (
    <MenuItemContainer
      className={`${size}`}
      onClick={() => history(`${location.pathname}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <TitleHeader>{title.toUpperCase()}</TitleHeader>
        <SubtitleContainer>SHOP NOW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
