import React from "react";
import styled from "styled-components";

function AboutPage() {
  return (
    <Wrapper className='section'>
    <div className="topSection">
    <div class="about-section">
    <div class="container">
        <div class="row clearfix">
            
            <div class="content-column col-md-6 col-sm-12 col-xs-12">
                <div class="inner-column">
                    <div class="sec-title">
                        <div class="title">About Us</div>
                        <h2>We Are The Leader In <br /> The Interiores</h2>
                    </div>
                    <div class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
                    <div class="email">Request Quote: <span class="theme_color">100acress@gmail.com</span></div>
                    <a href="about.html" class="theme-btn btn-style-three">Read More</a>
                </div>
            </div>
            
            
            <div class="image-column col-md-6 col-sm-12 col-xs-12">
                <div class="inner-column " data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div class="image">
                        <img src="https://i.ibb.co/vQbkKj7/about.jpg" alt="" />
                        <div class="overlay-box">
                            <div class="year-box"><span class="number">5</span>Years <br /> Experience <br /> Working</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
    </div>
    <div className="mdleSection">
    <div class="about-section">
    <div class="container">
        <div class="row">                
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div class="inner-column">
                    <div class="sec-title">
                        <span class="title">About Company</span>
                        <h2>We are leader in <br />Industrial market Since 1992</h2>
                    </div>
                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.</div>
                    <div class="btn-box">
                    <a href="about.html" class="theme-btn btn-style-three">Contact Us</a>
                    </div>
                </div>
            </div>

            <div class="image-column col-lg-6 col-md-12 col-sm-12">
                <div class="inner-column wow fadeInLeft">
                    <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images"><img src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="" /></a></figure>
                    
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    <div style={{textAlign:"center",fontSize:"2rem",fontWeight:"600"}}>Timeline</div>
      <div className='timeline'>
      
        <ul class='timeline'>
          <li>
            <div class='direction-r'>
              <div class='flag-wrapper'>
                <span class='flag'>100acress.com</span>
                <span class='time-wrapper'>
                  <span class='time'>2013 - present</span>
                </span>
              </div>
              <div class='desc'>
                100 acress was founded by Rajesh Aggarwal
              </div>
            </div>
          </li>

          <li>
            <div class='direction-l'>
              <div class='flag-wrapper'>
                <span class='flag'>Apple Inc.</span>
                <span class='time-wrapper'>
                  <span class='time'>2011 - 2013</span>
                </span>
              </div>
              <div class='desc'>
                Apple was first company to sponser us
              </div>
            </div>
          </li>

          
          <li>
            <div class='direction-r'>
              <div class='flag-wrapper'>
                <span class='flag'>Harvard University</span>
                <span class='time-wrapper'>
                  <span class='time'>2008 - 2011</span>
                </span>
              </div>
              <div class='desc'>
                Harvard University kya h aur kyun h
              </div>
            </div>
          </li>
          <li>
            <div class='direction-l'>
              <div class='flag-wrapper'>
                <span class='flag'>Apple Inc.</span>
                <span class='time-wrapper'>
                  <span class='time'>2011 - 2013</span>
                </span>
              </div>
              <div class='desc'>
                Bharat Mata ki Jai
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default AboutPage;
const Wrapper = styled.section`
.about-section{
	position:relative;
	padding:50px 0px;
}

.about-section .content-column{
	position:relative;
	margin-bottom:40px;
}

.about-section .content-column .inner-column{
	position:relative;
	padding-top:50px;
	padding-right:100px;
}

.about-section .content-column .text{
	position:relative;
	color:#777777;
	font-size:15px;
	line-height:2em;
	margin-bottom:40px;
}

.about-section .content-column .email{
	position:relative;
	color:#252525;
	font-weight:700;
	margin-bottom:50px;
}

.about-section .image-column{
	position:relative;
	margin-bottom:50px;
}

.about-section .image-column .inner-column{
	position:relative;
	padding:40px 40px 0px 0px;
	margin-left:50px;
}

.about-section .image-column .inner-column:after{
	position:absolute;
	content:'';
	right:0px;
	top:0px;
	left:40px;
	bottom:100px;
	z-index:-1;
	border:2px solid red;
}

.about-section .image-column .inner-column .image{
	position:relative;
}

.about-section .image-column .inner-column .image:before{
	position:absolute;
	content:'';
	left:-50px;
	bottom:-50px;
	width:299px;
	height:299px;
	background:url(img/pattern-2.png) no-repeat;
}

.about-section .image-column .inner-column .image img{
	position:relative;
	width:100%;
	display:block;
}

.about-section .image-column .inner-column .image .overlay-box{
	position:absolute;
	left:40px;
	bottom:48px;
}

.about-section .image-column .inner-column .image .overlay-box .year-box{
	position:relative;
	color:#252525;
	font-size:24px;
	font-weight:700;
	line-height:1.4em;
	padding-left:125px;
}

.about-section .image-column .inner-column .image .overlay-box .year-box .number{
	position:absolute;
	left:0px;
	top:0px;
	width:110px;
	height:110px;
	color:red;
	font-size:68px;
	font-weight:700;
	line-height:105px;
	text-align:center;
	background-color:#ffffff;
	border:1px solid #000000;
}
.about-section .btn-style-three:before {
    position: absolute;
    content: '';
    left: 10px;
    top: 10px;
    z-index: -1;
    right: -10px;
    bottom: -10px;
    background: url(https://i.ibb.co/DKn55Qz/pattern-1.jpg) repeat;
}
.about-section .btn-style-three:hover {
    color: #ffffff;
    background: red;
}
.about-section .btn-style-three {
    position: relative;
    line-height: 24px;
    color: #252525;
    font-size: 15px;
    font-weight: 700;
    background: none;
    display: inline-block;
    padding: 11px 40px;
    background-color: #ffffff;
    text-transform: capitalize;
    border: 2px solid red;
}
.sec-title2{
	color:#fff;
}
.sec-title {
    position: relative;
    padding-bottom: 40px;
}
.sec-title .title {
    position: relative;
    color: red;
    font-size: 18px;
    font-weight: 700;
    padding-right: 50px;
    margin-bottom: 15px;
    display: inline-block;
    text-transform: capitalize;
}
.sec-title .title:before {
    position: absolute;
    content: '';
    right: 0px;
    bottom: 7px;
    width: 40px;
    height: 1px;
    background-color: #bbbbbb;
}
  
  .timeline {
    position: relative;
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 1em 0;
    list-style-type: none;
  }
  
  .timeline:before {
    position: absolute;
    left: 50%;
    top: 0;
    content: ' ';
    display: block;
    width: 6px;
    height: 100%;
    margin-left: -3px;
    background: rgb(80,80,80);
    background: -moz-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));
    background: -webkit-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
    background: -o-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
    background: -ms-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
    background: linear-gradient(to bottom, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
    z-index: 5;
  }
  
  .timeline li {
    padding: 1em 0;
  }
  
  .timeline li:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  
  .direction-l {
    position: relative;
    width: 300px;
    float: left;
    text-align: right;
  }
  
  .direction-r {
    position: relative;
    width: 300px;
    float: right;
  }
  
  .flag-wrapper {
    position: relative;
    display: inline-block;
    
    text-align: center;
  }
  
  .flag {
    position: relative;
    display: inline;
    background: rgb(248,248,248);
    padding: 6px 10px;
    border-radius: 5px;
    
    font-weight: 600;
    text-align: left;
  }
  
  .direction-l .flag {
    -webkit-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
    -moz-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
    box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  }
  
  .direction-r .flag {
    -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
    -moz-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
    box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  }
  
  .direction-l .flag:before,
  .direction-r .flag:before {
    position: absolute;
    top: 50%;
    right: -36px;
    content: ' ';
    display: block;
    width: 12px;
    height: 12px;
    margin-top: -10px;
    background: #fff;
    border-radius: 10px;
    border: 4px solid rgb(255,80,80);
    z-index: 10;
  }
  
  .direction-r .flag:before {
    left: -36px;
  }
  
  .direction-l .flag:after {
    content: "";
    position: absolute;
    left: 100%;
    top: 50%;
    height: 0;
    width: 0;
    margin-top: -8px;
    border: solid transparent;
    border-left-color: rgb(248,248,248);
    border-width: 8px;
    pointer-events: none;
  }
  
  .direction-r .flag:after {
    content: "";
    position: absolute;
    right: 100%;
    top: 50%;
    height: 0;
    width: 0;
    margin-top: -8px;
    border: solid transparent;
    border-right-color: rgb(248,248,248);
    border-width: 8px;
    pointer-events: none;
  }
  
  .time-wrapper {
    display: inline;
    
    line-height: 1em;
    font-size: 0.66666em;
    color: rgb(250,80,80);
    vertical-align: middle;
  }
  
  .direction-l .time-wrapper {
    float: left;
  }
  
  .direction-r .time-wrapper {
    float: right;
  }
  
  .time {
    display: inline-block;
    padding: 4px 6px;
    background: rgb(248,248,248);
  }
  
  .desc {
    margin: 1em 0.75em 0 0;
    
    font-size: 0.77777em;
    font-style: italic;
    line-height: 1.5em;
  }
  
  .direction-r .desc {
    margin: 1em 0 0 0.75em;
  }
  
  
  @media screen and (max-width: 660px) {
  
  .timeline {
       width: 100%;
      padding: 4em 0 1em 0;
  }
  
  .timeline li {
      padding: 2em 0;
  }
  
  .direction-l,
  .direction-r {
      float: none;
      width: 100%;
  
      text-align: center;
  }
  
  .flag-wrapper {
      text-align: center;
  }
  
  .flag {
      background: rgb(255,255,255);
      z-index: 15;
  }
  
  .direction-l .flag:before,
  .direction-r .flag:before {
    position: absolute;
    top: -30px;
      left: 52%;
      content: ' ';
      display: block;
      width: 12px;
      height: 12px;
      margin-left: -9px;
      background: #fff;
      border-radius: 10px;
      border: 4px solid rgb(255,80,80);
      z-index: 10;
  }
  
  .direction-l .flag:after,
  .direction-r .flag:after {
      content: "";
      position: absolute;
      left: 50%;
      top: -8px;
      height: 0;
      width: 0;
      margin-left: -8px;
      border: solid transparent;
      border-bottom-color: rgb(255,255,255);
      border-width: 8px;
      pointer-events: none;
  }
  
  .time-wrapper {
      display: block;
      position: relative;
      margin: 4px 0 0 0;
      z-index: 14;
  }
  
  .direction-l .time-wrapper {
      float: none;
  }
  
  .direction-r .time-wrapper {
      float: none;
  }
  
  .desc {
      position: relative;
      margin: 1em 0 0 0;
      padding: 1em;
      background: rgb(245,245,245);
      -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
      -moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
      box-shadow: 0 0 1px rgba(0,0,0,0.20);
      
    z-index: 15;
  }
  
  .direction-l .desc,
  .direction-r .desc {
      position: relative;
      margin: 1em 1em 0 1em;
      padding: 1em;
      
    z-index: 15;
  }
  
  }
  
  @media screen and (min-width: 400px ?? max-width: 660px) {
  
  .direction-l .desc,
  .direction-r .desc {
      margin: 1em 4em 0 4em;
  }
  
  }
`;
