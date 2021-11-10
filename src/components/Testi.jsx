import React from "react";
import styled from "styled-components";
import Boxes from "./Testi/Boxes";
import Cizgi from "./Testi/Cizgi";
import See from "./Testi/See";
import Testimonials from "./Testi/Testimonials";
import Yuz from "./Testi/Yuz";

const Testi = () => {
  return (
    <BoxTesti>
      <See />
      <Boxes />
      <Cizgi />
      <Testimonials />
      <Yuz />
    </BoxTesti>
  );
};

export default Testi;

const BoxTesti = styled.div`
  background-color: #f5f3ee;
  padding-top: 130px;
  padding-bottom: 80px;
`;
