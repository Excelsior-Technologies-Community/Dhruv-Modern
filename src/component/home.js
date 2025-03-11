import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState, useRef } from "react";
// import { FaAngleLeft, FaAngleRight } from "../img/btn-left.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../css/style.css";
//import "../css/style.css";
import dashboard from "../img/dashbord.png";
//import take from "../img/take.png";
import p1 from "../img/p1.png";
import p2 from "../img/p2.png";
import p3 from "../img/p3.png";
import p4 from "../img/p4.png";
import p5 from "../img/p5.png";
import p6 from "../img/p6.png";
import mob1 from "../img/mob1.png";
import mob2 from "../img/mob2.png";
import frame from "../img/frame.png";
import mm from "../img/mm.png";
import ceo from "../img/ceo.png";
import owner1 from "../img/owner1.png";
import owner2 from "../img/owner2.png";
import logo from "../img/Logo.png";
import "../component/header";

function Home() {
  const [activeBlogButton, setActiveBlogButton] = useState("left");
  const swiperRef = useRef(null);
  return (
    <>
      <section className="home-page">
        <div className="container">
          <div className="text-center headline">
            <p>Dive into Our Investment Insights</p>
            <p className="tag">
              Take Control Of Your <span className="end">Finance</span>
            </p>
            <p className="tag">
              <span className="end">with ease</span> using ClavFin
            </p>
            <p>
              Securely organize your business account and finance needs,
              managing money with <br></br>speed, ease, and efficiency
            </p>
            <Button variant="dark" className="rounded px-4">
              Unlock Early Access
            </Button>
            <div className="col-md-12">
              <img src={dashboard} alt="" className="img-dash" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark">
        <div className="container">
          <div className="text-center">
            <p className="desh-tag">
              Shaping the future of{" "}
              <span className="desh-end">financial services in</span>
            </p>
            <div>
              <p className="tag-desh">
                <span className="end-desh">partnership</span> with leading
                brands
              </p>
            </div>
            <div className="row logo-img">
              <div className="col-md-2 ">
                <img src={p1} alt="" className="" />
              </div>
              <div className="col-md-2">
                <img src={p2} alt="" className="" />
              </div>
              <div className="col-md-2">
                <img src={p3} alt="" className="" />
              </div>
              <div className="col-md-2">
                <img src={p4} alt="" className="" />
              </div>
              <div className="col-md-2">
                <img src={p5} alt="" className="" />
              </div>
              <div className="col-md-2">
                <img src={p6} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="smart">
        <div className="container">
          <div className="text-center">
            <p className="smart-tag">
              Transform the way you{" "}
              <span className="smart-end">spend with</span>
            </p>
            <p className="smart-tag">
              <span className="smart-end">smarter, faster</span> decisions
            </p>
            <div className="smart-data">
              {" "}
              <p className="text-center">
                We simplify compliance, banking partnerships, and technical
                integrations, giving you the tools to build,<br></br> launch,
                and grow your business faster and with ease.
              </p>
            </div>
          </div>

          <div className="row d-flex justify-content-between pt-1 pt-md-3 pt-lg-5">
            <div className="col-md-4">
              <div className="smart-learn">
                <p className="fs-1 fs-md-3 fs-lg-5">
                  Effortless<br></br>Adherence
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5">
                  Simplifying compliance to empower your business to reach the
                  top
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5">
                  <Button variant="dark" className="rounded px-2">
                    Learn More
                  </Button>
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="smart-learn">
                <p className="fs-1 fs-md-3 fs-lg-5">
                  Scalable &<br></br>Versatile
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5">
                  Provide unique features and terms tailored to meet your
                  customers' needs
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5">
                  {" "}
                  <Button variant="dark" className="rounded px-2">
                    Learn More
                  </Button>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="smart-learn">
                <p className="fs-1 fs-md-3 fs-lg-5">
                  Engineered for<br></br>Growth
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5">
                  Gain access to a fast, reliable, and secure platform you can
                  trust
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5">
                  {" "}
                  <Button variant="dark" className="rounded px-2 ">
                    Learn More
                  </Button>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className=" mob-learn">
                <p className="fs-1 fs-md-3 fs-lg-5 fw-semibold pt-1 pt-md-3 pt-lg-5 ps-5">
                  Take charge and{" "}
                  <span className="text-success fst-italic fw-bold">
                    track<br></br>every payment{" "}
                  </span>
                  with full<br></br>transparency
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5 ps-5">
                  Implement a request and approval process that<br></br>{" "}
                  enhances spend accountability while giving employees<br></br>{" "}
                  the flexibility to make decisions.
                </p>
                <div className="pt-1 pt-md-3 pt-lg-5 ps-5 pb-5">
                  <Button variant="dark" className="rounded px-2">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-5 pt-5">
              <img src={mob1} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="issue">
        <div className="container">
          <div className="issue-data">
            <div className="row">
              <div className="col-md-6">
                <img src={mob2} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <p className="text-white fs-1 fw-semibold">
                  Issue{" "}
                  <span className="issue-text fst-italic">
                    virtual & physical<br></br>Solution{" "}
                  </span>
                  With rules to<br></br>manage your finance
                </p>

                <p className="text-white pt-5">
                  {" "}
                  This approach ensures faster transactions while<br></br>{" "}
                  maintaining control and oversight, enabling smoother<br></br>{" "}
                  operations and empowering your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="efforts">
        <div className="container">
          <div className="efforts-logo">
            <div className="row bg-white">
              <div className="col-md-6 ">
                <p className="fs-1 fw-semibold pt-3">
                  <span className="fst-italic text-success">
                    Effortless sync
                  </span>{" "}
                  with<br></br>
                  your accounting tools
                </p>
                <p className="fs-5 pt-5">
                  Easily integrate with your accounting tools to<br></br>
                  streamline financial management and ensure<br></br> accurate
                  tracking without any hassle.
                </p>
              </div>
              <div className="col-md-6">
                <img src={frame} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="pt-5">
              <div className="row bg-dark issue-unlock rounded-2">
                <div className="col-md-6">
                  <p className="fs-2 text-white">
                    Unlock the{" "}
                    <span className="fst-italic text-success fw-semibold">
                      secret to making<br></br>
                      Finance
                    </span>{" "}
                    for itself — guaranteed.
                  </p>
                </div>
                <div className="col-md-6 text-end pt-4">
                  <Button
                    variant="dark"
                    className="rounded px-2 bg-white text-success"
                  >
                    view pricing
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="simple-step">
            <p className="fs-3 fw-semibold">
              Simplify your finances with<br></br>
              <span className="fst-italic text-success">
                three easy steps
              </span>{" "}
              to smarter spending
            </p>

            <div className="pt-5">
              {" "}
              <Button variant="dark" className="rounded px-2">
                Unlock Early Access
              </Button>
            </div>
          </div>

          <div className="row d-flex justify-content-between pt-1 pt-md-3 pt-lg-5">
            <div className="col-md-4">
              <div className="steps rounded-2">
                <p className="fs-1 fs-md-3 fs-lg-5">
                  Register and add<br></br>funds!
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5">
                  Verify your company and<br></br> load your wallet directly
                  from <br></br>your bank account.
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5">
                  <Button variant="dark" className="rounded px-2 bg-secondary">
                    step-1
                  </Button>
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="steps rounded-2">
                <p className="fs-1 fs-md-3 fs-lg-5">
                  Define your <br></br>spending rules
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5">
                  Create teams, approval workflows, spending policies, and card
                  limits that suit your requirements.
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5">
                  {" "}
                  <Button variant="dark" className="rounded px-2 bg-secondary">
                    step-2
                  </Button>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="steps rounded-2">
                <p className="fs-1 fs-md-3 fs-lg-5">
                  Include your team<br></br>members
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5">
                  Team can easily request funds, make secure payments, and
                  submit receipts with just a few clicks.
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5">
                  {" "}
                  <Button variant="dark" className="rounded px-2 bg-secondary ">
                    step-3
                  </Button>
                </p>
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
            <p className="fs-1 fw-semibold">
              Transform the way your company spends<br></br>
              <span className="fst-italic text-success">
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

export default Home;
