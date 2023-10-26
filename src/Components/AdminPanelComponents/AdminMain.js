import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import axios from "axios"
import Modal from 'react-bootstrap/Modal';
import { useProductContext } from "../../Context/productContext";
import PropertyCard from "./PropertyCard";

function AdminMain() {
  const {PreLaunchProperties,isPreLaunchLoading} = useProductContext();

  const[loggedIn,setLoggedIn] = useState(true);
  const [show, setShow] = useState(false);
  const[message,setMessage] = useState();
  const [selectedTab, setSelectedTab] = useState("infoelm");
  const [showForm, setShowForm] = useState(false);
  
  const Elem = [...PreLaunchProperties];
  
  function handleCheckedChange(e){
    if(e.target.checked){
      formData.amentites.push(e.target.value)
    }else{
      formData.amentites.pop(e.target.value);
    }
  }

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    const updatedFormData = { ...formData };

    if (name === "photo") {
      updatedFormData.photo = files[0];
    }
    if (name === "sitePlan") {
      updatedFormData.sitePlan = files[0];
    }
    if (name === "floorPlan") {
      updatedFormData.floorPlan = files[0];
    }
    if (name === "locationMap") {
      updatedFormData.locationMap = files[0];
    }

    setFormData(updatedFormData);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleElement = (tabId) => {
    setSelectedTab(tabId);
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  function HandleLog(){
    setLoggedIn(!loggedIn);
  }
  const URLREGISTER="https://www.100acress.com/register";
  const URLLOGIN="https://www.100acress.com/verify_Login"
  const URLFORM="https://www.100acress.com/preLaunch/insert"
  const URLGETALL="https://www.100acress.com/preLaunch/viewAll"
   
  
  const[formDataRegister,setFormDataRegister] = useState({
    name:"",
    email:"",
    mobile:"",
    password:"",
    cpassword:"",
  })
  
  const[formData,setFormData] = useState({
    projectName:"",
    price:"",
    city:"",
    configuration:"",
    status:"",
    featured:"",
    rera_No:"",
    minCovered_Area:"",
    maxCovered_Area:"",
    aboutProject:"",
    builderName:"",
    amentites:[],
    location:"",
    photo:null,
    sitePlan:null,
    floorPlan:null,
    locationMap:null,
  })
  function handleMainForm(e){
      setFormData({...formData,[e.target.name]:e.target.value})
  }

  const[formDataLogin,setFormDataLogin] = useState({
    email: "",
    password: "",
  })
  function handleLoginChange(e){
    setFormDataLogin({...formDataLogin,[e.target.name]:e.target.value})
    console.log(formDataLogin)
  }
  function handleChange(e){
    setFormDataRegister({...formDataRegister,[e.target.name]:e.target.value});
    console.log(formDataRegister)
  }
  function submitRegister(e){
    e.preventDefault();
    axios({
      method:"post",
      url:URLREGISTER,
      data:formDataRegister,
    })
    .then(res=>{
      console.log(res.data.message)
      setMessage(res.data.message)
      handleShow();
    })
    .catch(err=>{
      if(err.response.status === 500){
        setMessage("Password Does not Match!")
        handleShow();
      }else{
        setMessage("Something Went Wrong")
        handleShow();
      }
    })
  }

  function submitPostPropertyForm(e){
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    axios({
      method:"post",
      url:URLFORM,
      data:formDataToSend,
    })
    .then(res=>{
      console.log(res.data.message);
      setMessage(res.data.message);
      handleShow();
    })
    .catch(err=>{
      console.log(err.response.data.message);
      setMessage(err.response.data.message);
      handleShow();
      console.log(formData)
    })
  }

  function submitLogin(e){
    e.preventDefault();
    axios({
      method:"post",
      url:URLLOGIN,
      data:formDataLogin,
    })
    .then(res=>{
      console.log(res.data.message)
      handleShow();
      HandleLog();
    })
    .catch(err=>{
      console.log(err.name);
      HandleLog();
    })
  }
  if(isPreLaunchLoading){
    return <div>...Loading</div>
  }
  return (
    <Wrapper className='section'>
    <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{textAlign:"center"}}>{message}</Modal.Body>
      </Modal>
    {!loggedIn ? 
      <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"40px",marginBottom:"40px"}}>
      <div style={{display:"flex"}}>
        <div style={{width:"300px",padding:"30px"}}>
        <h3 style={{textAlign:"center "}}>LogIn</h3>
          <form >
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" required id="Gmail" onChange={handleLoginChange}/>
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" required id="lassword" onChange={handleLoginChange} />
            <br />
            <button type="submit" style={{border:"none",padding:"5px 20px"}}>Login</button>
          </form>
        </div>
        <div style={{width:"300px",padding:"30px"}}>
        <h3 style={{textAlign:"center "}}>SignUp</h3>
           <form>
           <div className="d-flex flex-wrap dddddd">
             <label htmlFor="name">Name</label>
             <input type="text" name="name" required id="name" onChange={handleChange}/>
             <label htmlFor="email">Email</label><br />
             <input type="email" name="email" required id="email" onChange={handleChange}/>
             <label htmlFor="mobile">Mobile Number</label>
             <input type="number" name="mobile" required id="mobile" onChange={handleChange}/>
             <label htmlFor="password">Password</label>
             <input type="password" name="password" required id="password" onChange={handleChange}/>
             <label htmlFor="cpassword">Confirm Password</label>
             <input type="password" name="cpassword" required id="cpassword" onChange={handleChange}/>
             
             <button type="submit" style={{border:"none",padding:"5px 20px"}}>Register</button>
             </div>
           </form>
        </div>
        </div>
      </div>
    :
      <div>
        <div className='mainSections d-flex w-100'>
          <div className='sideBarMain'>
            
            <div className='listDiv'>
              <div className='fmL mt-4'>
                <div
                  onClick={() => toggleElement("dashBoard")}
                  className={`listElm ${
                    selectedTab === "dashBoard" ? "active" : ""
                  }`}>
                  DashBoard
                </div>
                <div
                  onClick={() => toggleElement("propSection")}
                  className={`listElm ${
                    selectedTab === "propSection" ? "active" : ""
                  }`}>
                  Projects
                </div>
                <div
                  onClick={() => toggleElement("blogSection")}
                  className={`listElm ${
                    selectedTab === "blogSection" ? "active" : ""
                  }`}>
                  Blog
                </div>
                <div
                  className={`listElm ${
                    selectedTab === "logOut" ? "active" : ""
                  }`} onClick={HandleLog}>
                  Logout
                </div>
              </div>
            </div>
          </div>
          <div className='contentMain position-relative'>
            {selectedTab === "dashBoard" && (
              <div className='mainSed'>This is dashboard</div>
            )}
            {selectedTab === "propSection" && (
              <div>
                <div className='mainSed'>
                  <div className='d-flex w-100 justify-content-end'>
                    <button className='addBtn' onClick={toggleForm}>
                      Add New
                    </button>
                  </div>
                  <div className="sddnsj d-flex flex-wrap justify-content-between mt-4">
                  {Elem.map((elem)=>{
                    return(
                    <PropertyCard key={elem.id}{...elem} />
                    )
                  })}
                  </div>
                </div>
                {showForm && (
                  <div
                    style={{
                      zIndex: "999",
                      width: "100%",
                      position: "absolute",
                      top: "30px",
                    }}>
                    <div
                      style={{
                        width: "70%",
                        margin: "auto",
                        borderRadius: "10px",
                        position: "relative",
                        boxShadow: "0px 0px 30px #0000001a",
                        background:"white",
                      }}>
                      <div
                        className='position-absolute'
                        style={{ right: "10px", top: "5px", cursor: "pointer" }}
                        onClick={toggleForm}>
                        <RxCross1 size={20} />
                      </div>
                      <div className='headForm'>
                        <p
                          style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            textAlign: "center",
                          }}>
                          New Property Form
                        </p>
                      </div>
                      <div className="formS">
                        <form onSubmit={submitPostPropertyForm}>
                         <input type="text" placeholder="Project Name" name="projectName" onChange={handleMainForm}/>
                         <input type="text" placeholder="location" name="location" onChange={handleMainForm}/>
                         <input type="text" placeholder="Configuration (ex. 2bhk - 3bhk)" name="configuration" onChange={handleMainForm}/>
                         <input type="number" placeholder="Price" min={0} name="price" onChange={handleMainForm}/>
                         <div className="form_section">
                            <div>Status</div>
                            <div className="d-flex">
                            <input type="radio" id="underConstruction" value="underConstruction" className="form_prop" name="status" onChange={handleMainForm}/>
                            <label htmlFor="underConstruction" className="djwOPM">Under Construction</label>
                            <input type="radio" id="readyToMoveIn" value="readyToMoveIn" className="form_prop" name="status" onChange={handleMainForm}/>
                            <label htmlFor="readyToMoveIn" className="djwOPM">Ready to Move In</label>
                            <input type="radio" id="bookingOpen" value="bookingOpen" className="form_prop" name="status" onChange={handleMainForm}/>
                            <label htmlFor="bookingOpen" className="djwOPM">Booking Open</label>
                            <input type="radio" id="comingSoon" value="comingSoon" className="form_prop" name="status" onChange={handleMainForm}/>
                            <label htmlFor="comingSoon" className="djwOPM">Coming Soon</label>
                            </div>
                         </div>
                         <div className="form_section" style={{marginBottom:"10px"}}>
                            <div>Featured</div>
                            <div className="d-flex">
                            <input type="radio" id="true" value="true" className="form_prop" name="featured" onChange={handleMainForm}/>
                            <label htmlFor="true" className="djwOPM">Yes</label>
                            <input type="radio" id="false" value="false" className="form_prop" name="featured" onChange={handleMainForm}/>
                            <label htmlFor="false" className="djwOPM">No</label>
                            </div>
                         </div>
                         <input type="text" placeholder="Rera no" name="rera_No" onChange={handleMainForm}/>
                         <input type="number" placeholder="minCovered Area (sq.ft.)" min={0} name="minCovered_Area" onChange={handleMainForm}/>
                         <input type="number" placeholder="maxCovered Area (sq.ft.)" min={0} name="maxCovered_Area" onChange={handleMainForm}/>
                         <div style={{marginTop:"20px",marginBottom:"20px",fontWeight:"bold"}}>Write about the Project</div>
                         <textarea id="w3review" name="aboutProject" rows="5" cols="84" onChange={handleMainForm}/>
                         <div>
                         <div style={{marginTop:"10px",marginBottom:"10px",fontWeight:"bold"}}>Builder Select</div>
                         <select name="builderName" id="developers" className="selectBuilder" data-show-subtext="true" data-live-search="true" required onChange={handleMainForm}>
                         <option value="null" disabled selected>Choose the Developer</option>
                         <option value="adani">Adani</option>
                         <option value="ashiana">Ashiana</option>
                         <option value="aipl">Aipl</option>
                         <option value="amb">Amb</option>
                         <option value="ambience">Ambience</option>
                         <option value="ats">Ats</option>
                         <option value="Bestech">Bestech</option>
                         <option value="bptp">Bptp</option>
                         <option value="centralpark">Central Park</option>
                         <option value="conscient">Conscient</option>
                         <option value="dlf">DLF</option>
                         <option value="experion">Experion</option>
                         <option value="elaan">Elaan</option>
                         <option value="emaar">Emaar</option>
                         <option value="godrej">Godrej</option>
                         <option value="herohomes">Hero Homes</option>
                         <option value="krisumi">Krisumi</option>
                         <option value="m3m">M3M</option>
                         <option value="mahindra">Mahindra</option>
                         <option value="microtech">Microtech</option>
                         <option value="orris">Orris</option>
                         <option value="oxirich">Oxirich</option>
                         <option value="paras">Paras</option>
                         <option value="puri">Puri</option>
                         <option value="raheja">Raheja</option>
                         <option value="risland">Risland</option>
                         <option value="supertech">SuperTech</option>
                         <option value="spaze">Spaze</option>
                         <option value="shapoorji">Shapoorji Pallonji</option>
                         <option value="smartworld">Smart World</option>
                         <option value="sobha">Sobha</option>
                         <option value="tarc">Tarc</option>
                         <option value="tatahousing">Tata Housing</option>
                         <option value="vatika">Vatika</option>
                         <option value="whiteland">Whiteland</option>
                       </select>
                       
                         </div>
                         <div style={{marginTop:"10px",marginBottom:"10px",fontWeight:"bold"}}>Location</div>
                         <select name="city" id="developers" required onChange={handleMainForm}>
                         <option value="null" disabled selected>Choose the Location</option>
                         <option value="gurgaon">Gurgaon</option>
                         <option value="delhi">Delhi</option>
                         <option value="sector45">Sector 45</option>
                         <option value="tilakNagar">Tilak Nagar</option>
                         <option value="palamVihar">palam Vihar</option>
                         <option value="mgRoad">MG Road</option>
                         <option value="subhashChowk">Subhash Chowk</option>
                         <option value="rajeevChowk">Rajeev Chowk</option>
                       </select> 
                    
                         <div>
                         <div style={{marginTop:"20px",marginBottom:"20px",fontWeight:"bold"}}>Attach Some Photos</div>
                         <div>
                            <div style={{fontSize:"12px",marginTop:"10px"}}>( Site Image )</div>
                            <input type="file" name="sitePlan" accept="image/*" id="mainImage" onChange={handleImageChange}/>
                         </div>
                         <div>
                         <div style={{fontSize:"12px",marginTop:"10px"}}>( Main Images )</div>
                           <input type="file" name="photo" accept="image/*" id="mainImage" multiple required onChange={handleImageChange}/>
                          </div>
                           <div>
                            <div style={{fontSize:"12px",marginTop:"10px"}}>( Floor Image )</div>
                            <input type="file" name="floorPlan" accept="image/*" id="mainImage" required onChange={handleImageChange}/>
                           </div>
                           <div>
                            <div style={{fontSize:"12px",marginTop:"10px"}}>( Location Map )</div>
                            <input type="file" name="locationMap" accept="image/*" id="mainImage" required onChange={handleImageChange}/>
                           </div>
                           
                         </div>
                         <div className="amenitiesPage">
                         <div style={{marginTop:"20px",marginBottom:"20px",fontWeight:"bold"}}>Choose the Amenitites</div>
                           <div className="d-flex flex-wrap">
                            <input type="checkbox" name="amentites" id="airConditioner" className="form_prop" value="airConditioner" onChange={handleCheckedChange}/>
                            <label htmlFor="airConditioner" className="djwOPM">Air Conditioner</label>
                            <input type="checkbox" name="amentites" id="modularKitchen" className="form_prop" value="modularKitchen" onChange={handleCheckedChange}/>
                            <label htmlFor="modularKitchen" className="djwOPM">Modular Kitchen</label>
                            <input type="checkbox" name="amentites" id="terraceGarden" className="form_prop" value="terraceGarden" onChange={handleCheckedChange}/>
                            <label htmlFor="terraceGarden" className="djwOPM">Terrace Garden</label>
                            <input type="checkbox" name="amentites" id="wardrobes" className="form_prop" value="wardrobes" onChange={handleCheckedChange}/>
                            <label htmlFor="wardrobes" className="djwOPM">Wardrobes</label>
                            <input type="checkbox" name="amentites" id="golfCourse" className="form_prop" value="golfCourse" onChange={handleCheckedChange}/>
                            <label htmlFor="golfCourse" className="djwOPM">Golf Course</label>
                            <input type="checkbox" name="amentites" id="homeAutomation" className="form_prop" value="homeAutomation" onChange={handleCheckedChange}/>
                            <label htmlFor="homeAutomation" className="djwOPM">Home Automation</label>
                            <input type="checkbox" name="amentites" id="clubHouse" className="form_prop" value="clubHouse" onChange={handleCheckedChange}/>
                            <label htmlFor="clubHouse" className="djwOPM">Club House</label>
                            <input type="checkbox" name="amentites" id="miniTheatre" className="form_prop" value="miniTheatre" onChange={handleCheckedChange}/>
                            <label htmlFor="miniTheatre" className="djwOPM">Mini Theatre</label>
                            <input type="checkbox" name="amentites" id="tennis" className="form_prop" value="tennis" onChange={handleCheckedChange}/>
                            <label htmlFor="tennis" className="djwOPM">Tennis</label>
                            <input type="checkbox" name="amentites" id="cafeteria" className="form_prop" value="cafeteria" onChange={handleCheckedChange}/>
                            <label htmlFor="cafeteria" className="djwOPM">Cafeteria</label>
                            <input type="checkbox" name="amentites" id="bar" className="form_prop" value="bar" onChange={handleCheckedChange}/>
                            <label htmlFor="bar" className="djwOPM">Bar</label>
                            <input type="checkbox" name="amentites" id="parks" className="form_prop" value="parks" onChange={handleCheckedChange}/>
                            <label htmlFor="parks" className="djwOPM">Parks</label>
                            <input type="checkbox" name="amentites" id="tierSecurity" className="form_prop" value="tierSecurity" onChange={handleCheckedChange}/>
                            <label htmlFor="tierSecurity" className="djwOPM">4 Tier Security</label>
                            <input type="checkbox" name="amentites" id="atm" className="form_prop" value="atm" onChange={handleCheckedChange}/>
                            <label htmlFor="atm" className="djwOPM">Atm</label>
                            <input type="checkbox" name="amentites" id="wifi" className="form_prop" value="wifi" onChange={handleCheckedChange}/>
                            <label htmlFor="wifi" className="djwOPM">Wi-fi</label>
                            <input type="checkbox" name="amentites" id="gym" className="form_prop" value="gym" onChange={handleCheckedChange}/>
                            <label htmlFor="gym" className="djwOPM">Gym</label>
                            <input type="checkbox" name="amentites" id="joggingTrack" className="form_prop" value="joggingTrack" onChange={handleCheckedChange}/>
                            <label htmlFor="joggingTrack" className="djwOPM">Jogging Track</label>
                            <input type="checkbox" name="amentites" id="swimmingPool" className="form_prop" value="swimmingPool" onChange={handleCheckedChange}/>
                            <label htmlFor="swimmingPool" className="djwOPM">Swimming Pool</label>
                            <input type="checkbox" name="amentites" id="spa" className="form_prop" value="spa" onChange={handleCheckedChange}/>
                            <label htmlFor="spa" className="djwOPM">Spa</label>
                            <input type="checkbox" name="amentites" id="badminton" className="form_prop" value="badminton" onChange={handleCheckedChange}/>
                            <label htmlFor="badminton" className="djwOPM">Badminton</label>
                            <input type="checkbox" name="amentites" id="multiPurposeCourt" className="form_prop" value="multiPurposeCourt" onChange={handleCheckedChange}/>
                            <label htmlFor="multiPurposeCourt" className="djwOPM">Multipurpose Court</label>
                            <input type="checkbox" name="amentites" id="cricket" className="form_prop" value="cricket" onChange={handleCheckedChange}/>
                            <label htmlFor="cricket" className="djwOPM">Cricket</label>
                            <input type="checkbox" name="amentites" id="squashCourt" className="form_prop" value="squashCourt" onChange={handleCheckedChange}/>
                            <label htmlFor="squashCourt" className="djwOPM">Squash Court</label>
                            <input type="checkbox" name="amentites" id="bowlingAlley" className="form_prop" value="bowlingAlley" onChange={handleCheckedChange}/>
                            <label htmlFor="bowlingAlley" className="djwOPM">Bowling Alley</label>
                            <input type="checkbox" name="amentites" id="chess" className="form_prop" value="chess" onChange={handleCheckedChange}/>
                            <label htmlFor="chess" className="djwOPM">Chess</label>
                            <input type="checkbox" name="amentites" id="meditation" className="form_prop" value="meditation" onChange={handleCheckedChange}/>
                            <label htmlFor="meditation" className="djwOPM">Meditation</label>
                            <input type="checkbox" name="amentites" id="kidsPlayArea" className="form_prop" value="kidsPlayArea" onChange={handleCheckedChange}/>
                            <label htmlFor="kidsPlayArea" className="djwOPM">Kids Play Area</label>
                            <input type="checkbox" name="amentites" id="totLots" className="form_prop" value="totLots" onChange={handleCheckedChange}/>
                            <label htmlFor="totLots" className="djwOPM">Tot Lots</label>
                            <input type="checkbox" name="amentites" id="kidsPool" className="form_prop" value="kidsPool" onChange={handleCheckedChange}/>
                            <label htmlFor="kidsPool" className="djwOPM">Kids Pool</label>
                            <input type="checkbox" name="amentites" id="kidsTrack" className="form_prop" value="kidsTrack" onChange={handleCheckedChange}/>
                            <label htmlFor="kidsTrack" className="djwOPM">Kids Track</label>
                            <input type="checkbox" name="amentites" id="kindergarten" className="form_prop" value="kindergarten" onChange={handleCheckedChange}/>
                            <label htmlFor="kindergarten" className="djwOPM">Kindergarten</label>
                            <input type="checkbox" name="amentites" id="securityGuard" className="form_prop" value="securityGuard" onChange={handleCheckedChange}/>
                            <label htmlFor="securityGuard" className="djwOPM">Security Guard</label>
                            <input type="checkbox" name="amentites" id="intercom" className="form_prop" value="intercom" onChange={handleCheckedChange}/>
                            <label htmlFor="intercom" className="djwOPM">Intercom</label>
                            <input type="checkbox" name="amentites" id="videoDoorPhone" className="form_prop" value="videoDoorPhone" onChange={handleCheckedChange}/>
                            <label htmlFor="videoDoorPhone" className="djwOPM">Video Door Phone</label>
                            <input type="checkbox" name="amentites" id="cctv" className="form_prop" value="cctv" onChange={handleCheckedChange}/>
                            <label htmlFor="cctv" className="djwOPM">CCTV</label>
                            <input type="checkbox" name="amentites" id="fireExtinguisher" className="form_prop" value="fireExtinguisher" onChange={handleCheckedChange}/>
                            <label htmlFor="fireExtinguisher" className="djwOPM">Fire Extinguisher</label>
                            <input type="checkbox" name="amentites" id="trafficMarshall" className="form_prop" value="trafficMarshall" onChange={handleCheckedChange}/>
                            <label htmlFor="trafficMarshall" className="djwOPM">Traffic Marshall</label>
                            <input type="checkbox" name="amentites" id="snifferDog" className="form_prop" value="snifferDog" onChange={handleCheckedChange}/>
                            <label htmlFor="snifferDog" className="djwOPM">Sniffer Dog</label>
                            <input type="checkbox" name="amentites" id="bikePatrollingSquash" className="form_prop" value="bikePatrollingSquash" onChange={handleCheckedChange}/>
                            <label htmlFor="bikePatrollingSquash" className="djwOPM">Bike Patrolling Squash</label>
                            <input type="checkbox" name="amentites" id="powerBackup" className="form_prop" value="powerBackup" onChange={handleCheckedChange}/>
                            <label htmlFor="powerBackup" className="djwOPM">Power Backup</label>
                            <input type="checkbox" name="amentites" id="waterStorage" className="form_prop" value="waterStorage" onChange={handleCheckedChange}/>
                            <label htmlFor="waterStorage" className="djwOPM">Water Storage</label>
                            <input type="checkbox" name="amentites" id="vaastuCompliant" className="form_prop" value="vaastuCompliant" onChange={handleCheckedChange}/>
                            <label htmlFor="vaastuCompliant" className="djwOPM">Vaastu Compliant</label>
                            <input type="checkbox" name="amentites" id="groceryStore" className="form_prop" value="groceryStore" onChange={handleCheckedChange}/>
                            <label htmlFor="groceryStore" className="djwOPM">Grocery Store</label>
                            <input type="checkbox" name="amentites" id="highSpeedLift" className="form_prop" value="highSpeedLift" onChange={handleCheckedChange}/>
                            <label htmlFor="highSpeedLift" className="djwOPM">High-Speed Lift</label>
                            <input type="checkbox" name="amentites" id="pipedGasSupply" className="form_prop" value="pipedGasSupply" onChange={handleCheckedChange}/>
                            <label htmlFor="pipedGasSupply" className="djwOPM">Piped Gas Supply</label>

                           </div>
                         </div>

                         <div className="specification">
                         <div style={{marginTop:"20px",marginBottom:"20px",fontWeight:"bold"}}>Write about the Specifications</div>
                            <div>
                                <input type="text" placeholder="livingroom" />
                            </div>
                            <div>
                                <input type="text" placeholder="bedroom" />
                            </div>
                            <div>
                                <input type="text" placeholder="kitchen" />
                            </div>
                            <div>
                                <input type="text" placeholder="bathroom" />
                            </div>
                            <div>
                                <input type="text" placeholder="balcony" />
                            </div>
                         </div>


                         <button type="submit" style={{marginTop:"10px",margin:"2% 45%",border:"none",background:"orange",padding:"5px 10px",borderRadius:"10px"}} >Submit</button>
                         </form>
                        </div>
                      <div></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {selectedTab === "blogSection" && (
              <div className='mainSed'>Blog Section</div>
            )}
          </div>
        </div>
      </div>
            }
    </Wrapper>
  );
}

