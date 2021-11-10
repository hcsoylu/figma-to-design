import React from "react";
import styled from "styled-components";
import logogreen from "../assets/logogreen.svg";
import logoorange from "../assets/logoorange.svg";

const Foter = () => {
  return (
    <BoxFoter>
      <div className="top">
        <h2>Start automating now!</h2>
        <p>
          Try TESTLOGO for 7 days, and explore all the tools you need to <br />
          analyze, monitor and enchance your website.
        </p>
        <button>Start free trial</button>
      </div>
      <div className="bottom">
        <div className="wrapper">
          <div className="ust">
            <div className="logos">
              <img className="orange" src={logoorange} alt="orange-logo" />
              <img src={logogreen} alt="green-logo" />
            </div>
            <h3>TESTLOGO</h3>
          </div>
          <div className="alt">
            <h5>
              Access powerful professionally <br /> automated SEO tools.
            </h5>
            <div className="mid">
              <span>Terms of Service</span>
              <span>Privacy Policy</span>
              <span>Cookie Policy</span>
            </div>
            <div style={{ paddingTop: "20px" }}>© 2021 TESTLOGO</div>
          </div>
        </div>
      </div>
    </BoxFoter>
  );
};

export default Foter;

const BoxFoter = styled.div`
  height: 588px;
  background-color: hsla(183, 59%, 15%, 1);
  color: hsla(43, 26%, 95%, 1);
  box-sizing: border-box;

  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 100px;
    padding-bottom: 100px;

    h2 {
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: center;
      margin-bottom: 20px;
    }

    p {
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;
      margin-bottom: 40px;
    }

    button {
      height: 45px;
      box-sizing: border-box;
      background-color: hsla(164, 38%, 33%, 1);
      border-radius: 10px;
      border: none;
      width: 160px;
      color: hsla(42, 83%, 98%, 1);
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: center;
    }
  }

  .bottom {
    height: 195px;
    padding: 0 90px;

    .wrapper {
      border-top: 1px solid grey;
      display: flex;
      flex-direction: column;
      padding: 40px 0;

      .alt {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 300;
        font-size: 18px;

        h5 {
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
        }

        .mid {
          display: flex;
          padding-top: 20px;
          span {
            margin-right: 45px;
          }
        }
      }

      .ust {
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        .logos {
          position: absolute;
          margin-left: 14px;

          .orange {
            position: absolute;
            left: -14px;
          }
        }

        h3 {
          margin-left: 60px;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: 0em;
        }
      }
    }
  }
`;
