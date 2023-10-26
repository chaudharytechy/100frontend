import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Image from "./footerImage.png"
import styled from 'styled-components';
import { ADMIN } from '../../lib/route';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Wrapper className="section">
    <MDBFooter className='text-center text-lg-start text-muted bg-good' style={{backgroundColor:"white !important",boxShadow:"0px 0px 30px 0px #0000001a",borderRadius:"25px"}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>

          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{display:"flex",width:"230px",height:"auto"}}>
                <img src={Image} className="" style={{width:"100%"}}/>
              </h6>
              <p>
              The 100acress simplifies your journey of finding a property in Gurgaon by providing you with relevant information that helps you make an informed decision.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Properties</h6>
              <p>
                <a href='#!' className='text-reset'>
                 Properties in Gurgaon
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Properties in Noida
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Properties in Dwarka                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Properties in kullu Manali  
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Reach Us
                </a>
              </p>
              <p>
                <Link to={ADMIN}>
                <a href='#!' className='text-reset'>
                  Careers
                </a>
                </Link>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                708, ILD Trade Centre, Sector- 47, Gurgaon, Haryana 122001
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                100acress@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 91 98117 50130
              </p>
              <p>
                <MDBIcon fab icon="whatsapp" className="me-3" /> + 91 98117 50130
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 mt-2' style={{ backgroundColor: "red",color:"white" }}>
        © 2023 Copyright: 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          {" "}100acress.com
        </a>
      </div>
    </MDBFooter>
    </Wrapper>
  );
}
const Wrapper=styled.section`
.bg-good{
  background-image:url('');
}
`