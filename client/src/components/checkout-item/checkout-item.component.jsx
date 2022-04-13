import React from "react";
import { useDispatch } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutItemImage,
  QuantityContainer,
  CheckoutItemArrowButton,
  CheckoutItemColumn,
  CheckoutItemQuantity,
  CheckoutItemRemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutItemImage src={imageUrl} alt="item" />
      </ImageContainer>
      <CheckoutItemColumn>{name}</CheckoutItemColumn>
      <QuantityContainer>
        <CheckoutItemArrowButton onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </CheckoutItemArrowButton>
        <CheckoutItemQuantity>{quantity}</CheckoutItemQuantity>
        <CheckoutItemArrowButton onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </CheckoutItemArrowButton>
      </QuantityContainer>
      <CheckoutItemColumn>{price}</CheckoutItemColumn>
      <CheckoutItemRemoveButton
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
