import React from "react";
import ciz from "../../assets/ciz.svg";
import hayda from "../../assets/hayda.svg";
import styled from "styled-components";

const Cizgi = () => {
  return (
    <BoxCizgi>
      <img src={ciz} alt="" />
      <img src={hayda} alt="" />
      <img src={ciz} alt="" />
    </BoxCizgi>
  );
};

export default Cizgi;

const BoxCizgi = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 108px;

  img {
    margin-left: 20px;
    cursor: pointer;
    height: 2px;
  }
`;
