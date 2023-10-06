/** @format */

import React from "react";
import { styled } from "styled-components";

function FormHome() {
  return (
    <Wrapper className='section'>
      <div className='formHomeStyle d-flex align-items-center'>
        <div className='cJd98IC'>
          <h4 style={{fontWeight:"600"}}>Let us find your Dream Property</h4>
          <p>Connect to Property Expert Now</p>
          <form method='post'>
            <div className='d-flex flex-wrap'>
              <input type='text' name='name' id='name' placeholder='Name*' />
              <input type='tel' name='phone' id='phone' placeholder='Phone*' />
              <input type='email' name='email' id='email' placeholder='Email' />
              <select name='city' id='city' placeholder='Select City*'>
                <option value='default' selected disabled>
                  Select City*
                </option>
                <option value='Gurgaon'>Gurgaon</option>
                <option value='Sohna'>Sohna</option>
                <option value='Noida'>Noida</option>
                <option value='Bhuvneshwar'>Bhuvneshwar</option>
                <option value='Faridabad'>Faridabad</option>
                <option value='Indore'>Indore</option>
                <option value='Jaipur'>Jaipur</option>
                <option value='Others'>Others</option>
              </select>
              <input type='Submit' value='Submit' />
            </div>
          </form>
        </div>
        <div className='cJd98ID'>
          <img
            src='https://www.wework.com/ideas/wp-content/uploads/sites/4/2019/12/20190917_WeWork_Carrera11b-99-25_Colombia_007_v1-1120x630.jpg'
            alt=''
            className='w-100 h-100 br-rd-10'
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default FormHome;
const Wrapper = styled.section`
*{
    font-family: 'DM Sans',sans-serif !important;
}
.formHomeStyle{
    padding:60px 80px !important;
    background-color:#F1F1FE;;
    padding:20px 20px;
    border-radius:15px;
}
.br-rd-10{
    border-radius:10px;
}
.cJd98IC{
    flex:0 0 70%;
    max-width:70%;
}
.cJd98ID{
    flex:0 0 26%;
    width:280px;
    height:200px;
}
input,select{
    width:240px;
    height:42px;
    border-radius:10px; 
    border:1px solid grey;
    padding:5px 10px;
}
input,select{
    margin:10px 10px;
}
input[type="submit"]{
    text-align:center;
    background-color:red;
    color:white;
}
@media screen and (max-width:900px){
    .cJd98IC{
        flex:0 0 50%;
    }
    .cJd98ID{
        flex:0 0 50%;
    }
}
@media screen and (max-width:400px){
    .formHomeStyle{
        flex-direction:column;
        padding:10px !important;
    }
    .cJd98ID{
        display:none;
    }
    .formHomeStyle{
        margin:20px 20px;
    }
    .cJd98IC{
        max-width:100%;
    }
    input,select{
        width:100%; 
    }
}
`;
