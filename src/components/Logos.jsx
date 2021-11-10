import React from "react";
import styled from "styled-components";
import manu from "../assets/manu.svg";
import sony from "../assets/sony.svg";
import team from "../assets/team.svg";
import book from "../assets/book.svg";
import emirates from "../assets/emirates.svg";
import ibm from "../assets/ibm.svg";
import vdf from "../assets/vdf.svg";
import jp from "../assets/jp.svg";
import son from "../assets/son.svg";
import last from "../assets/last.svg";

const Logos = () => {
  return (
    <BoxLogos>
      <div className="wrapper">
        <img src={manu} alt="" />
        <img src={team} alt="" />
        <img src={emirates} alt="" />
        <img src={vdf} alt="" />
        <img src={last} alt="" />

        <img src={sony} alt="" />
        <img src={book} alt="" />
        <img src={ibm} alt="" />
        <img src={jp} alt="" />
        <img src={son} alt="" />
      </div>
    </BoxLogos>
  );
};

export default Logos;

const BoxLogos = styled.div`
  padding: 130px 200px 130px 200px;
  .wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    align-items: center;
    justify-items: center;
  }
`;
