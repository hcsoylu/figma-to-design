import React from "react";
import styled from "styled-components";

const See = () => {
  return (
    <BoxSee>
      <h2>See what you can easily do!</h2>
      <span>Let TESTLOGO be your right arm</span>
    </BoxSee>
  );
};

export default See;

const BoxSee = styled.div`
  text-align: center;

  h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    color: #0f3b3d;
    margin-bottom: 20px;
  }

  span {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #ef8451;
  }
`;
