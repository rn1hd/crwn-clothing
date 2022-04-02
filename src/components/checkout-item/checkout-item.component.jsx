import React from "react";
import { connect } from "react-redux";

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

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutItemImage src={imageUrl} alt="item" />
      </ImageContainer>
      <CheckoutItemColumn>{name}</CheckoutItemColumn>
      <QuantityContainer>
        <CheckoutItemArrowButton onClick={() => removeItem(cartItem)}>
          &#10094;
        </CheckoutItemArrowButton>
        <CheckoutItemQuantity>{quantity}</CheckoutItemQuantity>
        <CheckoutItemArrowButton onClick={() => addItem(cartItem)}>
          &#10095;
        </CheckoutItemArrowButton>
      </QuantityContainer>
      <CheckoutItemColumn>{price}</CheckoutItemColumn>
      <CheckoutItemRemoveButton onClick={() => clearItem(cartItem)}>
        &#10005;
      </CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
