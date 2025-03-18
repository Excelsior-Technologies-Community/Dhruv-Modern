import css from "../css/pricing.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import g1 from "../img/g2.png";
// import learn from "../img/learn1.png";
import logo from "../img/Logo.png";
import tick from "../img/tick.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import mm from "../img/mm.png";
import ceo from "../img/ceo.png";
import owner1 from "../img/owner1.png";
import owner2 from "../img/owner2.png";
function Pricing() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [activeBlogButton, setActiveBlogButton] = useState("left");
    const swiperRef = useRef(null);

  return (
    <>
      <section className="emp-expence">
        <div className="container">
          <div className="text-center">
            <div className="pt-4">
              <Button variant="white" className="rounded px-4 bg-white">
                Explore Value Behind Our Pricing
              </Button>
            </div>

            <div className="fw-semibold text-headline pt-4">
              <p>
                Clear and Honest{" "}
                <span className="fst-italic ee">
                  {" "}
                  Pricing,<br></br> Crafted{" "}
                </span>
                Exclusively for You
              </p>
            </div>
            <div className="pt-4">
              <p>
                Our pricing is fully tailored to suit businesses of all sizes,
                from ambitious startups to<br></br> established enterprises.
              </p>
            </div>
            <div className="pt-5">
              <Button variant="success" className="rounded px-4">
                Monthly
              </Button>
              <Button variant="white" className="rounded px-4 bg-white">
                Anually
              </Button>
            </div>
          </div>
          <div className="subscripction pt-5">
            <div className="row d-flex justify-content-center pt-1 pt-md-3 pt-lg-5">
              <div className="col-md-4">
                <div className="steps rounded-2  pb-5">
                  <p>Best for personal use.</p>
                  <h3>Basic</h3>
                  <p>Best for personal use.</p>
                  <h1>Free</h1>
                  <div className="pt-4 btn-get-start ">
                    <Button
                      variant="dark"
                      className="rounded btn btn-primary w-100"
                    >
                      Get Started
                    </Button>
                    <div class="border-bottom pt-5"></div>
                  </div>
                  <div className="pt-4">
                    <h5>What you will get</h5>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Endless Ideas and Features</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Unlimited Feedback Opportunities</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Intelligent AI Recommendations</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Seamless CRM Integration</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Consolidate Feedback from Slack</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">
                        Exclusive Slack Channel for Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="steps rounded-2 text-white bg-dark">
                  <p>Pro</p>
                  <h3>Enterprise</h3>
                  <p>For large teams & corporations</p>
                  <h1>
                    $20<span className="fs-5">/months</span>
                  </h1>
                  <div className="pt-4 btn-get-start ">
                    <Button
                      variant="success"
                      className="rounded btn btn-primary w-100"
                    >
                      Get Started
                    </Button>
                    <div class="border-bottom pt-5"></div>
                  </div>
                  <div className="pt-4">
                    <h5>What you will get</h5>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Endless Ideas and Features</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Unlimited Feedback Opportunities</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Intelligent AI Recommendations</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Seamless CRM Integration</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Consolidate Feedback from Slack</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">
                        Exclusive Slack Channel for Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="steps rounded-2 pb-5">
                  <p>Premomum</p>
                  <h3>Business</h3>
                  <p>Best for business owners</p>
                  <h1>
                    $30<span className="fs-5">/months</span>
                  </h1>
                  <div className="pt-4 btn-get-start ">
                    <Button
                      variant="dark"
                      className="rounded btn btn-primary w-100"
                    >
                      Get Started
                    </Button>
                    <div class="border-bottom pt-5"></div>
                  </div>
                  <div className="pt-4">
                    <h5>What you will get</h5>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Endless Ideas and Features</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Unlimited Feedback Opportunities</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Intelligent AI Recommendations</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Seamless CRM Integration</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">Consolidate Feedback from Slack</p>
                    </div>
                    <div className="d-flex ">
                      <img src={tick} alt="" className="pb-3 pt-1 ps-1" />
                      <p className="ps-2">
                        Exclusive Slack Channel for Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shape-future">
        <div className="container">
          <div className="text-center">
            <p className="text-white">
              Shaping the future of
              <span className="ee fst-italic">
                {" "}
                financial services in<br></br> partnership
              </span>{" "}
              with leading brands
            </p>
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


        <section className="swiper-users">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <p className="fs-1 fw-semibold">
                      See what
                      <span className="text-success fst-italic"> our users</span> are
                      saying
                    </p>
                  </div>
                  <div className="col-md-6 text-end">
                    <div className="navigation-buttons justify-content-center d-flex gap-4 rounded-5 ">
                      <button
                        className={`btn ${
                          activeBlogButton === "left" ? "" : "btn-secondary"
                        } border-0`}
                        onClick={() => {
                          swiperRef.current?.slidePrev();
                          setActiveBlogButton("left");
                        }}
                      >
                        <FaAngleLeft size={24} />
                      </button>
                      <button
                        className={`btn ${
                          activeBlogButton === "left" ? "" : "btn-secondary"
                        } border-0`}
                        onClick={() => {
                          swiperRef.current?.slideNext();
                          setActiveBlogButton("right");
                        }}
                      >
                        <FaAngleRight size={24} />
                      </button>
                                
                    </div>
                  </div>
                </div>
                {/* <div className="container "> */}
                <Swiper
                  slidesPerView={1.2} // Default for small screens
                  breakpoints={{
                    768: { slidesPerView: 2 }, // Tablets
                    1024: { slidesPerView: 3.5 }, // Desktop: Show 3.5 slides
                  }}
                  spaceBetween={20}
                  navigation={false} // Enable navigation buttons
                  modules={[Navigation]}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                  {/* Swiper Slides */}
      
                  <SwiperSlide>
                    <div className="bg-white card">
                      <div className="card-data">
                        <p>
                          Clavfin has transformed how we handle invoicing. With its
                          easy-to-use interface and detailed financial tracking, we've
                          streamlined our payment process and made smarter decisions
                          to improve cash flow and grow our business.
                        </p>
                      </div>
                      <div className="d-flex">
                        <div className="mt-3">
                          <img src={mm} alt="" className="img-fluid" />
                        </div>
                        <div className="ms-3 mt-3">
                          <h5>Sarah Johnson</h5>
                          <p>Marketing Manager</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
      
                  <SwiperSlide>
                    <div className="bg-white card">
                      <div className="card-data">
                        <p>
                          I've used various invoicing tools, but none match Clavfin.
                          Its customizable financial reports have been a game-changer,
                          allowing us to present our financials in a clear,
                          professional format that's easy for clients to understand.
                        </p>
                      </div>
                      <div className="d-flex">
                        <div className="mt-3">
                          <img src={ceo} alt="" className="img-fluid" />
                        </div>
                        <div className="ms-3 mt-3">
                          <h5>John Smith</h5>
                          <p>CEO</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
      
                  <SwiperSlide>
                    <div className="bg-white card">
                      <div className="card-data">
                        <p>
                          This is incredibly intuitive. They've made it easy for us to
                          monitor our invoicing and payment processes, helping us
                          adjust our cash flow management for better efficiency
                        </p>
                      </div>
                      <div className="d-flex">
                        <div className="mt-3">
                          <img src={owner1} alt="" className="img-fluid" />
                        </div>
                        <div className="ms-3 mt-3">
                          <h5>Emily Rodriguez</h5>
                          <p>Owner</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
      
                  <SwiperSlide>
                    <div className="bg-white card">
                      <div className="card-data">
                        <p>
                          Clavfin has transformed how we handle invoicing. With its
                          easy-to-use interface and detailed financial tracking, we've
                          streamlined our payment process and made smarter decisions
                          to improve cash flow and grow our business.
                        </p>
                      </div>
                      <div className="d-flex">
                        <div className="mt-3">
                          <img src={owner2} alt="" className="img-fluid" />
                        </div>
                        <div className="ms-3 mt-3">
                          <h5>Alex</h5>
                          <p>Owner</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* </div> */}
      
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

export default Pricing;
