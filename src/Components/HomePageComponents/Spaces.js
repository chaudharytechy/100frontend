import React from "react";
import styled from "styled-components";

function SpacesAvailable() {
  return (
    <Wrapper className="section">
    <div style={{boxShadow:"0px 0px 30px 0px #0000001a",borderRadius:"25px"}}>
    <div style={{fontSize:"30px",paddingTop:"20px",fontWeight:"600",textAlign:"center"}}>Choose the Best For you</div>
      <div className="_6sknMP">
        <div className="_ksjMM _1fe1" title="Coworking spaces">
          <p className="_9gncbH">Coworking</p>
          <p className="_4rgjvNN">Spaces</p>
        </div>
        <div className="_ksjMM _1fe2" title="List all your properties">
          <p className="_9gncbH">List</p>
          <p className="_4rgjvNN">Property</p>
        </div>
        <div className="_ksjMM _1fe3" title="Office spaces">
          <p className="_9gncbH">Office</p>
          <p className="_4rgjvNN">Spaces</p>
        </div>
        <div className="_ksjMM _1fe4" title="Virtual Offices">
          <p className="_9gncbH">Virtual</p>
          <p className="_4rgjvNN">Offices</p>
        </div>
        <div className="_ksjMM _1fe5" title="Enterprise Solutions">
          <p className="_9gncbH">Enterprise</p>
          <p className="_4rgjvNN">Solutions</p>
        </div>
        <div className="_ksjMM _1fe6" title="Coliving spaces">
          <p className="_9gncbH">Coliving</p>
          <p className="_4rgjvNN">Spaces</p>
        </div>
      </div>
      </div>
      </Wrapper>
  );
}

export default SpacesAvailable;
const Wrapper=styled.section`
._6sknMP{
  display:flex;
  flex-wrap:wrap;
  padding:35px 15px;
  justify-content: space-around;
  
  border-radius:15px;
  margin-bottom:30px;
}
._1fe1,._1fe2,._1fe3,._1fe4,._1fe5,._1fe6{
  background-position: center;
  margin: 20px;
  cursor: pointer;
  background-image: linear-gradient(to right,rgb(255, 255, 255,0.1),rgb(255, 255, 255,0.1),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url("https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/02/Web_150DPI-20191213_WeWork_One-Seaport-Square-Boston_011_v1.jpg");
}
._ksjMM{
  width: 380px;
  min-height: 150px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  box-sizing: border-box;
}
p,span{
  padding-right: 10%;
  font-size: x-large;
  line-height: normal;
  color:white;
}
._4rgjvNN{
  margin-top:0px;
  font-weight: 600;
}
._9gncbH{
  font-weight: 100;
}
._ksjMM:hover{
  transform:scale(1.05);
  transition: all .5s;
}
._ksjMM:not(:hover){
  transform:scale(1);
  transition: all .5s;
}
@media screen and (max-width:850px){
  ._ksjMM{
    width:320px;
  }
}
@media screen and (max-width:1300px) and (min-width:850px){
  ._ksjMM{
    width:360px;
  }
}
`