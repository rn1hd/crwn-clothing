import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 410px) {
    width: 90vw;
    justify-content: center;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
