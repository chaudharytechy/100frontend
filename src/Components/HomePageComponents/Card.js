import React from "react";
import { styled } from "styled-components";
import { MdLocationPin } from "react-icons/md";

function StarCard() {
  return (
    <Wrapper className="section">
    <div className='w9HDn0'>
      <div className='sQoIH w-100 h-auto'>
        <div className='xjNJ w-100'>
          <img
            src='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hZCUyMHRyaXB8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
            alt=''
            className="w-100 h-100"
          />
        </div>
        <div className='eoiU d-flex align-items-center'>
          <div className='dsfds43 d-flex align-items-center'>
            <div className='q2jam'>
              <MdLocationPin size={14} color='#0a9e88' />
            </div>
            <div style={{ fontWeight: "600", fontSize: "14px" }}>Delhi</div>
          </div>
        </div>
      </div>
      <div className='w238N'>
        <h2>M3M Urbana</h2>
        <p style={{margin:"0px"}}>
          Starting at <span>₹ 1.3 CR/-</span>
        </p>
      </div>
    </div>
    </Wrapper>
  );
}

export default StarCard;

const Wrapper=styled.section`
*{
  font-family: 'DM Sans', sans-serif;
}
.w9HDn0 {
    height: 280px;
    border-radius: 15px;
    margin-left:10px;
    margin-right:5px;
  }
  .sQoIH {
    margin-bottom:10px;
  }
  .xjNJ {
    height: 200px;
  }
  .xjNJ img {
    border-radius: 15px;
  }
  .dsfds43{
    padding:2px;
    color:#0a9e88;
  }
  .q2jam{
    padding:0px 7px;
  }
  .w238N h2{
    color:#3a3a3a;
    font-size:1.3vw;
    font-weight:600;
    padding-left:8px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    line-height:1;
  }
  .w238N p{
    font-size:1vw;
    font-weight:400;
    color:#3a3a3a;
    padding-left:8px;
    line-height:0;
  }
  .w238N p span{
    color:#3a3a3a;
    font-size:1.2vw;
    font-weight:600;
    padding-left:8px;
  }
  .w9HDn0:hover{
    cursor:pointer;
  }
  @media screen and (max-width:600px){
    .w238N h2{
      font-size:large;
    }
    .w238N p{
      font-size:medium;
    }
    .w238N p span{
      font-size:large;
    }
  }
`

// box-shadow: 0px 0px 30px 0px #0000001a;
