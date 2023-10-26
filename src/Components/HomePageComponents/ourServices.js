/** @format */

import React from "react";
import styled from "styled-components";

function OurServices() {
  return (
    <Wrapper className="section">
      <div className='container mt-1 mb-5'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='col max-mb-30 aos-init aos-animate' data-aos='fade-up'>
              {" "}
              <a
                href='#'
                className='icon-box text-center'
                data-bg-color='#fff'
                style={{backgroundColor: "rgb(255, 255, 255)"}}
                data-abc='true'>
                <div className='icon'>
                  {" "}
                  <img src='../../otherImages/consulting.jpg' width='240' height="220"/>{" "}
                </div>
                <div className='content'>
                  <h3 className='title fz-20'>
                    Real Estate Consulting
                  </h3>
                  <div className='desc'>
                    <p>
                      We Provide the best services to help you get your dream home as per your expectation.
                    </p>
                  </div>{" "}
                </div>
              </a>{" "}
            </div>
          </div>
          <div className='col-md-3'>
            <div className='col max-mb-30 aos-init aos-animate' data-aos='fade-up'>
              {" "}
              <a
                href='#'
                className='icon-box text-center'
                data-bg-color='#fff'
                style={{backgroundColor: "rgb(255, 255, 255)"}}
                data-abc='true'>
                <div className='icon'>
                  {" "}
                  <img
                    src='../../otherImages/lawyer.jpg'
                    width='220'
                    height="220"
                    alt=''
                  />{" "}
                </div>
                <div className='content'>
                  <h3 className='title fz-20'>
                    Legal Advice
                  </h3>
                  <div className='desc'>
                    <p>
                    The major issue is trustworthy legal assistance. We will help you through all the aspect. 
                    </p>
                  </div>{" "}
                  
                </div>
              </a>{" "}
            </div>
          </div>

          
          
          <div className='col-md-3'>
            <div className='col max-mb-30 aos-init aos-animate' data-aos='fade-up'>
              {" "}
              <a
                href='#'
                className='icon-box text-center'
                data-bg-color='#fff'
                style={{backgroundColor: "rgb(255, 255, 255)"}}
                data-abc='true'>
                <div className='icon'>
                  {" "}
                  <img
                    src='../../otherImages/salesService.jpg'
                    width='220'
                    height="220"
                    alt=''
                  />{" "}
                </div>
                <div className='content'>
                  <h3 className='title fz-20'>
                  Sales Services
                  </h3>
                  <div className='desc'>
                    <p>
                    We continuous work to provide your dream home with the best Sales Representatives.
                    </p>
                  </div>{" "}
                  
                </div>
              </a>{" "}
            </div>
          </div>
          <div className='col-md-3'>
            <div className='col max-mb-30 aos-init aos-animate' data-aos='fade-up'>
              {" "}
              <a
                href='#'
                className='icon-box text-center'
                data-bg-color='#fff'
                style={{backgroundColor: "rgb(255, 255, 255)"}}
                data-abc='true'>
                <div className='icon'>
                  {" "}
                  <img
                    src='../../otherImages/homeloan.jpg'
                    width='220'
                    height="220"
                    alt=''
                  />{" "}
                </div>
                <div className='content'>
                  <h3 className='title fz-20'>
                  Home Loans
                  </h3>
                  <div className='desc'>
                    <p>
                    We will help you to provide best home loan to complete your dream and guide you at each
steps.
                    </p>
                  </div>{" "}
                  
                </div>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default OurServices;

const Wrapper=styled.section`
body {
    background-color: #d6d2d2;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
}

.icon-box {
    position: relative;
    display: block;
    padding: 40px 20px 30px;
    -webkit-transition: all .25s cubic-bezier(.645, .045, .355, 1);
    -o-transition: all .25s cubic-bezier(.645, .045, .355, 1);
    transition: all .25s cubic-bezier(.645, .045, .355, 1);
    border-radius: 5px;
    z-index: 99;
    text-decoration: none
}

.col-md-4 {
    margin-top: 10px
}

.icon-box .icon {
    margin-bottom: 24px
}

.icon-box:hover {
    z-index: 1;
    background-color: #fff;
    -webkit-box-shadow: 0 0 40px rgba(51, 51, 51, .1);
    box-shadow: 0 0 40px rgba(51, 51, 51, .1);
  transform:translateY(-15px);
}

.icon-box .content .title.fz-20 {
    font-size: 20px
}

.icon-box .content .title {
    font-size: 24px;
    line-height: 1.5;
    margin: 0;
    color: #3f3a64
}

.icon-box .content .desc {
    margin-top: 10px
}

.icon-box .content .desc p {
    line-height: 1.6;
    color: #696969
}

p:last-child {
    margin-bottom: 0
}

.icon-box:hover .content .link {
    color: #20ad96
}

.icon-box .content .link {
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 34px;
    padding: 5px 0;
    color: #8c89a2
}

.icon-box .content .link i {
    font-size: 16px;
    line-height: 14px;
    margin-left: 14px
}
`;