import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
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

function Home() {
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
            <div className="col-md-3 smart-learn">
              <p className="fs-1 fs-md-3 fs-lg-5">
                Effortless<br></br>Adherence
              </p>
              <p className="pt-1 pt-md-3 pt-lg-5">
                Simplifying compliance to empower your business to reach the top
              </p>
              <p className="pt-1 pt-md-3 pt-lg-5">
                <Button variant="dark" className="rounded px-2">
                  Learn More
                </Button>
              </p>
            </div>

            <div className="col-md-3 smart-learn">
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
            <div className="col-md-3 smart-learn">
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
          <div className="row">
          <div className="col-md-6 mob-learn">
            <p className="fs-1 fs-md-3 fs-lg-5 fw-semibold pt-1 pt-md-3 pt-lg-5 ps-5">Take charge and <span className="text-success fst-italic fw-bold">track<br></br>every payment  </span>with full<br></br>transparency</p>
            <p className="pt-1 pt-md-3 pt-lg-5 ps-5">Implement a request and approval process that<br></br> enhances spend accountability while giving employees<br></br> the flexibility to make decisions.</p>
            <p className="pt-1 pt-md-3 pt-lg-5">
                <Button variant="dark" className="rounded px-2">
                  Learn More
                </Button>
              </p>
          </div>
          <div className="col-md-5">
          <img src={mob1} alt="" className="img-fluid" />
          </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
