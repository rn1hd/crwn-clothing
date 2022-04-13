import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  PreviewContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  const history = useNavigate();
  const location = useLocation();

  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle
        onClick={() => history(`${location.pathname}/${title.toLowerCase()}`)}
      >
        {title.toUpperCase()}
      </CollectionPreviewTitle>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
