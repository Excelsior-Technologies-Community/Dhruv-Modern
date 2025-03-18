import  "../css/intigration.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState, useRef } from "react";

import g1 from "../img/g2.png";
import frame from "../img/frame-center.png";
import logo from "../img/Logo.png";
function Integration(){

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return(
        <>
        <section className="inti-tag">
        <div className="container">
          <div className="text-center">
          <div className="">
              <Button variant="white" className="rounded px-4 bg-white">
              Explore the latest available integrations
              </Button>
            </div>
            <div className="fw-semibold text-headline pt-4">
              <p>
              Apps combine all the <span className="fst-italic ee"> tools you<br></br>{" "}
              need to manage</span>your business.
              </p>
            </div>
            <div className="pt-3">
              <p>
              Link up with your go-to tools and elevate your productivity. Choose from over 100 partner integrations<br></br> and stay focused on what truly matters
              </p>
            </div>
            <div className="pt-4">
              <Button variant="dark" className="rounded px-4">
                Unlock Early Access
              </Button>
            </div>
            <div className="pt-5">
              <img src={g1} alt="" className="img-fluid" />
              <p className="fs-5 fw-medium">
                500+<br></br>
                <span className="fs-6 fw-normal">Happy Customer</span>
              </p>
            </div>
          
          </div>
        </div>
      </section>

      <section className="bg-dark">
        <div className="container">
        <div className=" inti-product">
        <div className="text-center">

        <div>
            <p className="fs-1 text-white fw-lighter">Seamlessly<span className="ee fst-italic"> integrate<br></br>
            your product</span> with over 100 tools</p>
        </div>
        <div>
        <img src={frame} alt="" className="img-fluid" />

        </div>
        <div className="pt-4">
              <Button variant="success" className="rounded px-4">
                Integration Request
              </Button>
            </div>

        </div>
        </div>

        </div>
      </section>


      <section className="acordian-style acrd-data-style">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-md-6">
              <div className="fs-1 fw-medium">
                <p>
                  Get more
                  <span className="ee fst-italic">Question?</span>{" "}
                </p>
              </div>
              {/* Employees */}
              <div className="accordion-item p-3 mb-2 rounded-3 border-bottom pt-5">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(0)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">Is a free trial available?</h5>
                  <span className="border border-primary-dark p-2">{activeIndex === 0 ? "−" : "+"}</span>
                </div>
                {activeIndex === 0 && (
                  <div className="accordion-item  p-3 mb-2 rounded-3">
                    <p className="">
                      It has been the industry's standard dummy text ever since
                      the 1500s, when an unknown printer took a galley of type
                      and scrambled it to make a type specimen book
                    </p>
                  </div>
                )}
              </div>

              {/* Authorities */}
              <div className="accordion-item p-3 mb-2 rounded-3   border-bottom pt-5">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(1)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">
                    Are there discounts for early Startup's?
                  </h5>
                  <span className="border border-primary-dark p-2">{activeIndex === 1 ? "−" : "+"}</span>
                </div>
                {activeIndex === 1 && (
                  <div className="accordion-item  p-3 mb-2 rounded-3">
                    <p className="">
                      It has been the industry's standard dummy text ever since
                      the 1500s, when an unknown printer took a galley of type
                      and scrambled it to make a type specimen book
                    </p>
                  </div>
                )}
              </div>

              {/* Finance */}
              <div className="accordion-item  p-3 mb-2 rounded-3   border-bottom pt-5">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(2)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">
                    Is there a discount for yearly commitments?
                  </h5>
                  <span className="border border-primary-dark p-2">{activeIndex === 2 ? "−" : "+"}</span>
                </div>
                {activeIndex === 2 && (
                  <div className="accordion-item  p-3 mb-2 rounded-3">
                    <p className="">
                      It has been the industry's standard dummy text ever since
                      the 1500s, when an unknown printer took a galley of type
                      and scrambled it to make a type specimen book
                    </p>
                  </div>
                )}
              </div>
              {/* Managers (Expanded Section) */}
              <div className="accordion-item p-3 mb-2 rounded-3  border-bottom pt-5">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(3)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">How long does it take to see results?</h5>
                  <span className="border border-primary-dark p-2">{activeIndex === 3 ? "−" : "+"}</span>
                </div>
                {activeIndex === 3 && (
                  <div className="accordion-item  p-3 mb-2 rounded-3">
                    <p className="">
                      It has been the industry's standard dummy text ever since
                      the 1500s, when an unknown printer took a galley of type
                      and scrambled it to make a type specimen book
                    </p>
                  </div>
                )}
              </div>
              <div className="accordion-item  p-3 mb-2 rounded-3  border-bottom pt-5">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(4)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">
                    What should I do if I have a question?
                  </h5>
                  <span className="border border-primary-dark p-2">{activeIndex === 4 ? "−" : "+"}</span>
                </div>
                {activeIndex === 4 && (
                  <div className="accordion-item  p-3 mb-2 rounded-3">
                    <p className="">
                      It has been the industry's standard dummy text ever since
                      the 1500s, when an unknown printer took a galley of type
                      and scrambled it to make a type specimen book
                    </p>
                  </div>
                )}
              </div>
              <div className="accordion-item p-3 mb-2 rounded-3  border-bottom pt-5">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(5)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">
                    How will I receive updates on my case?
                  </h5>
                  <span className="border border-primary-dark p-2">{activeIndex === 5 ? "−" : "+"}</span>
                </div>
                {activeIndex === 5 && (
                  <div className="accordion-item p-3 mb-2 rounded-3">
                    <p className="">
                      It has been the industry's standard dummy text ever since
                      the 1500s, when an unknown printer took a galley of type
                      and scrambled it to make a type specimen book
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="transform">
<div className="container">
      <div className="spends">
                  <p className="fs-1 fw-medium">
                    Transform the way your company spends<br></br>
                    <span className="fst-italic ee">
                      — smarter, simpler, better
                    </span>{" "}
                  </p>
      
                  <div className="pt-5">
                    {" "}
                    <Button variant="dark" className="rounded px-2">
                      Unlock Early Access
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="footer bg-dark">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6">
              <img src={logo} alt="Logo" />
              <p className="text-white pt-3">
                It partners with trusted institutions for banking<br></br> services,
                ensuring secure transactions while<br></br> focusing on seamless
                invoicing and payment<br></br> solutions.
              </p>
            </div>
            <div className="col-md-2 text-white">
              <h6>Pages</h6>
              
              <p>Home</p>
              <p>Feature</p>
              <p>Pricing</p>
              <p>Integration</p>
            </div>
            <div className="col-md-2 text-white">
              <h6>Explore</h6>
              
              <p>About</p>
              <p>Careers</p>
              <p>Blog</p>
              <p>FAQ</p>
            </div>
            <div className="col-md-2 text-white">
              <h6>Info</h6>
              
              <p>Sign Up</p>
              <p>Style guide</p>
              <p>License</p>
  
            </div>
            
          </div>
          <div className="row">
            <div className="col-md-6 d-flex gap-4 text-white pt-5">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Pinterest</p>
            </div>
            <div className="col-md-6 text-white pt-5">
              <p>Copyright © 2024 Clariv. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>


        </>
    );


}

export default Integration;