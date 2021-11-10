import React from "react";
import styled from "styled-components";
import kafa from "../assets/kafa.svg";
import arac from "../assets/arac.svg";
import kut from "../assets/kut.svg";

const Starter = () => {
  return (
    <BoxStarter>
      <h2>It is very easy to start!</h2>
      <div className="starter">
        <div className="start">
          <span>
            <img src={kafa} alt="" />
          </span>
          <h3>Set up your account</h3>
          <p>
            With a few simple clicks create a trial <br /> account for 7 days,
            it’s very easy!
          </p>
        </div>
        <div className="start">
          <span>
            <img src={arac} alt="" />
          </span>
          <h3>Pick tools you need</h3>
          <p>
            Based on your needs, use the tools <br /> and choose a plan later.
          </p>
        </div>
        <div className="start">
          <span>
            <img src={kut} alt="" />
          </span>
          <h3>Enjoy automation</h3>
          <p>
            You are set to go. Now sit back, relax <br /> and watch TESTLOGO do
            everything <br /> for you.
          </p>
        </div>
      </div>
    </BoxStarter>
  );
};

export default Starter;

const BoxStarter = styled.div`
  height: 476px;
  background-color: hsla(44, 24%, 91%, 1);
  padding-top: 100px;
  padding-left: 202px;

  .starter {
    display: flex;

    .start {
      flex: 1;
      width: 300px;

      h3 {
        margin-top: 20.5px;
        font-size: 21px;
        font-style: normal;
        font-weight: 600;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: left;
      }

      p {
        margin-top: 20px;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }

  h2 {
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: hsla(183, 59%, 15%, 1);
    margin-bottom: 57px;
  }
`;
