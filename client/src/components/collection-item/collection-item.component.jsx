import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  CollectionItemName,
  CollectionItemPrice,
  CollectionItemImage,
  AddToCartButton,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <CollectionItemContainer>
      <CollectionItemImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>{price}</CollectionItemPrice>
      </CollectionFooterContainer>
      <AddToCartButton onClick={() => dispatch(addItem(item))} inverted>
        Add to Cart
      </AddToCartButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
