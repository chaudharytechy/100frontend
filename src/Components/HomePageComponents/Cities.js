import React from 'react'
import { styled } from 'styled-components'

function Cities() {
  return (
    <Wrapper className="section ">
    <div className='pb-1 pt-1 dffasPL'>
    <p className='cnjMM text-center font-weight-bold ft-sz-30'>Top Locations In India</p>
      <div className="gdmJO d-flex justify-content-between p-3 text-center align-items-center">                                                  
          <div className="cvBMLN">
            <div className="asdDRsfVN bg-one">
               <p>Sohna Road</p>
            </div> 
          </div>
          <div className="cvBMLN">
            <div className="asdDRsfVN bg-two">
               <p>Sohna Road</p>
            </div> 
          </div>
          <div className="cvBMLN">
            <div className="asdDRsfVN bg-three">
               <p>Sohna Road</p>
            </div> 
          </div>
          <div className="cvBMLN">
            <div className="asdDRsfVN bg-four">
               <p>Sohna Road</p>
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
    background-image: url(http://w3docs.com/uploads/media/default/0001/03/66cf5094908491e69d8187bcf934050a4800b37f.jpeg);
  }
  .bg-two {
    background-image: url(https://w3docs.com/uploads/media/default/0001/03/5bfad15a7fd24d448a48605baf52655a5bbe5a71.jpeg);
  }
  .bg-three {
    background-image: url(https://th.bing.com/th/id/R.2241d711cdb059bebf739293c80008e2?rik=t8wgewm3xeg0%2fA&riu=http%3a%2f%2fwww.onlyinyourstate.in%2fwp-content%2fuploads%2f2018%2f02%2fPlaces-to-Visit-in-Gurgaon.jpg&ehk=xJg%2feJunoL%2fAK%2bjRTGe34rA08yEvXExNnH29fg1DBLs%3d&risl=&pid=ImgRaw&r=0);
  }
  .bg-four{
    background-image: url(https://taxibazaar.in/assets/images/routes/gurgaon.jpg);
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


