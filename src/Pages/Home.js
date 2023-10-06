import React from "react";
import Cities from "../Components/HomePageComponents/Cities";
import FormHome from "../Components/HomePageComponents/form";
import WhyChoose from "../Components/HomePageComponents/WhyChoose";
import StarCarousel from "../Components/HomePageComponents/Carousel";
import SpacesAvailable from "../Components/HomePageComponents/Spaces";
import SearchBar from "../Components/HomePageComponents/SearchBar";
import styled from "styled-components";
import Footer from "../Components/Actual_Components/Footer";
import FinalNavBar from "../Components/HomePageComponents/NavBar";
import FeaturedSection from "../Components/HomePageComponents/featured";
import DeveloperSlider from "../Components/HomePageComponents/DeveloperSlider";
import OurServices from "../Components/Rough_Components/ourServices";

function Home() {
  return (
    <Wrapper className='section'>
    <div>
      <FinalNavBar />
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
      <StarCarousel />
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
      <Footer />
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
`;
