import React from "react";
import styled from "styled-components";
import arrow from "../assets/arrow.svg";

const Email = () => {
  return (
    <BoxEmail>
      <div className="left">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
        <div className="box5"></div>
        <div className="box6"></div>
        <img className="arrow" src={arrow} alt="" />
      </div>
      <div className="right">
        <div className="email-box">
          <h2>
            Know first about <br /> future updates!
          </h2>
          <label htmlFor="name" className="name">
            Name
          </label>
          <input
            type="email"
            placeholder="John Doe"
            id="name"
            style={{ marginBottom: "40px" }}
          />
          <label htmlFor="email" className="email">
            Email
          </label>
          <input type="text" placeholder="johndoe@testlogo.com" id="email" />
          <div className="bottom">
            <button>Sign me up</button>
            <span>or</span>
            <p>Leave us a message</p>
          </div>
        </div>
      </div>
    </BoxEmail>
  );
};

export default Email;

const BoxEmail = styled.div`
  background-color: pink;
  height: 741px;
  background-color: #eeebe3;
  display: flex;

  .left {
    flex: 1;
    position: relative;

    .box1 {
      height: 138px;
      width: 138px;
      background-color: #f5f3ee;
      border-radius: 12px;
      position: absolute;
      top: 97px;
      left: 270px;
    }

    .box2 {
      height: 138px;
      width: 138px;
      background-color: #f5f3ee;
      border-radius: 12px;
      position: absolute;
      top: 453px;
      left: 353px;
    }

    .box3 {
      height: 64px;
      width: 64px;
      background-color: #f5f3ee;
      border-radius: 12px;
      position: absolute;
      top: 283px;
      left: 565px;
    }

    .box4 {
      height: 60px;
      width: 60px;
      background-color: #f5f3ee;
      border-radius: 12px;
      position: absolute;
      top: 332px;
      left: 195px;
    }

    .box5 {
      height: 70px;
      width: 70px;
      background-color: #f5f3ee;
      border-radius: 12px;
      position: absolute;
      top: 573px;
      left: 118px;
    }

    .box6 {
      height: 164px;
      width: 133px;
      background-color: #f5f3ee;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      position: absolute;
      top: 177px;
      overflow-x: hidden;
    }

    .arrow {
      margin-top: 217px;
    }
  }

  .right {
    flex: 1;
    display: flex;
    margin-top: 100px;
    margin-bottom: 100px;

    .email-box {
      box-sizing: border-box;
      width: 480px;
      height: 541px;
      background-color: #0f393b;
      border-radius: 20px;
      padding: 30px;

      .bottom {
        display: flex;
        margin-top: 60px;
        align-items: center;
        padding-left: 30px;

        p {
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 18px;
          letter-spacing: 0em;
          text-align: center;
          color: hsla(42, 83%, 98%, 1);
        }

        span {
          margin-left: 20px;
          margin-right: 20px;
          color: hsla(42, 83%, 98%, 0.2);
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: center;
        }

        button {
          width: 135px;
          height: 45px;
          box-sizing: border-box;
          background-color: hsla(19, 83%, 63%, 1);
          border: none;
          border-radius: 10px;
          color: hsla(42, 83%, 98%, 1);

          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 18px;
          letter-spacing: 0em;
          text-align: center;
        }
      }

      #name,
      #email {
        width: 100%;
        background-color: transparent;
        border: 1.5px solid hsla(43, 26%, 95%, 0.2);
        height: 45px;
        box-sizing: border-box;
        border-radius: 10px;
        margin-top: 20px;

        &::placeholder {
          padding-left: 20px;
          font-size: 18px;
          line-height: 24px;
        }

        &:focus {
          outline: none;
        }
      }

      .name,
      .email {
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: #f5f3ee;
      }

      h2 {
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: left;
        color: #f5f3ee;
        margin-bottom: 60px;
      }
    }
  }
`;
