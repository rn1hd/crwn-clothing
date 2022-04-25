import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
        display: flex;
      }
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionItemName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionItemPrice = styled.span`
  width: 10%;
`;

export const CollectionItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;

  @media screen and (max-width: 800px) {
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;
