import React from "react";
import Content from "../component/content/content"
import Navbarf from "../component/navbar/navbarf"
import Sidbarf from "../component/sidbar/sidbarf"


function Transf() {
  return (
   <div className="wrapper">
    
    <Sidbarf></Sidbarf>
    <Content></Content>
   </div>
  );
}

export default Transf;
