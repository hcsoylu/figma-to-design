import React from "react";
import styled from "styled-components";
import one from "../assets/one.svg";
import ikii from "../assets/ikii.svg";
import ucc from "../assets/ucc.svg";
import dortt from "../assets/dortt.svg";
import bess from "../assets/bess.svg";
import altıı from "../assets/altıı.svg";
import okk from "../assets/okk.svg";

const Pillars = () => {
  return (
    <BoxPillars>
      <h2>We automated the 6 pillars of web success</h2>
      <div className="boxed">
        <div className="card-item">
          <div className="card-item-top">
            <div className="special">
              <img src={one} alt="one" />
            </div>
            <span>Technical Analysis</span>
          </div>
          <div className="card-item-bottom">
            <p>
              Do in-dept and easy technical analysis of your website, page by
              page
            </p>
            <div style={{ marginTop: "10px" }}>
              <span>Learn more</span>
              <img src={okk} alt="okk" />
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-item-top">
            <div className="special" style={{ background: "#EDCB50" }}>
              <img src={ikii} alt="one" />
            </div>
            <span>Content Analysis</span>
          </div>
          <div className="card-item-bottom">
            <p>Make your content perfect for both people and search engines.</p>
            <div style={{ marginTop: "10px" }}>
              <span>Learn more</span>
              <img src={okk} alt="okk" />
            </div>
          </div>
        </div>

        <div className="card-item">
          <div className="card-item-top">
            <div className="special " style={{ background: "#347362" }}>
              <img src={ucc} alt="one" />
            </div>
            <span>Content Generator</span>
          </div>
          <div className="card-item-bottom">
            <p>
              Advanced AI-powered tool to write blogs, social media, ADS, sales
              letters & more
            </p>
            <div style={{ marginTop: "10px" }}>
              <span>Learn more</span>
              <img src={okk} alt="okk" />
            </div>
          </div>
        </div>
      </div>
      <div className="boxed" style={{ marginTop: "20px" }}>
        <div className="card-item">
          <div className="card-item-top">
            <div className="special" style={{ background: "#EDCB50" }}>
              <img src={dortt} alt="one" />
            </div>
            <span>Project Management</span>
          </div>
          <div className="card-item-bottom">
            <p>The easiest way for teams to know who's doing what by when</p>
            <div style={{ marginTop: "10px" }}>
              <span>Learn more</span>
              <img src={okk} alt="okk" />
            </div>
          </div>
        </div>
        <div className="card-item">
          <div className="card-item-top">
            <div className="special" style={{ background: "#347362" }}>
              <img src={bess} alt="one" />
            </div>
            <span>Brand reputation</span>
          </div>
          <div className="card-item-bottom">
            <p>
              Your brand's profitability and success hinge on having a great
              online reputation
            </p>
            <div style={{ marginTop: "10px" }}>
              <span>Learn more</span>
              <img src={okk} alt="okk" />
            </div>
          </div>
        </div>

        <div className="card-item">
          <div className="card-item-top">
            <div className="special" style={{ background: "#EF8451" }}>
              <img src={altıı} alt="one" />
            </div>
            <span>CRM</span>
          </div>
          <div className="card-item-bottom">
            <p>
              Totally customizable CRM for every business, for every industry
            </p>
            <div style={{ marginTop: "10px" }}>
              <span>Learn more</span>
              <img src={okk} alt="okk" />
            </div>
          </div>
        </div>
      </div>
    </BoxPillars>
  );
};

export default Pillars;

const BoxPillars = styled.div`
  height: 760px;

  background-color: #eeebe3;

  h2 {
    padding-top: 130px;
    padding-bottom: 50px;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
  }

  .boxed {
    display: flex;
    gap: 20px;
    padding-left: 30px;
    padding-right: 30px;

    span {
      font-size: 21px;
      line-height: 27px;
      font-weight: 600;
      color: #0f393b;
    }

    .card-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 430px;
      height: 210px;
      background-color: #f5f3ee;
      border-radius: 10px;
      padding: 30px;
      box-sizing: border-box;
      justify-content: space-between;

      .card-item-top {
        display: flex;
        align-items: center;

        .special {
          background-color: #ef8451;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 40px;
          border-radius: 10px;
          margin-right: 10px;
        }
      }

      .card-item-bottom {
        display: flex;
        flex-direction: column;

        img {
          margin-left: 10px;
        }

        p {
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
        }

        span {
          margin-top: 10px;
          color: #ef8451;
          font-weight: 600;
          font-size: 18px;
          line-height: 18px;
          cursor: pointer;
        }
      }
    }
  }
`;
