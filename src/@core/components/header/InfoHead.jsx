import React from "react";

import { comapnayInformation } from "../../../utils/utils";

// ** animation
import "animate.css";

const styles = {
  infoHeadContainer: {
    height: "60px",
    width: "100%",
    boxShadow: "inset 0 0 0.5px 1px hsla(0, 0%,  100%, 0.075)",
  },
  iconSpaner: {
    // width: "20px",
    // height: "20px",
  },
  infoText: {
    fontSize: "13px",
  },
};

const InfoHead = () => {
  return (
    <div
      className="info-head-container bg-dark animate__animated animate__fadeInDown d-flex align-items-center justify-content-around text-white px-3 position-fixed top-0"
      style={styles.infoHeadContainer}
    >
      <ul
        className="d-flex gap-3 align-items-center"
        style={{ listStyle: "none" }}
      >
        <li className="d-flex gap-1 align-items-center">
          <span style={styles.iconSpaner} className="d-inline-block">
            <img
              src={comapnayInformation.icon["Location"]}
              width={"20px"}
              height={"20px"}
            />
          </span>
          <span style={styles.infoText}>{comapnayInformation.address}</span>
        </li>
        <li className="d-flex gap-1 align-items-center">
          <span style={styles.iconSpaner} className="d-inline-block">
            <img
              src={comapnayInformation.icon["Mobile"]}
              width={"20px"}
              height={"20px"}
            />
          </span>
          <span style={styles.infoText}>{comapnayInformation.phoneNmb}</span>
        </li>
        <li className="d-flex gap-1 align-items-center">
          <span style={styles.iconSpaner} className="d-inline-block">
            <img
              src={comapnayInformation.icon["Calender"]}
              width={"20px"}
              height={"20px"}
            />
          </span>
          <span style={styles.infoText}>{comapnayInformation.date}</span>
        </li>
      </ul>
      <ul
        className="d-flex gap-3 align-items-center"
        style={{ listStyle: "none" }}
      >
        {comapnayInformation.social.map((icon, index) => (
          <li key={index} style={{cursor:"pointer"}}>
            <img src={icon} key={index} width={"25px"} height={"25px"} className="cursor-pointer"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoHead;
