import React, { useState } from "react";
import { styled } from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { BsFillCameraFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function PropViewCard(elem) {
  const{photo,minCovered_Area,configuration,aboutProject,projectName,location,featured,price,_id,url} =elem;
  
  const fullText =aboutProject;
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
  const urlProject=projectName.toLowerCase().replaceAll(" ","-")
  const PropApi=`/${url}/`

  return (
    <Wrapper className='section'>
      <div className='mainFrame bc-rd-23 card'>
        <div className='contentsJm w-100 bc-rd-23 d-flex'>
          <div className='leftMcn'>
            <div className='imgeProp bc-rd-23' style={{backgroundImage:`url(${photo[0].url})`,backgroundSize:"cover"}}>
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
                    <span style={{ color: "white" }}> {photo.length}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className='textSb ml-3 mt-2'>
              <span className='font-weight-bold ft-sz-15'>Posted By : </span>
              <span className='ft-sz-14'>Admin</span>
            </div>
          </div>
          <div className='rightMcn pl-4 w-100 pr-3'>
            <div className='topSkn d-flex justify-content-between'>
              <div className='d-flex'>
              <Link to={PropApi}>
                <span className='mr-3 font-weight-bold ' style={{marginRight:"10px",color:"black"}}>
                  {projectName}
                </span>
                </Link>
                <div className='ftred bc-rd-23 d-flex justify-content-center align-items-center'>
                 {featured ==="true"? <span className='px-3 ft-sz-14 font-weight-bold'>
                 Featured
               </span> : null}
                  
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

            <div >
              <p className='skdjMdH ft-sz-15 ft-cl-gr'>
                {location}
              </p>
            </div>
            <div
              className='cmMidSec d-flex justify-content-between '
              style={{ width: "85%" }}>
              <div className='BhCl d-flex flex-column'>
                <span className='ft-sz-15 font-weight-bold'>₹ {price} CR</span>
                <span className='ft-sz-10 ft-cl-gr'>₹ 34,570/sq.ft</span>
              </div>
              <div className='BhCl d-flex flex-column'>
                <span className='ft-sz-15 font-weight-bold'>{minCovered_Area} Sq.ft</span>
                <span className='ft-sz-10 ft-cl-gr'>(54.47 sq.m)Plot Area</span>
              </div>
              <div className='BhCl d-flex flex-column'>
                <span className='ft-sz-15 font-weight-bold'>{configuration}</span>
                <span className='ft-sz-10 ft-cl-gr'>3 Baths</span>
              </div>
            </div>

            <div className='mt-4 cardText'>
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

            <div className='fedhfmk d-flex flex-wrap'>
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
              {/*<button className='px-3 py-1 cbIlMb mr-2 bc-rd-15 ft-sz-13'>
                View hone Number
                </button> */}
                <Link to={PropApi}>
                  <button className='px-3 py-1 sfzzZ bc-rd-15 ft-sz-13'>
                    View Property
                  </button>
              </Link>
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
  .cardText{
    max-width:480px;
  }
  .mainFrame {
    max-width: 900px;
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
    max-width: 282px;
    width:282px;
    height: 210px;
    background-color: #c9f3ee;
    background-position:center;
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
    border:none;
  }
  .font-weight-bold{
    font-weight:bold;
  }
  .pl-4{
    padding-left:.7rem !important;
  }
  .mr-1{
    margin-right:.25rem !important;
  }
  .mr-2{
    margin-right:.5rem !important;
  }
  .fedhfmk >button{
    border:none !important;
  }
  @media screen and (max-width: 500px) {
    .contentsJm{
      flex-direction:column;
    }
    .cmMidSec{
      flex-direction:column;
    }
    .ftred{
      display:none !important;
    }
  }
`;
