import React from "react";
import styled from "styled-components";
import smilewoman from "../assets/smilewoman.png";
import play from "../assets/play.svg";
import playv from "../assets/playv.svg";
import heroline from "../assets/heroline.svg";

const HeroSection = () => {
  return (
    <Hero>
      <div className="left">
        <div className="content-wrapper">
          <h1>
            The world is open <br /> for your business
          </h1>
          <img
            src={heroline}
            alt=""
            style={{ marginTop: "30px", marginBottom: "30px" }}
          />
          <p>
            The all-in-one platform that increases your Company's online success
            in a simple and complete way. <br /> No technical skills are
            required
          </p>
          <div className="button-wrapper">
            <div className="button-top">
              <input type="text" placeholder="Enter your email address" />
              <button>Start trial</button>
            </div>
            <p>Try TESTLOGO 7 days for 7 Euros</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={smilewoman} alt="" />
        <img
          src={play}
          alt="play"
          className="play"
          style={{ cursor: "pointer" }}
        />
        <img src={playv} alt="play" className="playv" />
      </div>
    </Hero>
  );
};

export default HeroSection;

const Hero = styled.div`
  display: flex;

  .left {
    flex: 1;
    padding-left: 90px;

    .content-wrapper {
      h1 {
        font-size: 48px;
        line-height: 60px;
        font-weight: 600;
        color: #0f393b;
        margin-top: 119px;
      }

      p {
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        color: #0f393b;
        width: 467px;
      }

      .button-wrapper {
        margin-top: 100px;
        display: flex;
        flex-direction: column;

        .button-top {
          margin-bottom: 10px;
          position: relative;
          width: 467px;
          height: 45px;

          button {
            cursor: pointer;
            background-color: #347362;
            color: #f5f3ee;
            border-radius: 10px;
            font-size: 18px;
            line-height: 18px;
            font-weight: 600;
            border: none;
            position: absolute;
            top: 0;
            right: -10px;
            width: 108px;
            height: 110%;
          }

          input {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            background-color: #eeebe3;
            border: 1.5px solid #ced9d2;

            &::placeholder {
              color: rgba(15, 57, 59, 0.2);
              font-size: 18px;
              line-height: 24px;
              font-weight: 400;
              padding-left: 20px;
            }
          }
        }

        p {
          font-size: 18px;
          line-height: 24px;
          font-weight: 400;
        }
      }
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: row-reverse;
    height: 610px;
    width: 710px;
    position: relative;

    .play {
      position: absolute;
      bottom: 20px;
      left: 20px;
    }

    .playv {
      position: absolute;
      bottom: 17px;
      left: 50px;
    }
  }
`;
