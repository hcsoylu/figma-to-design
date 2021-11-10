import React from "react";
import styled from "styled-components";
import logogreen from "../assets/logogreen.svg";
import logoorange from "../assets/logoorange.svg";

const Header = () => {
  return (
    <NavBar>
      <div className="left">
        <div className="logos">
          <img src={logoorange} alt="orange-logo" className="orange" />
          <img src={logogreen} alt="green-logo" />
        </div>
        <span style={{ marginLeft: "50px" }}>TESTLOGO</span>
      </div>
      <div className="middle">
        <div>Features </div>
        <div>Why us</div>
        <div>Prices</div>
        <div>Integrations</div>
        <div>SEO News</div>
      </div>
      <div className="right">
        <span>Log in</span>
        <button>Get started</button>
      </div>
    </NavBar>
  );
};

export default Header;

const NavBar = styled.div`
  background: #f5f3ee;
  height: 85px;
  padding-left: 90px;
  padding-right: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #0f393b;
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  border-bottom: 1px solid #CED9D2;

  .logos {
          position: absolute;
          margin-left: 14px;

          .orange {
            position: absolute;
            left: -14px;
          }
        }


  .left {
    display: flex;
    align-items: center;
    }

    span {
      margin-left: 10px;
      font-size: 24px;
      font-weight: 600;
    }
  }

  .middle {
    display: flex;

    div {
      margin-left: 40px;
    }
  }

  .right {
    span { 
      font-size: 18px;
    }

    button {
      background: #347362;
      height: 45px;
      width: 137px;
      border-radius: 10px;
      border: none;
      color: #f5f3ee;
      margin-left: 20px;
      cursor: pointer;
      font-size: 18px;
      line-height: 18px;
      font-weight: 600;
    }
  
`;