export default AdminMain;
const Wrapper = styled.section`
.dddddd input{
  width:100%;
}
  .daKWAU section{
    display:none;
  }
  .fmvbIt{
    display:none;
  }
  .sideBarMain {
    flex: 0 0 20%;
    background: red;
    height:100vh;
  }
  .contentMain {
    flex: 0 0 80%;
  }
  .fmL > .listElm {
    color: white;
    font-size: large;
    padding: 20px;
    cursor: pointer;
  }
  .active {
    color: red !important;
    background: white;
    border-radius: 10px 0px 0px 10px;
  }
  .mainSed {
    margin: 30px;
  }
  .addBtn {
    padding: 10px;
    border-radius: 8px;
    font-weight: 500;
    background: #3a833a;
    border: none;
    color: white;
  }
  .addBtn:active {
    transform: scale(0.99);
  }
  .out-line {
    border: none;
    padding-left: 10px;
    padding-right: 10px;
  }
  .proPElmFlex {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    font-size: 17px;
  }
  .listElm:hover {
    background: white;
    border-radius: 10px 0px 0px 10px;
    color: red !important;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    display: none;
  }
  .formS{
    margin:2rem;
  }
  input[type="text"],
  input[type="phone"],
  input[type="email"],
  input[type="date"],
  input[type="number"],
  input[type="password"] {
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    outline: none;
    overflow: visible;
    margin-bottom:10px;
  }
  input:focus {
    border-color: #5122d9;
    box-shadow: 0px 0px 4px #5122d9;
    tranform: scale(1.2);
  }
  .form_prop:checked + label {
    color: #e5652e;
    border-color: #e5652e;
    background: rgba(255, 99, 71, 0.2);
  }
  input[type="radio"],
  input[type="checkbox"]{
    visibility:hidden;
  }
  .djwOPM {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    background: #fff;
    color: #a7a7a7;
    border: 1px solid #a7a7a7;
    padding: 5px 10px;
    border-radius: 6px;
    user-select: none;
    width: fit-content;
    margin-bottom:10px;
  }
  .bhkAvailable{
    width:40%;
    padding:20px 10px;
    box-shadow:0px 0px 30px #0000001a;
    border-radius:15px;
    margin-top:1.5rem;
    min-width:330px;
  }
  .ffgPCLMV{
    justify-content:space-between;
  }
  .selectBuilder>option{
    height:50px;
  }
`;
