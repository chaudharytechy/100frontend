import React from 'react'
import { styled } from 'styled-components'
import Image from "../../Images/etpb4z-kjnhxk-3t59vo.jpg"

function Carddev() {
  return (
    <Wrapper className="section">
    <div className='FkKMMM'>
      <div className="imGd">
      <img src={Image} alt="Building Image" className='bHN'/>
      </div>
      <div className="ffmj">
        <h3>Tarc Project</h3>
        <p className='dfg dhbM'>2, 4, 6 BHK</p>
        <span className='dfg djnNN'>Golf Course sector 32, Gurgaon</span>
      </div>
      </div>
    </Wrapper>
  )
}

export default Carddev

const Wrapper=styled.section`
.FkKMMM{
  width:250px;
  cursor:pointer;
}
.imGd{
    width:214px;
    height:241px;
}
.ffmj>h3{
  font-size:18px;
  font-weight:700;
  margin-bottom:9px;
  margin-top:10px;
}
.ffmj{
  padding:5px;
}
.bHN{
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:20px;
}
.dLM{
  font-size:large;
  margin-bottom:0px;
}
.dfg{
  margin:0px;
  font-size:13px;
}
.djnNN{
  margin-top:8px;
}
.dhbM{
  font-weight:600;
}
`
