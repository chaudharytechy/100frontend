import React from 'react'
import { styled } from 'styled-components'

function Cities() {
  return (
    <Wrapper className="section ">
    <div className='pb-1 pt-1 dffasPL'>
    <p className='cnjMM text-center ft-sz-30' style={{fontWeight:"bold"}}>Top Locations In Gurugram</p>
      <div className="gdmJO d-flex justify-content-between p-3 text-center align-items-center">                                                  
          <div className="cvBMLN">
            <div className="asdDRsfVN bg-one">
               <p>Sohna Road</p>
            </div> 
          </div>
          <div className="cvBMLN">
            <div className="asdDRsfVN bg-two">
               <p>Golf Course</p>
            </div> 
          </div>
          <div className="cvBMLN">
            <div className="asdDRsfVN bg-three">
               <p>MG Road</p>
            </div> 
          </div>
          <div className="cvBMLN">
            <div className="asdDRsfVN bg-four">
               <p>Sikanderpur</p>
            </div> 
          </div>
      </div>
      </div>
    </Wrapper>
  )
}
export default Cities
const Wrapper=styled.section`
.dffasPL{
  border-radius:25px;
  background-color:#F1F1FE;
}
.cnjMM{
  margin-top:20px;
}
.bc-rd-23 {
  border-radius: 23px;
}
.bc-rd-15 {
  border-radius: 15px;
}
.ft-sz-15{
  font-size:15px;
}
.ft-sz-30{
  font-size:30px;
}
.ft-sz-25{
  font-size:25px;
}
.gdmJO{
    flex-wrap:wrap;
    max-width:1500px;
    margin-left: auto;
    margin-right: auto;
    justify-content:space-between;
}
.cvBMLN {
    width: 20%;
    margin: 20px;
    height: 300px;
    border: 3px solid #eee;
    overflow: hidden;
    position: relative;
    float: left;
    display: inline-block;
    cursor: pointer;
    border-radius:13px;
  }
  .asdDRsfVN {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    
  }
  .bg-one {
    background-image: url(../../OtherImages/sohnaRoad.jpg);
    background-position:center;
  }
  .bg-two {
    background-image: url(../../OtherImages/golfCourse.jpg);
  }
  .bg-three {
    background-image: url(../../OtherImages/mgRoad.jpg);
  }
  .bg-four{
    background-image: url(../../OtherImages/sikanderpur.jpg);
  }
  .bg-one:hover,.bg-two:hover,.bg-three:hover,.bg-four:hover{
    filter: grayscale(0.60);
  }
  .cvBMLN:hover .asdDRsfVN,
  .cvBMLN:focus .asdDRsfVN {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
  .cvBMLN p{
    position:absolute;
    bottom:0px;
    left:30%;
    right:30%;
    font-weight:bold;
    color:white;
    transition:0.5s;
  }
  .cvBMLN:hover p{
    bottom:35%;
  }
  @media screen and (max-width:900px){
    .cvBMLN {
      width: 280px;
    }
  }
`


