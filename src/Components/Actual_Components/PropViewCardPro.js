import React from "react";
import { styled } from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { BsFillCameraFill } from "react-icons/bs";

function PropViewCardPro() {
  return (
    <Wrapper className='section'>
      <div className='mainFrame bc-rd-23'>
        <div className='contentsJm w-100 h-100 bc-rd-23 d-flex'>
          <div className='leftMcn'>
            <div className='imgeProp bc-rd-23'>
              <div className='imgdev position-relative'>
                <img src='' alt='' />
              </div>
              <div className='photDivnum p-2 d-flex flex-column justify-content-between h-100'>
                <div className='vrfied bc-rd-23 d-flex justify-content-center align-items-center'>
                  <span className='px-3 d-flex justify-content-center align-items-center'>
                    Verified{" "}
                    <span className='pl-1'>
                      <AiFillStar color='gold' />
                    </span>
                  </span>
                </div>
                <div className='imgLJR bc-rd-23 d-flex justify-content-center align-items-center'>
                  <span className='px-2 d-flex justify-content-center align-items-center'>
                    <span className='pr-1'>
                      <BsFillCameraFill color='white' />
                    </span>
                    <span style={{ color: "white" }}>10</span>
                  </span>
                </div>
              </div>
            </div>
            <div className='textSb ml-3 mt-2'>
              <span className='font-weight-bold ft-sz-15'>Owner : </span>
              <span className='ft-sz-14'>Bestech</span>
            </div>
          </div>
          <div className='rightMcn pl-4 w-100 pr-3'>
            <div className='topSkn d-flex justify-content-between'>
              <div className='d-flex'>
                <span className='mr-3 font-weight-bold ft-sz-15'>
                  Home for Sale
                </span>
                <div className='ftred bc-rd-23 d-flex justify-content-center align-items-center'>
                  <span className='px-3 py-0 ft-sz-14 font-weight-bold'>
                    Newly Launched
                  </span>
                </div>
              </div>
              <div>
                <span className='font-weight-bold ft-sz-15'>
                  ₹ 1.3 CR - 3.08 CR
                </span>
              </div>
            </div>

            <div className='mt-2'>
              <p className='skdjMdH ft-sz-15 ft-cl-gr'>
                Golf Course Road, Sector 53, Gurgaon
              </p>
            </div>

            <div className='cmMidSec d-flex justify-content-between'>
              <div className='BhCle d-flex flex-column bc-rd-15'>
                <div className='bhClef bc-rd-15-top px-3 py-1'>
                  <span className='ft-sz-14 font-weight-bold'>2 BHK</span>
                  <span className='ft-sz-12 font-weight-bold ft-cl-g2 ml-1'>
                    Apartment
                  </span>
                </div>
                <div className='px-3 pt-2'>
                <div className='ft-sz-10 ft-cl-gr'>Built Up Area</div>
                <div className="mb-0 d-flex align-items-center">
                  <div className='ft-sz-12 font-weight-bold mr-1'>2057 sq.ft.</div>
                  <div className='ft-sz-10 ft-cl-gr'>(650 sq.m)</div>
                </div>
                <span className='ft-sz-14 font-weight-bold'>₹ 1.30 CR</span>
                </div>
              </div>
              <div className='BhCle d-flex flex-column bc-rd-15'>
                <div className='bhClef bc-rd-15-top px-3 py-1'>
                  <span className='ft-sz-14 font-weight-bold'>3 BHK</span>
                  <span className='ft-sz-12 font-weight-bold ft-cl-g2 ml-1'>
                    Apartment
                  </span>
                </div>
                <div className='px-3 pt-2'>
                  <div className='ft-sz-10 ft-cl-gr'>Built Up Area</div>
                  <div className="mb-0 d-flex align-items-center">
                    <div className='ft-sz-12 font-weight-bold mr-1'>3057 sq.ft.</div>
                    <div className='ft-sz-10 ft-cl-gr'>(650 sq.m)</div>
                  </div>
                  <span className='ft-sz-14 font-weight-bold'>₹ 2.75 CR</span>
                </div>
              </div>
              <div className='BhCle d-flex flex-column bc-rd-15'>
                <div className='bhClef bc-rd-15-top px-3 py-1'>
                  <span className='ft-sz-14 font-weight-bold'>4 BHK</span>
                  <span className='ft-sz-12 font-weight-bold ft-cl-g2 ml-1'>
                    Apartment
                  </span>
                </div>
                <div className='px-3 pt-2'>
                <div className='ft-sz-10 ft-cl-gr'>Built Up Area</div>
                <div className="mb-0 d-flex align-items-center">
                  <div className='ft-sz-12 font-weight-bold mr-1'>4095 sq.ft.</div>
                  <div className='ft-sz-10 ft-cl-gr'>(650 sq.m)</div>
                </div>
                <span className='ft-sz-14 font-weight-bold'>₹ 3.08 CR</span>
                </div>
              </div>
            </div>

            <div className='fedhfmk d-flex'>
              <div className='fedLLC bc-rd-15 d-flex justify-content-center align-items-center mr-1'>
                <span className='px-3 py-1 ft-sz-11 font-weight-bold'>
                  Ready to Move In
                </span>
              </div>
              <div className='fedLLC bc-rd-15 d-flex justify-content-center align-items-center mr-1'>
                <span className='px-3 py-1 ft-sz-11 font-weight-bold'>
                  Newly Constructed
                </span>
              </div>
            </div>

            <hr />

            <div className='fedhfmk d-flex justify-content-end'>
              <button className='px-3 py-1 cbIlMb mr-2 bc-rd-15 ft-sz-13'>
                View Phone Number
              </button>
              <button className='px-3 py-1 sfzzZ bc-rd-15 ft-sz-13'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default PropViewCardPro;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .ft-cl-g2 {
    color: #383838;
  }
  .ft-cl-gr {
    color: #8b8686;
  }
  .ft-sz-15 {
    font-size: 15px;
  }
  .ft-sz-14 {
    font-size: 14px;
  }
  .ft-sz-13 {
    font-size: 13px;
  }
  .ft-sz-12 {
    font-size: 12px;
  }
  .ft-sz-11 {
    font-size: 11px;
  }
  .ft-sz-10 {
    font-size: 10px;
  }
  .ft-sz-9 {
    font-size: 9px;
  }
  .ft-sz-8 {
    font-size: 8px;
  }
  .bc-rd-15-top {
    border-radius: 15px 15px 0px 0px;
  }
  .bc-rd-23 {
    border-radius: 23px;
  }
  .bc-rd-15 {
    border-radius: 15px;
  }
  .mainFrame {
    width: 811px;
    height: auto;
    background: white;
    box-shadow: 0 0 30px 0 #0000001a;
    padding: 21px 23px 15px 23px;
  }
  .ftred {
    background: #f3c9c9;
    height: 21px;
  }
  .vrfied {
    background: #9eea83;
    width: max-content;
  }
  .fedLLC {
    background-color: #c9f3ee;
  }
  .imgLJR {
    height: auto;
    background: #8b8686;
    width: max-content;
  }
  .vrfied {
    height: 29px;
  }
  .contentsJm {
  }
  .imgeProp {
    width: 242px;
    height: 210px;
    background-color: #c9f3ee;
  }
  .bhClef {
    width: 100%;
    height: 35px;
    background: #c9f3ee;
  }
  .BhCle {
    width: 150px;
    height: auto;
    background: #f8f8f8;
  }
  .cbIlMb {
    background-color: #d9d9d9;
    color: white;
  }
  .sfzzZ {
    background-color: #56a1fa;
    color: white;
  }
  .fedhfmk {
    margin-top: 1rem;
  }
`;
