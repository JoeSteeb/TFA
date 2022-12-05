import React from "react";
import '../css/global.css'
import Base from "./Base";

const About = ({doLogout}) => {
  return (
    <>
      <Base doLogout={doLogout}/>
      <div className="content">
          <h1>Public</h1>
      </div>
    </>
  );
};

export default About;