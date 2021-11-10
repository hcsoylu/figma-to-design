import React from "react";
import styled from "styled-components";

const Boxes = () => {
  return (
    <Box>
      <div className="each">Marketing Automation</div>
      <div className="each">SEO Audit</div>
      <div className="each">Keyword Research</div>
      <div className="each">Content Marketing</div>
      <div className="each">Competitor Analisys</div>
    </Box>
  );
};

export default Boxes;

const Box = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
  margin-bottom: 92px;

  .each {
    width: 200px;
    height: 84px;
    background-color: #eeebe3;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    color: #0f393b;
  }
`;
