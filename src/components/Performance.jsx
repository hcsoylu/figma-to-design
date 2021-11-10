import React from "react";
import styled from "styled-components";
import long from "../assets/long.svg";
import down from "../assets/down.svg";
import up from "../assets/up.svg";
import sarıok from "../assets/sarıok.svg";
import sus from "../assets/sus.svg";

const Performance = () => {
  return (
    <BoxPerf>
      <div className="left">
        <h3>Web Performance automated</h3>
        <p style={{ marginBottom: "40px" }}>
          Let us do the ‘boring’ stuff, while do <br /> things you do best.
        </p>
        <div className="duz" style={{ position: "relative" }}>
          <img src={sus} alt="" style={{ position: "absolute", top: "12px" }} />
          <img src={long} alt="" />
        </div>
        <div className="open">
          <h4>Deep Know-how</h4>
          <span>
            <img src={up} alt="" />
          </span>
        </div>
        <p className="open-p">
          Know exactly how your website performs. View all the required
          statistical data neetly placed in front of you on a nice-looking
          dashboard.
        </p>
        <div style={{ marginTop: "20px" }}>
          <span className="started" style={{ marginRight: "10px" }}>
            Get started
          </span>
          <img src={sarıok} alt="" />
        </div>

        <div className="duz">
          <img src={long} alt="" />
        </div>
        <div className="open">
          <h4>Brand Awareness</h4>
          <span>
            <img src={down} alt="" />
          </span>
        </div>
        <div className="duz">
          <img src={long} alt="" />
        </div>
        <div className="open">
          <h4>Marketing automations</h4>
          <span>
            <img src={down} alt="" />
          </span>
        </div>
        <div className="duz">
          <img src={long} alt="" />
        </div>
        <div className="open">
          <h4>Professional Analysis</h4>
          <span>
            <img src={down} alt="" />
          </span>
        </div>
        <div className="duz">
          <img src={long} alt="" />
        </div>
        <div className="open">
          <h4>Deep Competitors’ Analysis</h4>
          <span>
            <img src={down} alt="" />
          </span>
        </div>
      </div>
      <div className="right">
        <div className="orange" />
        <div className="opak" />
      </div>
    </BoxPerf>
  );
};

export default Performance;

const BoxPerf = styled.div`
  background-color: #0f393b;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 250px;
  padding-left: 240px;
  display: flex;

  .left {
    width: 390px;
    display: flex;
    flex-direction: column;

    .started {
      margin-top: 20px;
      color: #edcb50;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
    }

    .open-p {
      margin-top: 10px;
      max-width: 320px;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      color: #f5f3ee;
    }

    .open {
      margin-top: 13px;
      max-width: 300px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h4 {
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: #e6e7e3;
      }

      span {
        color: #e6e7e3;
      }
    }

    p {
      color: #f5f3ee;
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }

    h3 {
      color: #f5f3ee;
      font-size: 21px;
      font-style: normal;
      font-weight: 600;
      line-height: 27px;
      letter-spacing: 0em;
      text-align: left;
      margin-bottom: 20px;
    }
  }

  .right {
    margin-top: 40px;
    position: relative;

    .opak {
      position: absolute;
      border-radius: 5px;
      width: 562px;
      height: 369px;
      top: 56px;
      left: 78px;
      background-color: rgba(245, 243, 238, 0.1);
    }

    .orange {
      position: absolute;
      background-color: #ef8451;
      border-radius: 5px;
      width: 560px;
      height: 365px;
      z-index: 66;
    }
  }
`;
