import "../css/about.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState, useRef } from "react";

import logo from "../img/Logo.png";
import a1 from "../img/a1.png";
import a2 from "../img/a2.png";
import a3 from "../img/a3.png";
import a4 from "../img/a4.png";
import a5 from "../img/a5.png";
import a6 from "../img/a6.png";
import a7 from "../img/a7.png";
import a8 from "../img/a8.png";
import a9 from "../img/a9.png";
import a10 from "../img/a10.png";
import a11 from "../img/a11.png";
import a12 from "../img/a12.png";

function About() {
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
                Explore the latest available integrations
              </Button>
            </div>
            <div className="fw-semibold text-headline pt-4">
              <p>
                Apps combine all the{" "}
                <span className="fst-italic ee">
                  {" "}
                  tools you<br></br> need to manage
                </span>
                your business.
              </p>
            </div>
            <div className="pt-3">
              <p>
                Link up with your go-to tools and elevate your productivity.
                Choose from over 100 partner integrations<br></br> and stay
                focused on what truly matters
              </p>
            </div>
            <div className="pt-4">
              <Button variant="dark" className="rounded px-4">
                Unlock Early Access
              </Button>
            </div>
          </div>
          <div className="abt-photo">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="abt-photo-one">
                  <img src={a1} alt="" className="img-fluid pt-5" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="abt-photo-two">
                  <img src={a2} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="abt-photo-three">
                  <img src={a3} alt="" className="img-fluid pt-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark abt-photo-frame">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="abt-photo-four">
                <img src={a4} alt="" className="img-fluid" />
              </div>
            </div>

            <div className="col-md-4">
              <div className="abt-photo-five">
                <img src={a5} alt="" className="img-fluid pt-5" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="abt-photo-six">
                <img src={a6} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-white value">
              <h1>Ours Values</h1>
              <p className="pt-5">
                We uphold integrity, innovation, and customer-centricity,
                delivering value<br></br>
                through collaboration and excellence. Our commitment is to
                transparency, accountability, and meaningful impact
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tags">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-3">
              <div className="tags-data">
                <h6>Mission</h6>
                <p className="pt-4">
                  Our mission is to empower businesses by providing innovative,
                  efficient, and reliable solutions that simplify operations and
                  drive sustainable growth. We are committed to delivering
                  exceptional value, fostering strong relationships.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="tags-data">
                <h6>Vision</h6>
                <p className="pt-5">
                  Our values are the foundation of who we are and how we work.
                  We uphold integrity to ensure trust and transparency in every
                  interaction. Innovation drives us to deliver cutting-edge
                  solutions that meet evolving needs.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="tags-data ">
                <h6>Excellence</h6>
                <p className="pt-4">
                  Excellence is at the heart of everything we do. We are
                  dedicated to delivering the highest quality in every solution,
                  service, and interaction. By continuously improving, embracing
                  innovation, and maintaining the highest standards.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="fs-1 fw-medium pt-5 ">
              <p>
                Every step showcases
                <span className="ee fst-italic">
                  {" "}
                  our dedication<br></br>
                  to excellence
                </span>{" "}
                and a better future
              </p>
            </div>
          </div>
          <div className="row accordion-style-about align-items-center">
            <div className="col-md-6">
              <div>
                <img src={a7} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 ard-data">
              {/* 2021 */}
              <div className="accordion-item bg-dark text-white p-3 mb-2 rounded-3  w-85">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(0)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">2021</h5>
                  <span>{activeIndex === 0 ? "−" : "+"}</span>
                </div>
                {activeIndex === 0 && (
                  <div className="accordion-item bg-dark text-white p-3 mb-2 rounded-3">
                    <p className="text-white-50">
                      Effortlessly reimburse employee expenses with no paperwork
                      involved.
                    </p>
                  </div>
                )}
              </div>

              {/* 2022 */}
              <div className="accordion-item bg-dark text-white p-3 mb-2 rounded-3 w-85">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(1)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">2022</h5>
                  <span>{activeIndex === 1 ? "−" : "+"}</span>
                </div>
                {activeIndex === 1 && (
                  <div className="accordion-item bg-dark text-white p-3 mb-2 rounded-3">
                    <p className="text-white-50">
                      Effortlessly reimburse employee expenses with no paperwork
                      involved.
                    </p>
                  </div>
                )}
              </div>

              {/* 2023 */}
              <div className="accordion-item bg-dark text-white p-3 mb-2 rounded-3 w-85">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(2)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">2023</h5>
                  <span>{activeIndex === 2 ? "−" : "+"}</span>
                </div>
                {activeIndex === 2 && (
                  <div className="accordion-item bg-dark text-white p-3 mb-2 rounded-3">
                    <p className="text-white-50">
                      Effortlessly reimburse employee expenses with no paperwork
                      involved.
                    </p>
                  </div>
                )}
              </div>

              {/* 2024 */}
              <div className="accordion-item bg-dark text-white p-3 mb-2 rounded-3 w-85">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(3)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">2024</h5>
                  <span>{activeIndex === 3 ? "−" : "+"}</span>
                </div>
                {activeIndex === 3 && (
                  <div className="accordion-item bg-dark text-white p-3 mb-2 rounded-3">
                    <p className="text-white-50">
                      Effortlessly reimburse employee expenses with no paperwork
                      involved.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark ">
        <div className="container">
          <div className="text-center passionate">
            <div className="pt-5 fs-1 fw-medium text-white">
              <p>
                We are a team{" "}
                <span className="ee fst-italic">
                  passionate<br></br>
                  about numbers
                </span>{" "}
                and driven by precision
              </p>
            </div>
            <div className="text-white pt-5">
              <p>
                We are a team driven by a passion for numbers, focusing on
                precision and data-driven solutions. Our<br></br> expertise
                ensures efficient, accurate results that meet our clients' needs
                with care and excellence
              </p>
            </div>
          </div>
          {/* <div className="container-fluid"> */}
         
          {/* </div> */}
        </div>
      </section>
      <section>
      <div className="container">
            <div className="img-main-abt">
              <div className="img-team-member">
                <img src={a8} alt="" className="w-100" />
                <div className="content w-100">
                  <div className="bg-white rounded-1 ps-2 pe-2">
                    <p><span className="text-success fs-4">Michel De</span><br></br>
                    Product Office</p>
                  </div>
                </div>
              </div>
              <div className="img-team-member">
                <img src={a9} alt="" className="w-100" />
                <div className="content w-100">
                  <div className="bg-white rounded-1 ps-2 pe-2">
                    <p><span className="text-success fs-4">Rayan SM
                    Chief</span><br></br>
                    Product Officer</p>
                  </div>
                </div>
              </div>
              <div className="img-team-member">
                <img src={a10} alt="" className="w-100" />
                <div className="content w-100">
                  <div className="bg-white rounded-1 ps-2 pe-2">
                    <p><span className="text-success fs-4">Maria Jhon
                   </span><br></br>
                   Strategic Planner</p>
                  </div>
                </div>
              </div>
              <div className="img-team-member">
                <img src={a11} alt="" className="w-100" />
                <div className="content w-100">
                  <div className="bg-white rounded-1 ps-2 pe-2">
                    <p><span className="text-success fs-4">Jhon Paul
                   </span><br></br>
                   Product manager</p>
                  </div>
                </div>
              </div>
              <div className="img-team-member">
                <img src={a12} alt="" className="w-100" />
                <div className="content w-100">
                  <div className="bg-white rounded-1 ps-2 pe-2">
                    <p><span className="text-success fs-4">Macob
                    </span><br></br>
                    Ui Designer</p>
                  </div>
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

export default About;
