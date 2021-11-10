import React, { useState } from "react";
import styled from "styled-components";
import balon from "../../assets/balon.svg";
import solaok from "../../assets/solaok.svg";
import sagaok from "../../assets/sagaok.svg";

const Testimonials = () => {
  const [index, indexSet] = useState(1);

  const changeHanler = () => {
    if (index === 1) {
      indexSet(2);
    }
    if (index === 2) {
      indexSet(1);
    }
  };

  return (
    <BoxMoni>
      <div className="balon">
        <img src={balon} alt="" />
      </div>
      <img src={solaok} alt="" className="solaok" onClick={changeHanler} />
      <img src={sagaok} alt="" className="sagaok" onClick={changeHanler} />
      {index === 1 && (
        <div>
          <div>
            <p className="speech">
              "I have never seen a more effective SEO company. TESTLOGO helped
              me rank my websites on the first page for my target keywords,
              which led to a huge increase in advertising revenue."
            </p>
          </div>
          <div className="people">
            <h3>Emily R.</h3>
            <span>SEO Specialist</span>
          </div>
        </div>
      )}
      {/*ikinci*/}
      {index === 2 && (
        <div>
          <div>
            <p className="speech">
              "TESTLOGO is the perfect business solution for my company. I'm a
              young entrepreneur and enjoy working on creative projects, but I
              still want to grow my company. A friend recommended TESTLOGO to me
              and it has been such an easy way for me to get started."
            </p>
          </div>
          <div className="people">
            <h3>Reece H.</h3>
            <span>Enrepeneur</span>
          </div>
        </div>
      )}
    </BoxMoni>
  );
};

export default Testimonials;

const BoxMoni = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 500px;

  .solaok {
    position: absolute;
    left: 190px;
    top: 120px;
    cursor: pointer;
  }

  .sagaok {
    position: absolute;
    right: 190px;
    top: 120px;
    cursor: pointer;
  }

  .people {
    margin-top: 60px;
    margin-bottom: 160px;
    text-align: center;
    h3 {
      font-size: 21px;
      font-style: normal;
      font-weight: 600;
      line-height: 27px;
      letter-spacing: 0em;

      margin-bottom: 10px;
    }

    span {
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
    }
  }

  .balon {
    margin-bottom: 20px;
  }

  .speech {
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
    max-width: 820px;
  }
`;
