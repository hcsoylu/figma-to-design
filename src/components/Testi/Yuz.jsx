import React from "react";
import styled from "styled-components";

const Yuz = () => {
  return (
    <BoxYuz>
      <div className="wrapper">
        <h3> 100% hosted on the cloud </h3>
        <span> You never need to download or install anything.</span>
        <p>
          TESTLOGO is hosted on a reliable cloud server that you can access from
          any device or browser of your choice.
        </p>
      </div>
    </BoxYuz>
  );
};

export default Yuz;

const BoxYuz = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 859px;
  }

  h3 {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
  }

  span {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    color: #ef8451;
  }

  p {
    margin-top: 60px;
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
