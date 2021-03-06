import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CheckoutItemColumn = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled.span`
  display: flex;
  width: 23%;
`;

export const CheckoutItemArrowButton = styled.div`
  cursor: pointer;
`;

export const CheckoutItemQuantity = styled.span`
  margin: 0 10px;
`;

export const CheckoutItemRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
