import "../css/contact.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import c1 from "../img/c1.png";
import c2 from "../img/c2.png";
import { useState, useRef } from "react";
import logo from "../img/Logo.png";

function Contact() {

 const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="about-tag">
        <div className="container">
          <div className="text-center">
            <div className="">
              <Button variant="white" className="rounded px-4 bg-white">
                Support that cares
              </Button>
            </div>
            <div className="fw-semibold text-headline pt-4">
              <p>
                Helping you{" "}
                <span className="fst-italic ee">
                  every
                  <br></br> step
                </span>{" "}
                of the way
              </p>
            </div>
            <div className="pt-3">
              <p>
                We’re here to guide you through every step, ensuring you feel
                supported,<br></br> confident, and ready to achieve your goals.
              </p>
            </div>
          </div>

          <div className="form ">
            <div className="row">
              <div className="bg-white d-flex align-items-center rounded-3">
                <div className=" form-sec-1">
                  <div className="pt-4">
                    <h2>Let's Conntect</h2>
                  </div>
                  <div className="d-flex gap-1 pt-4">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="rounded-1 w-100 h-100 px-5 py-3 border-1"
                    ></input>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="rounded-1 w-100 h-100 px-5 py-3 border-1"
                    ></input>
                  </div>
                  <div className="pt-2">
                    <input
                      type="text"
                      placeholder="Email "
                      className="rounded-1 w-100 h-100 px-5 py-3 border-1"
                    ></input>
                  </div>
                  <div className="pt-2">
                    <input
                      type="text"
                      placeholder="Phone Number "
                      className="rounded-1 w-100 h-100 px-5 py-3 border-1"
                    ></input>
                  </div>
                  <div className="pt-2">
                    <textarea
                      type="text"
                      placeholder="Message "
                      className="rounded-1 w-100 h-100 px-5 py-5 border-1"
                    ></textarea>
                  </div>
                  <div className="pt-3">
                    <Button
                      variant="dark"
                      className="rounded-1 px-3 py-3 w-100 h-100 "
                    >
                      Send
                    </Button>
                  </div>
                </div>
                <div className="">
                  <img src={c1} alt="" className="img-contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <div className="text-center">
            <div className="exp-data">
              <p className="fs-1 text-white">
                Experience<span className="ee fst-italic"> us in person</span>
              </p>
            </div>
            <div className="text-white">
              <p>
                Experience the difference in person. Connect with us
                face-to-face<br></br>
                and see our commitment come to life!
              </p>
            </div>
          </div>


          <div className="row align-items-center">
            <div className="col-md-6">
              <div>
                <img src={c2} alt="" className="img-contact-2" />
              </div>
            </div>
            <div className="col-md-6 ard-data  accordion-style-contact ">
            
              {/* 2021 */}
              <div className="accordion-item bg-white  p-3 mb-2 rounded-3  w-85">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(0)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0 px-3 py-2">London, UK</h5>
                  <span>{activeIndex === 0 ? "−" : "+"}</span>
                </div>
                {activeIndex === 0 && (
                  <div className="accordion-item  p-3 mb-2 rounded-3">
                    <p className="">
                    123 Broadway, New York
                    NY 10006, USA   
                    </p>
                  </div>
                )}
              </div>

              {/* 2022 */}
              <div className="accordion-item bg-white p-3 mb-2 rounded-3 w-85">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(1)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0 px-3 py-2">New York City, USA</h5>
                  <span>{activeIndex === 1 ? "−" : "+"}</span>
                </div>
                {activeIndex === 1 && (
                  <div className="accordion-item p-3 mb-2 rounded-3">
                    <p className="">
                    123 Broadway, New York
                    NY 10006, USA
                    </p>
                  </div>
                )}
              </div>

              {/* 2023 */}
              <div className="accordion-item bg-white p-3 mb-2 rounded-3 w-85">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(2)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0 px-3 py-2">New York City, USA</h5>
                  <span>{activeIndex === 2 ? "−" : "+"}</span>
                </div>
                {activeIndex === 2 && (
                  <div className="accordion-item p-3 mb-2 rounded-3">
                    <p className="">
                    123 Broadway, New York
                    NY 10006, USA
                    </p>
                  </div>
                )}
              </div>

              {/* 2024 */}
              <div className="accordion-item bg-white p-3 mb-2 rounded-3 w-85">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(3)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0 px-3 py-2">New York City, USA</h5>
                  <span>{activeIndex === 3 ? "−" : "+"}</span>
                </div>
                {activeIndex === 3 && (
                  <div className="accordion-item px-3 py-3 mb-2 rounded-3">
                    <p className="">
                    123 Broadway, New York
                    NY 10006, USA
                    </p>
                  </div>
                )}
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

export default Contact;
