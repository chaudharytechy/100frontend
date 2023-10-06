/** @format */

import React from "react";
import { styled } from "styled-components";

function FeaturedSection() {
  return (
    <Wrapper className='section'>
      <div style={{ margin: "20px 80px 50px 80px" }}>
        <div className='sshdNBC d-flex justify-content-around align-items-center flex-wrap'>
          <div className='flex1 mt-3 mb-3'>
            <div className='dkMMCKpP'>
              <img
                src='https://images.prismic.io/99-content/21e97878-9ae3-43c0-918a-c0a3e6b1bb10_Continuum+hero+shot.jpg?auto=compress,format&mode=crop&width=544&q=35'
                alt=''
                className='rounded'
              />
            </div>
            <div className='pad'>
              <p className='ft-sz-25 _2rhE-'>Godrej Nature Plus</p>
              <p className='ft-cl-gr'>Gurugram · Sector 34 · D07</p>
              <div className="_1Hy63 d-flex justify-content-between align-items-center">
              <div style={{width:"fit-content"}}> 
                <p className='smallText _2rhE- li-ht-22'>Residencial · 2023 · FreeHold</p>
                <p className='smallText _2rhE- li-ht-22'>74 units · 2, 3, 4, 5 BHK</p>
              </div>
              <div style={{height:"44px",width:"70px"}} className="JSJBSm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/2560px-Godrej_Logo.svg.png" alt="" />
              </div>
              </div>
            </div>
          </div>
          <div className='flex1 mt-1'>
            <div className='dkMMCKpP'>
              <img
                src='https://images.prismic.io/99-content/7c4a2365-7256-4587-9293-a1ef45fbac30_Lentor+hills+Featured+Project+v2.jpg?auto=compress,format&mode=crop&width=544&q=35'
                alt=''
                className='rounded'
              />
            </div>
            <div className='pad'>
              <p className='ft-sz-25 _2rhE-'>M3M Skywalk</p>
              <p className='ft-cl-gr' style={{fontWeight:"200"}}>Gurugram · Sector 74 · D07</p>
              <div className="_1Hy63 d-flex justify-content-between">
              <div style={{width:"fit-content"}}>  
                <p className='smallText _2rhE- li-ht-22'>Residencial · 2014 · Ready To Move In</p>
                <p className='smallText _2rhE- li-ht-22'>39 units · 2, 3, 4 Bedroom</p>
              </div>
              <div style={{height:"44px",width:"auto"}} className="JSJBSm">
                <img src="https://www.asite.com/hubfs/resources/images/newsroom/Resized/M3M.jpg" alt="" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default FeaturedSection;
const Wrapper = styled.section`
  .pad {
    padding: 24px;
  }
  .ft-sz-25 {
    font-size: 25px;
  }
  .ft-cl-gr {
    color: #787d9c;
  }
  .li-ht-22{
  line-height: 22px;
  }
  ._31INB {
    padding: 24px;
  }
  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .dkMMCKpP {
    width: 544px;
    height: 272px;
  }
  .dkMMCKpP img {
    width: 100%;
    height: 100%;
    border-radius: 16px 16px 0px 0px !important;
  }
  ._1Hy63 {
    margin-top: 12px;
    white-space: pre-wrap;
}
.JSJBSm img{
  width:100%;
  height:100%;
}
  .flex1:hover {
    cursor: pointer;
    transform:scale(1.02);
    transition: all .5s;
  }
  .flex1:not(:hover) {
    transform:scale(1);
    transition: all .5s;
  }
  ._2rhE- {
    color: #1a2258;
  }
  .smallText {
    font-size: medium;
  }
  .flex1 {
    box-shadow: 0 0 30px 0 #0000001a;
    border-radius: 16px;
    width: 544px;
  }
  @media screen and (max-width: 600px) {
    margin: 8% auto;
    .dkMMCKpP{
      width:90vw;
    }
    .flex1 {
      width: 350px;
    }
  }
  @media screen and (max-width: 370px) {
    margin: 8% auto;
    .flex1 {
      width: 320px;
    }
  }
`;
