import React, { useState } from "react";
import { styled } from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { BsFillCameraFill } from "react-icons/bs";

function PropViewCard() {
  const fullText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet aliquam sapien, eu dignissim tortor facilisis vel. Fusce auctor tellus in hendrerit. Vivamus ut lectus purus.";

  let [showFullText, setShowFullText] = useState(false);
  let [displayText, setDisplayText] = useState(fullText.slice(0, 60));
  let [isBookmarked, setIsBookmarked] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
    setDisplayText(showFullText ? fullText.slice(0, 60) : fullText);
  };
  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

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
              <span className='font-weight-bold ft-sz-15'>Posted By : </span>
              <span className='ft-sz-14'>Rajesh Goyal</span>
            </div>
          </div>
          <div className='rightMcn pl-4 w-100 pr-3'>
            <div className='topSkn d-flex justify-content-between'>
              <div className='d-flex'>
                <span className='mr-3 font-weight-bold ft-sz-15'>
                  Home for Sale
                </span>
                <div className='ftred bc-rd-23 d-flex justify-content-center align-items-center'>
                  <span className='px-3 ft-sz-14 font-weight-bold'>
                    Featured
                  </span>
                </div>
              </div>
              <div>
                <i
                  className={`fa ${
                    isBookmarked ? "fa-bookmark" : "far fa-bookmark"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={handleBookmarkClick}></i>
              </div>
            </div>

            <div className='mt-2'>
              <p className='skdjMdH ft-sz-15 ft-cl-gr'>
                Golf Course Road, Sector 53, Gurgaon
              </p>
            </div>

            <div
              className='cmMidSec d-flex justify-content-between '
              style={{ width: "85%" }}>
              <div className='BhCl d-flex flex-column'>
                <span className='ft-sz-15 font-weight-bold'>₹ 1.3 CR</span>
                <span className='ft-sz-10 ft-cl-gr'>₹ 34,570/sq.ft</span>
              </div>
              <div className='BhCl d-flex flex-column'>
                <span className='ft-sz-15 font-weight-bold'>2057 Sq.ft</span>
                <span className='ft-sz-10 ft-cl-gr'>(54.47 sq.m)Plot Area</span>
              </div>
              <div className='BhCl d-flex flex-column'>
                <span className='ft-sz-15 font-weight-bold'>3 BHK</span>
                <span className='ft-sz-10 ft-cl-gr'>3 Baths</span>
              </div>
            </div>

            <div className='mt-4' style={{ width: "480px" }}>
              <p className='ft-sz-14'>
                {displayText}
                <span
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    marginLeft: "2px",
                  }}
                  onClick={toggleText}>
                  {showFullText ? "less" : "..more"}
                </span>
              </p>
            </div>

            <div className='fedhfmk d-flex'>
              <div className='fedLLC bc-rd-15 d-flex justify-content-center align-items-center mr-1'>
                <span className='px-3 py-1 ft-sz-12 font-weight-bold'>
                  Ready to Move In
                </span>
              </div>
              <div className='fedLLC bc-rd-15 d-flex justify-content-center align-items-center mr-1'>
                <span className='px-3 py-1 ft-sz-12 font-weight-bold'>
                  Resale
                </span>
              </div>
              <div className='fedLLC bc-rd-15 d-flex justify-content-center align-items-center mr-1'>
                <span className='px-3 py-1 ft-sz-12 font-weight-bold'>
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

export default PropViewCard;

const Wrapper = styled.section`
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
  .ft-sz-10 {
    font-size: 10px;
  }
  .bc-rd-23 {
    border-radius: 23px;
  }
  .bc-rd-15 {
    border-radius: 15px;
  }
  .mainFrame {
    width: 900px;
    height: auto;
    background: white;
    box-shadow: 0 0 10px 0 #0000001a;
    padding: 21px 23px 15px 23px;
    margin: 0px auto 20px auto;
  }
  .ftred {
    background: #f3c9c9;
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
    width: 282px;
    height: 210px;
    background-color: #c9f3ee;
  }
  .BhCl {
    width: fit-content;
  }
  .cbIlMb {
    background-color: #d9d9d9;
    color: white;
  }
  .sfzzZ {
    background-color: #56a1fa;
    color: white;
  }
`;
