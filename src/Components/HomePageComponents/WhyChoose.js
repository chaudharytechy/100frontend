import React from 'react'
import styled from 'styled-components';

function WhyChoose() {
  return (
    <Wrapper className="section">
    <div className='_jsjdMM'>
      <div className="d-flex flex-column align-items-center text-center">
        <img src="../Images/djfML.png" alt="" className='whyChooseImg'/>
        </div>
      <div className="_shj">
        <p className='titLL text-center'>Why Choose 100acress.com?</p>
        <p className='_lndc text-center'>100Acress is helping thousands find their Dream Home, Workspace & Everything in between.</p>
        <p className='_lndc text-center'>As we grow, we think of ourselves as creating a warm and welcoming Ecosystem where ,we all as a family choose the best for you.</p>
        <p className='_fndR text-center'>Rajesh Aggarwal, Founder</p>
        </div>
    </div>
    </Wrapper>
  )
}

export default WhyChoose;
const Wrapper=styled.section`
*{
  font-family: 'DM Sans', sans-serif;
}
.whyChooseImg{
  width: 30%;
  border-radius: 15px;
}
._jsjdMM{
  width: 100%;
  border-radius: 45px;   
  margin-bottom:50px;
}
.titLL,._lndc,._fndR{
  padding-right: 0px;
}
._hdiem{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
._lndc{
  font-size: large;
  font-weight: 300;
  margin-bottom:10px;
}
.titLL{
  font-size: x-large;
  margin-bottom: 10px;
  font-weight: bold;
  /* word-spacing: 2px; */
  letter-spacing: 1px;
}
._fndR{
  margin-top: 10px;
  color:red;
  font-size: large;
}
._shj{
  margin-top: 10px;
}
.NdkMM{
  font-size:15px;
}
@media screen and(max-width:400px){
  .whyChooseImg{
    width:70%;
  }
}
`