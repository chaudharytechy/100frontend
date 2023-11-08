import React, { useState } from "react";
import { styled } from "styled-components";
import axios from "axios";

function FormHome() {
  const[isLoading,setIsLoading]=useState(false);

  const handleLoadingClose =()=>{setIsLoading(false)};
  const handleLoadingStart =()=>{setIsLoading(true)};

  const FORMURL="https://api.100acress.com/contact_Insert";

  const[formDataInquiry,setFormDataInquiry] = useState({
    name:"",
    mobile:"",
    email:"",
    message:"",
    status:"pending",
  })

  function handleMainForm(e){
    setFormDataInquiry({...formDataInquiry,[e.target.name]:e.target.value})
 }
 function submitFormData(e){
  handleLoadingStart();
  e.preventDefault();
  axios({
    method:"post",
    url:FORMURL,
    data:formDataInquiry,
  })
  .then(res=>{
    console.log(res.data.message)
    alert("Your Message has been sent!");
    handleLoadingClose();
  })
  .catch(err=>{
    console.log(err.response);
  })
}
  return (
    <Wrapper className='section'>
      <div className='formHomeStyle d-flex align-items-center'>
        <div className='cJd98IC'>
          <h4 style={{fontWeight:"600"}}>Let us find your Dream Property</h4>
          <p>Connect to Property Expert Now</p>
          <form onSubmit={submitFormData}>
            <div className='d-flex flex-wrap'>
              <input type='text' name='name' id='name' placeholder='Name*' required onChange={handleMainForm}/>
              <input type='tel' name='mobile' id='phone' placeholder='Phone*' required onChange={handleMainForm}
              onKeyPress={(e) => {
                if (e.target.value.length > 9) {
                  e.preventDefault();
                }
              }} />
              <input type='email' name='email' id='email' placeholder='Email' required onChange={handleMainForm}/>
              <input type="text" name="message" id="message" placeholder="Enter you query" required onChange={handleMainForm}/>
              <input type='submit' value={isLoading ? `Submitting` : "Submit"} />
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
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@media screen and (max-width:900px) and (min-width:501px){
    .cJd98IC{
        flex:0 0 50%;
    }
    .cJd98ID{
        flex:0 0 50%;
    }
}
@media screen and (max-width:500px){
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
