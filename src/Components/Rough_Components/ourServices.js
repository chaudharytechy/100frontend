/** @format */

import React from "react";
import styled from "styled-components";

function OurServices() {
  return (
    <Wrapper className="section">
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-4'>
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
                  <img src='https://i.imgur.com/CBU1h2t.png' width='240' />{" "}
                </div>
                <div className='content'>
                  <h3 className='title fz-20'>
                    Ecommerce solutions for your preferences
                  </h3>
                  <div className='desc'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut.
                    </p>
                  </div>{" "}
                </div>
              </a>{" "}
            </div>
          </div>
          <div className='col-md-4'>
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
                    src='https://i.imgur.com/Ckggrwe.png'
                    width='220'
                    alt=''
                  />{" "}
                </div>
                <div className='content'>
                  <h3 className='title fz-20'>
                    On-Site Content SEO with account management
                  </h3>
                  <div className='desc'>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>{" "}
                  
                </div>
              </a>{" "}
            </div>
          </div>
          
          <div className='col-md-4'>
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
                    src='https://i.imgur.com/IUlCVE2.png'
                    width='220'
                    alt=''
                  />{" "}
                </div>
                <div className='content'>
                  <h3 className='title fz-20'>
                    Ecommerce marketing with facebook ads
                  </h3>
                  <div className='desc'>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit.
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