import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "../../Context/productContext";
import { InfinitySpin } from "react-loader-spinner";
import axios from "axios";

function EditableProperty() {
  const { singleProperty, isSingleLoading, getSingleProduct } =
    useProductContext();
  const { url } = useParams();

  const API = "https://api.100acress.com/preLaunch/view";

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

  const [formData, setFormData] = useState({
    projectName: "",
    price: "",
    city: "",
    configuration: "",
    status: "",
    featured: "",
    rera_No: "",
    minCovered_Area: "",
    maxCovered_Area: "",
    aboutProject: "",
    builderName: "",
    amentites: [],
    location: "",
    photo: null,
    sitePlan: null,
    floorPlan: null,
    locationMap: null,
    url: "",
    Aboutdeveloper: "",
    meta_title: "",
    meta_description: "",
  });

  useEffect(() => {
    if (singleProperty) {
      const { amentites } = singleProperty;
      const FinalAmenities = amentites ? amentites[0].split(",") : [];
      setFormData((prevData) => ({
        ...prevData,
        projectName: singleProperty.projectName,
        price: singleProperty.price,
        city: singleProperty.city,
        configuration: singleProperty.configuration,
        status: singleProperty.status,
        featured: singleProperty.featured,
        rera_No: singleProperty.rera_No,
        minCovered_Area: singleProperty.minCovered_Area,
        maxCovered_Area: singleProperty.maxCovered_Area,
        aboutProject: singleProperty.aboutProject,
        builderName: singleProperty.builderName,
        amentites: FinalAmenities,
        location: singleProperty.location,
        photo: singleProperty?.photo,
        sitePlan: singleProperty?.sitePlan,
        floorPlan: singleProperty?.floorPlan,
        locationMap: singleProperty?.locationMap,
        url: singleProperty.url,
        Aboutdeveloper: singleProperty?.Aboutdeveloper,
        meta_title: singleProperty?.meta_title,
        meta_description: singleProperty?.meta_description,
      }));
    }
  }, [singleProperty]);

  function handleMainForm(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    getSingleProduct(`${API}/${url}`);
  }, []);

  const {_id} = singleProperty

  const UPDATEAPI =`https://api.100acress.com/preLaunch/update/${_id}`

  function submitPostPropertyForm(e) {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    axios({
      method: "post",
      url: UPDATEAPI,
      data: formDataToSend,
    })
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }

  function handleCheckedChange(e) {
    if (e.target.checked) {
      formData.amentites.push(e.target.value);
    } else {
      formData.amentites.pop(e.target.value);
    }
  }
  
 
  const UrlAdmin = "/protected/private/admin";
  return (
    <Wrapper className='div'>
    {isSingleLoading ? (
      <div style={{ margin: "30vh 30vw 30vh 43vw" }}>
        {" "}
        <InfinitySpin width='500' color='red' />{" "}
      </div>
    ) : (
      <div className='formS'>
        <div
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "25px",
            paddingBottom: "10px",
            borderBottom: "1px solid grey",
          }}>
          Edit Project
        </div>
        <form onSubmit={submitPostPropertyForm}>
          <input
            type='text'
            placeholder='Project Name'
            name='projectName'
            required
            value={formData.projectName}
            onChange={handleMainForm}
            style={{ marginTop: "1rem" }}
          />
          <input
            type='text'
            placeholder='location'
            name='location'
            required
            value={formData.location}
            onChange={handleMainForm}
          />
          <input
            type='text'
            placeholder='Configuration (ex. 2bhk - 3bhk)'
            required
            name='configuration'
            value={formData.configuration}
            onChange={handleMainForm}
          />
          <input
            type='text'
            placeholder='Price (Cr)'
            min={0}
            name='price'
            required
            value={formData.price}
            onChange={handleMainForm}
          />
          <input
            type='text'
            placeholder='Url link (for address bar) (Eg: xyz-xyz-xyz)'
            name='url'
            required
            value={formData.url}
            onChange={handleMainForm}
          />

          <div className='form_section'>
            <div>Status</div>
            <div className='d-flex'>
              <input
                type='radio'
                id='underConstruction'
                value='underConstruction'
                className='form_prop'
                name='status'
                checked={formData.status === 'underConstruction'}
                onChange={handleMainForm}
              />
              <label htmlFor='underConstruction' className='djwOPM'>
                Under Construction
              </label>
              <input
                type='radio'
                id='readyToMoveIn'
                value='readyToMoveIn'
                className='form_prop'
                name='status'
                checked={formData.status === 'readyToMoveIn'}
                onChange={handleMainForm}
              />
              <label htmlFor='readyToMoveIn' className='djwOPM'>
                Ready to Move In
              </label>
              <input
                type='radio'
                id='bookingOpen'
                value='bookingOpen'
                className='form_prop'
                name='status'
                checked={formData.status === 'bookingOpen'}
                onChange={handleMainForm}
              />
              <label htmlFor='bookingOpen' className='djwOPM'>
                Booking Open
              </label>
              <input
                type='radio'
                id='comingSoon'
                value='comingSoon'
                className='form_prop'
                name='status'
                checked={formData.status === 'comingSoon'}
                onChange={handleMainForm}
              />
              <label htmlFor='comingSoon' className='djwOPM'>
                Coming Soon
              </label>
            </div>
          </div>
          <div className='form_section' style={{ marginBottom: "10px" }}>
            <div>Featured</div>
            <div className='d-flex'>
              <input
                type='radio'
                id='true'
                value='true'
                className='form_prop'
                name='featured'
                checked={formData.featured === 'true'}
                onChange={handleMainForm}
              />
              <label htmlFor='true' className='djwOPM'>
                Trending Project
              </label>
              <input
                type='radio'
                id='false'
                value='false'
                className='form_prop'
                name='featured'
                checked={formData.featured === 'false'}
                onChange={handleMainForm}
              />
              <label htmlFor='false' className='djwOPM'>
                Similar Project
              </label>
              <input
                type='radio'
                id='featured'
                value='featured'
                className='form_prop'
                name='featured'
                checked={formData.featured === 'featured'}
                onChange={handleMainForm}
              />
              <label htmlFor='featured' className='djwOPM'>
                Featured
              </label>
              <input
                type='radio'
                id='asUsual'
                value='asUsual'
                className='form_prop'
                name='featured'
                checked={formData.featured === 'asUsual'}
                onChange={handleMainForm}
              />
              <label htmlFor='asUsual' className='djwOPM'>
                As Usual
              </label>
            </div>
          </div>
          <input
            type='text'
            placeholder='Rera no'
            name='rera_No'
            required
            value={formData.rera_No}
            onChange={handleMainForm}
          />
          <input
            type='number'
            placeholder='minCovered Area (sq.ft.)'
            min={0}
            name='minCovered_Area'
            required
            value={formData.minCovered_Area}
            onChange={handleMainForm}
          />
          <input
            type='number'
            placeholder='maxCovered Area (sq.ft.)'
            min={0}
            name='maxCovered_Area'
            required
            value={formData.maxCovered_Area}
            onChange={handleMainForm}
          />
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}>
            Write about the Project
          </div>
          <textarea
            id='w3review'
            name='aboutProject'
            rows='5'
            cols='84'
            required
            value={formData.aboutProject}
            onChange={handleMainForm}
          />
          <div>
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}>
              Builder Select
            </div>
            <select
              name='builderName'
              id='developers'
              className='selectBuilder'
              data-show-subtext='true'
              data-live-search='true'
              required
              value={formData.builderName}
              onChange={handleMainForm}>
              <option value='null' disabled required selected>
                Choose the Developer
              </option>
              <option value='adani'>Adani</option>
              <option value='ashiana'>Ashiana</option>
              <option value='aipl'>Aipl</option>
              <option value='amb'>Amb</option>
              <option value='ambience'>Ambience</option>
              <option value='ats'>Ats</option>
              <option value='Bestech'>Bestech</option>
              <option value='bptp'>Bptp</option>
              <option value='centralpark'>Central Park</option>
              <option value='conscient'>Conscient</option>
              <option value='dlf'>DLF</option>
              <option value='experion'>Experion</option>
              <option value='elaan'>Elaan</option>
              <option value='emaar'>Emaar</option>
              <option value='godrej'>Godrej</option>
              <option value='herohomes'>Hero Homes</option>
              <option value='krisumi'>Krisumi</option>
              <option value='m3m'>M3M</option>
              <option value='mahindra'>Mahindra</option>
              <option value='microtech'>Microtech</option>
              <option value='orris'>Orris</option>
              <option value='oxirich'>Oxirich</option>
              <option value='paras'>Paras</option>
              <option value='puri'>Puri</option>
              <option value='raheja'>Raheja</option>
              <option value='risland'>Risland</option>
              <option value='supertech'>SuperTech</option>
              <option value='spaze'>Spaze</option>
              <option value='shapoorji'>Shapoorji Pallonji</option>
              <option value='smartworld'>Smart World</option>
              <option value='sobha'>Sobha</option>
              <option value='tarc'>Tarc</option>
              <option value='tatahousing'>Tata Housing</option>
              <option value='vatika'>Vatika</option>
              <option value='whiteland'>Whiteland</option>
            </select>

            <div
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}>
              About Developer
            </div>
            <textarea
              id='w3review'
              name='Aboutdeveloper'
              rows='5'
              cols='84'
              required
              value={formData.Aboutdeveloper}
              onChange={handleMainForm}
            />
          </div>
          <div
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}>
            Location
          </div>
          <select
            name='city'
            id='developers'
            required
            value={formData.city}
            onChange={handleMainForm}>
            <option value='null' disabled selected>
              Choose the Location
            </option>
            <option value='gurgaon'>Gurgaon</option>
            <option value='delhi'>Delhi</option>
            <option value='sector45'>Sector 45</option>
            <option value='tilakNagar'>Tilak Nagar</option>
            <option value='palamVihar'>palam Vihar</option>
            <option value='mgRoad'>MG Road</option>
            <option value='subhashChowk'>Subhash Chowk</option>
            <option value='rajeevChowk'>Rajeev Chowk</option>
          </select>

          <div>
            <div
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}>
              Attach Some Photos
            </div>
            
            <div>
              <div
                style={{
                  fontSize: "12px",
                  marginTop: "10px",
                }}>
                ( Site Image )
              </div>
              <input
                type='file'
                name='sitePlan'
                accept='image/*'
                id='mainImage'
              
                onChange={handleImageChange}
              />
            </div>
           
            <div>
              <div
                style={{
                  fontSize: "12px",
                  marginTop: "10px",
                }}>
                ( Main Images )
              </div>
              <input
                type='file'
                name='photo'
                accept='image/*'
                id='mainImage'
                multiple
                
                onChange={handleImageChange}
              />
            </div>
           
            <div>
              <div
                style={{
                  fontSize: "12px",
                  marginTop: "10px",
                }}>
                ( Floor Image )
              </div>
              <input
                type='file'
                name='floorPlan'
                accept='image/*'
                id='mainImage'
                
                onChange={handleImageChange}
              />
            </div>
        
            <div>
              <div
                style={{
                  fontSize: "12px",
                  marginTop: "10px",
                }}>
                ( Location Map )
              </div>
              <input
                type='file'
                name='locationMap'
                accept='image/*'
                id='mainImage'
                
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className='amenitiesPage'>
            <div
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}>
              Choose the Amenitites
            </div>
            <div className='d-flex flex-wrap'>
              <input
                type='checkbox'
                name='amentites'
                id='airConditioner'
                className='form_prop'
                value='airConditioner'
                checked={formData.amentites.includes('airConditioner')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='airConditioner' className='djwOPM'>
                Air Conditioner
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='modularKitchen'
                className='form_prop'
                value='modularKitchen'
                checked={formData.amentites.includes('modularKitchen')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='modularKitchen' className='djwOPM'>
                Modular Kitchen
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='terraceGarden'
                className='form_prop'
                value='terraceGarden'
                checked={formData.amentites.includes('terraceGarden')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='terraceGarden' className='djwOPM'>
                Terrace Garden
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='wardrobes'
                className='form_prop'
                value='wardrobes'
                checked={formData.amentites.includes('wardrobes')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='wardrobes' className='djwOPM'>
                Wardrobes
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='golfCourse'
                className='form_prop'
                value='golfCourse'
                checked={formData.amentites.includes('golfCourse')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='golfCourse' className='djwOPM'>
                Golf Course
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='homeAutomation'
                className='form_prop'
                value='homeAutomation'
                checked={formData.amentites.includes('homeAutomation')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='homeAutomation' className='djwOPM'>
                Home Automation
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='clubHouse'
                className='form_prop'
                value='clubHouse'
                checked={formData.amentites.includes('clubHouse')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='clubHouse' className='djwOPM'>
                Club House
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='miniTheatre'
                className='form_prop'
                value='miniTheatre'
                checked={formData.amentites.includes('miniTheatre')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='miniTheatre' className='djwOPM'>
                Mini Theatre
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='tennis'
                className='form_prop'
                value='tennis'
                checked={formData.amentites.includes('tennis')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='tennis' className='djwOPM'>
                Tennis
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='cafeteria'
                className='form_prop'
                value='cafeteria'
                checked={formData.amentites.includes('cafeteria')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='cafeteria' className='djwOPM'>
                Cafeteria
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='bar'
                className='form_prop'
                value='bar'
                checked={formData.amentites.includes('bar')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='bar' className='djwOPM'>
                Bar
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='parks'
                className='form_prop'
                value='parks'
                checked={formData.amentites.includes('parks')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='parks' className='djwOPM'>
                Parks
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='tierSecurity'
                className='form_prop'
                value='tierSecurity'
                checked={formData.amentites.includes('tierSecurity')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='tierSecurity' className='djwOPM'>
                4 Tier Security
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='atm'
                className='form_prop'
                value='atm'
                checked={formData.amentites.includes('atm')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='atm' className='djwOPM'>
                Atm
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='wifi'
                className='form_prop'
                value='wifi'
                checked={formData.amentites.includes('wifi')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='wifi' className='djwOPM'>
                Wi-fi
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='gym'
                className='form_prop'
                value='gym'
                checked={formData.amentites.includes('gym')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='gym' className='djwOPM'>
                Gym
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='joggingTrack'
                className='form_prop'
                value='joggingTrack'
                checked={formData.amentites.includes('joggingTrack')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='joggingTrack' className='djwOPM'>
                Jogging Track
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='swimmingPool'
                className='form_prop'
                value='swimmingPool'
                checked={formData.amentites.includes('swimmingPool')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='swimmingPool' className='djwOPM'>
                Swimming Pool
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='spa'
                className='form_prop'
                value='spa'
                checked={formData.amentites.includes('spa')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='spa' className='djwOPM'>
                Spa
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='badminton'
                className='form_prop'
                value='badminton'
                checked={formData.amentites.includes('badminton')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='badminton' className='djwOPM'>
                Badminton
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='multiPurposeCourt'
                className='form_prop'
                value='multiPurposeCourt'
                checked={formData.amentites.includes('multiPurposeCourt')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='multiPurposeCourt' className='djwOPM'>
                Multipurpose Court
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='cricket'
                className='form_prop'
                value='cricket'
                checked={formData.amentites.includes('cricket')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='cricket' className='djwOPM'>
                Cricket
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='squashCourt'
                className='form_prop'
                value='squashCourt'
                checked={formData.amentites.includes('squashCourt')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='squashCourt' className='djwOPM'>
                Squash Court
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='bowlingAlley'
                className='form_prop'
                value='bowlingAlley'
                checked={formData.amentites.includes('bowlingAlley')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='bowlingAlley' className='djwOPM'>
                Bowling Alley
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='chess'
                className='form_prop'
                value='chess'
                checked={formData.amentites.includes('chess')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='chess' className='djwOPM'>
                Chess
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='meditation'
                className='form_prop'
                value='meditation'
                checked={formData.amentites.includes('meditation')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='meditation' className='djwOPM'>
                Meditation
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='kidsPlayArea'
                className='form_prop'
                value='kidsPlayArea'
                checked={formData.amentites.includes('kidsPlayArea')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='kidsPlayArea' className='djwOPM'>
                Kids Play Area
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='totLots'
                className='form_prop'
                value='totLots'
                checked={formData.amentites.includes('totLots')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='totLots' className='djwOPM'>
                Tot Lots
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='kidsPool'
                className='form_prop'
                value='kidsPool'
                checked={formData.amentites.includes('kidsPool')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='kidsPool' className='djwOPM'>
                Kids Pool
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='kidsTrack'
                className='form_prop'
                value='kidsTrack'
                checked={formData.amentites.includes('kidsTrack')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='kidsTrack' className='djwOPM'>
                Kids Track
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='kindergarten'
                className='form_prop'
                value='kindergarten'
                checked={formData.amentites.includes('kindergarten')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='kindergarten' className='djwOPM'>
                Kindergarten
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='securityGuard'
                className='form_prop'
                value='securityGuard'
                checked={formData.amentites.includes('securityGuard')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='securityGuard' className='djwOPM'>
                Security Guard
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='intercom'
                className='form_prop'
                value='intercom'
                checked={formData.amentites.includes('intercom')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='intercom' className='djwOPM'>
                Intercom
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='videoDoorPhone'
                className='form_prop'
                value='videoDoorPhone'
                checked={formData.amentites.includes('videoDoorPhone')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='videoDoorPhone' className='djwOPM'>
                Video Door Phone
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='cctv'
                className='form_prop'
                value='cctv'
                checked={formData.amentites.includes('cctv')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='cctv' className='djwOPM'>
                CCTV
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='fireExtinguisher'
                className='form_prop'
                value='fireExtinguisher'
                checked={formData.amentites.includes('fireExtinguisher')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='fireExtinguisher' className='djwOPM'>
                Fire Extinguisher
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='trafficMarshall'
                className='form_prop'
                value='trafficMarshall'
                checked={formData.amentites.includes('trafficMarshall')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='trafficMarshall' className='djwOPM'>
                Traffic Marshall
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='snifferDog'
                className='form_prop'
                value='snifferDog'
                checked={formData.amentites.includes('snifferDog')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='snifferDog' className='djwOPM'>
                Sniffer Dog
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='bikePatrollingSquash'
                className='form_prop'
                value='bikePatrollingSquash'
                checked={formData.amentites.includes('bikePatrollingSquash')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='bikePatrollingSquash' className='djwOPM'>
                Bike Patrolling Squash
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='powerBackup'
                className='form_prop'
                value='powerBackup'
                checked={formData.amentites.includes('powerBackup')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='powerBackup' className='djwOPM'>
                Power Backup
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='waterStorage'
                className='form_prop'
                value='waterStorage'
                checked={formData.amentites.includes('waterStorage')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='waterStorage' className='djwOPM'>
                Water Storage
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='vaastuCompliant'
                className='form_prop'
                value='vaastuCompliant'
                checked={formData.amentites.includes('vaastuCompliant')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='vaastuCompliant' className='djwOPM'>
                Vaastu Compliant
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='groceryStore'
                className='form_prop'
                value='groceryStore'
                checked={formData.amentites.includes('groceryStore')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='groceryStore' className='djwOPM'>
                Grocery Store
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='highSpeedLift'
                className='form_prop'
                value='highSpeedLift'
                checked={formData.amentites.includes('highSpeedLift')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='highSpeedLift' className='djwOPM'>
                High-Speed Lift
              </label>
              <input
                type='checkbox'
                name='amentites'
                id='pipedGasSupply'
                className='form_prop'
                value='pipedGasSupply'
                checked={formData.amentites.includes('pipedGasSupply')}
                onChange={handleCheckedChange}
              />
              <label htmlFor='pipedGasSupply' className='djwOPM'>
                Piped Gas Supply
              </label>
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
            title="Meta's Tags refers to the text that is displayed on search engine result pages and browser tabs to indicate the topic of a webpage">
            Meta Informations
          </div>
          <input
            type='text'
            name='meta_title'
            id='meta_title'
            placeholder='Meta Title*'
            required
            onChange={handleMainForm}
          />
          <input
            type='text'
            name='meta_description'
            id='meta_description'
            placeholder='Meta Description*'
            required
            onChange={handleMainForm}
          />

          <button
            type='submit'
            style={{
              marginTop: "10px",
              margin: "2% 45%",
              border: "none",
              background: "orange",
              padding: "5px 10px",
              borderRadius: "10px",
            }}>
            Update
          </button>
        </form>
      </div>)
          }
    </Wrapper>
  );
}

export default EditableProperty;
const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  .formS {
    margin: 2rem auto;
    width: 50%;
    padding: 1rem;
    border: 1px solid grey;
    border-radius: 15px;
  }
  input[type="text"],
  input[type="number"] {
    width: 100%;
    outline: none;
    border: 0px solid;
  }
  textarea {
    width: 100%;
  }
  .hjMmlm section {
    display: none !important;
    visibility: none !important;
  }
  .dddddd input {
    width: 100%;
  }
  .daKWAU section {
    display: none;
  }
  .fmvbIt {
    display: none;
  }
  .sideBarMain {
    flex: 0 0 20%;
    background: white;
    height: 100vh;
    position: sticky;
    top: 40px;
    padding-right: 20px;
    padding-left: 5px;
  }
  .contentMain {
    flex: 0 0 80%;
  }
  .fmL > .listElm {
    color: red;
    font-size: large;
    padding: 20px;
    cursor: pointer;
  }

  .active {
    color: white !important;
    background: red;
    border-radius: 20px;
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
    background: red;
    border-radius: 20px;
    color: white !important;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    display: none;
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
    margin-bottom: 10px;
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
  input[type="checkbox"] {
    visibility: hidden;
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
    margin-bottom: 10px;
  }
  .bhkAvailable {
    width: 40%;
    padding: 20px 10px;
    box-shadow: 0px 0px 30px #0000001a;
    border-radius: 15px;
    margin-top: 1.5rem;
    min-width: 330px;
  }
  .ffgPCLMV {
    justify-content: space-between;
  }
  .selectBuilder > option {
    height: 50px;
  }
`;
