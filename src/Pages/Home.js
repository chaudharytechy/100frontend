import React from "react";
import Cities from "../Components/HomePageComponents/Cities";
import FormHome from "../Components/HomePageComponents/form";
import WhyChoose from "../Components/HomePageComponents/WhyChoose";
import StarCarousel from "../Components/HomePageComponents/Carousel";
import SpacesAvailable from "../Components/HomePageComponents/Spaces";
import SearchBar from "../Components/HomePageComponents/SearchBar";
import styled from "styled-components";
import FeaturedSection from "../Components/HomePageComponents/featured";
import DeveloperSlider from "../Components/HomePageComponents/DeveloperSlider";
import OurServices from "../Components/HomePageComponents/ourServices";
import { useProductContext } from "../Context/productContext";
import SimilarCarousel from "../Components/HomePageComponents/SimiliarCarousel";


function Home() {
  const {PreLaunchProperties,isPreLaunchLoading,getPreLaunchProducts,PreLuanchFeatProperties,PreLuanchSimilarProperties} = useProductContext();
   
  console.log(PreLuanchSimilarProperties)
  return (
    <Wrapper className='section'>
      <div
        style={{
          height: "80vh",
          width: "100%",
          paddingTop: "20rem",
          boxSizing: "border-box",
        }}
        className='djqwUUJNCO'>
        <SearchBar />
      </div>
      <div
        className='xjUWI'
        style={{
          fontSize: "xx-large",
          margin: "30px 60px",
          fontWeight: "600",
        }}>
        Trending Properties
      </div>
      <StarCarousel />
      <div
        className='xjUWI'
        style={{
          fontSize: "xx-large",
          margin: "20px 60px",
          fontWeight: "600",
        }}>
        Similar Properties You Viewed
      </div>
      <SimilarCarousel />
      <SpacesAvailable />
      <div
        className='xjUWI'
        style={{
          fontSize: "xx-large",
          margin: "20px 60px",
          fontWeight: "600",
        }}>
        Featured Projects
      </div>
      <FeaturedSection />
      <Cities />
      <div
        className='xjUWI'
        style={{
          fontSize: "xx-large",
          margin: "30px 60px",
          fontWeight: "600",
        }}>
        Projects You May find Interesting
      </div>
      <StarCarousel />
      <FormHome />
      <div
        className='xjUWI'
        style={{
          fontSize: "xx-large",
          margin: "30px 60px 0px 60px",
          fontWeight: "600",
        }}>
        Services We Offer
      </div>
      <OurServices />
      <WhyChoose />
      <div
        className='xjUWI'
        style={{
          fontSize: "xx-large",
          margin: "20px 60px 0px 60px",
          fontWeight: "600",
        }}>
        Our Partners
      </div>
      <div
        className='xjUWI'
        style={{
          fontSize: "medium",
          margin: "0px 60px 30px 60px",
          fontWeight: "500",
        }}>
        We are working with Top Builders and Developers across India
      </div>
      <DeveloperSlider />
      <div>
      </div>
    </Wrapper>
  );
}

export default Home;
const Wrapper = styled.section`
  @media screen and (max-width: 500px) {
    .xjUWI {
      font-size: x-large;
      margin: 30px 30px !important;
    }
  }
  @media screen and (max-width: 1800px) {
    .djqwUUJNCO {
      background-image: url("../../Images/Capture1.png");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  @media screen and (max-width: 700px) {
    .djqwUUJNCO {
      background-image: url("../../Images/Capture1.png");
      background-repeat: no-repeat;
      background-position: right;
    }
  }
`;
