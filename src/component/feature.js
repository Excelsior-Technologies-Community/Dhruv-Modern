import "../css/feature.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import g1 from "../img/g2.png";
import learn from "../img/learn1.png";
import mobwallet from "../img/mobwallet.png";
import face from "../img/face.png";
import learn2 from "../img/img-learn.png";
import mob4 from "../img/mob4.png";
import logo from "../img/Logo.png";
function Feature() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="emp-expence">
        <div className="container">
          <div className="text-center">
            <div className="text-invest">
              <p> Explore Our Investment Series</p>
            </div>
            <div className="fw-semibold text-headline pt-2">
              <p>
                Compensation for<br></br>{" "}
                <span className="fst-italic ee">Employee Expenses</span>
              </p>
            </div>
            <div className="pt-3">
              <p>
                Streamline employee expense reimbursements with ease, no
                paperwork needed. Manage<br></br> expenses seamlessly alongside
                all other company spending.
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
            <div className="img-learn">
              <img src={learn} alt="" className="" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark simple-expence">
        <div className="container">
          <div className="text-center">
            <div className="text-white fs-1 ">
              <p>
                Explore Our<span className="ee fst-italic"> Powerful </span>{" "}
                Capabilities
              </p>
            </div>
            <div className="text-white">
              <p>
                Explore our powerful capabilities that simplify processes and
                boost productivity. Discover how these<br></br> features can
                transform the way you work
              </p>
            </div>
            <div className="contain-capabilities">
              <div className="row justify-content-between text-white">
                <div className="col-md-3">
                  <div className="capabilities">
                    <p>
                      Integrate<br></br> expense management
                    </p>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className=" capabilities">
                    <p>
                      Simplify<br></br> expense approvals
                    </p>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <div className=" capabilities">
                    <p>
                      Real-time <br></br> transaction tracking
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className=" capabilities">
                    <p>
                      Optimize<br></br>approval processes
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center text-white pt-2">
                <div className="col-md-3">
                  <div className=" capabilities">
                    <p>
                      Streamline<br></br>financial workflows
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className=" capabilities">
                    <p>
                      Advanced<br></br>Financial Analytics
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className=" capabilities">
                    <p>
                      Secure
                      <br></br> Digital Transactions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="manage-ment">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 ">
              <div className="management">
                <p className="fs-1 fw-medium ">
                  Revolutionize your
                  <span className="ee fst-italic">
                    {" "}
                    spend<br></br> management
                  </span>{" "}
                  with speed &<br></br> security
                </p>
                <p>
                  Effortlessly reimburse employee expenses with no paperwork
                  involved. Streamline expense reimbursements and manage them
                  seamlessly alongside all your company’s financial activities.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                {" "}
                <img src={mobwallet} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="approvels bg-dark">
        <div className="container">
          <div className="text-center">
            <div>
              <p className=" fs-1 text-white">
                Streamline approvals with a{" "}
                <span className="ee fst-italic">
                  faster<br></br> and simpler
                </span>{" "}
                process{" "}
              </p>
            </div>
            <div>
              <p className="text-white">
                Review and decide on various invoices with ease
              </p>
            </div>
          </div>
          <div className="row text-white justify-content-center text-center">
            <div className="col-md-3 ">
              <div className="capabilities">
                <p>
                  {" "}
                  Verify invoices before<br></br>
                  processing payments when necessar
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="capabilities">
                <p>Add teammates to collaborate and support your workflow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="acordian-style">
        <div className="container">
          <div className="row accordion-style-one align-items-center">
            <div className="col-md-6 ard-data">
              <div className="fs-1 fw-medium">
                <p>
                  Intelligent{" "}
                  <span className="ee fst-italic">
                    management<br></br>
                    powered
                  </span>{" "}
                  by real-time data
                </p>
              </div>
              {/* Employees */}
              <div className="accordion-item bg-dark text-white p-3 mb-2 rounded-3  w-85">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(0)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">Employees</h5>
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

              {/* Authorities */}
              <div className="accordion-item bg-dark text-white p-3 mb-2 rounded-3 w-85">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(1)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">Managers</h5>
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

              {/* Finance */}
              <div className="accordion-item bg-dark text-white p-3 mb-2 rounded-3 w-85">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(2)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">Authorities</h5>
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

              {/* Managers (Expanded Section) */}
              <div className="accordion-item bg-dark text-white p-3 mb-2 rounded-3 w-85">
                <div
                  className="d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(3)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="m-0">Finance</h5>
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

            <div className="col-md-6">
              <div>
                <img src={face} alt="" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="fs-1 fw-medium">
              Simplify your finances with<br></br>
              <span className="ee fst-italic">three easy steps</span> to smarter
              spending
            </p>
          </div>

          <div className="row d-flex justify-content-center pt-1 pt-md-3 pt-lg-5">
            <div className="col-md-3">
              <div className="steps rounded-2">
                <p className="fs-3 fs-md-3 fs-lg-5">
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

            <div className="col-md-3">
              <div className="steps rounded-2">
                <p className="fs-3 fs-md-3 fs-lg-5">
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
            <div className="col-md-3">
              <div className="steps rounded-2">
                <p className="fs-3 fs-md-3 fs-lg-5">
                  Include your team<br></br>members
                </p>
                <p className="pt-1 pt-md-3 pt-lg-5">
                  Team can easily request funds, make secure payments, and
                  submit with just a few clicks.
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
         
            {/* <img src={learn2} alt="" className="" /> */}
            <div className="row">
        <div className="col-md-6">
        <div className="img-mob-4">
        <img src={mob4} alt="" className="img-fluid" />
        </div>



        </div>
        <div className="col-md-6">
        <div className="manage-finance">
            <p className="fw-medium">Issue <span className="ee fst-italic">virtual & physical<br></br>
            solutions</span>  with rules to manage<br></br> your finances</p>
        </div>
        <div className="trusted-user">
          <p className="fw-lighter"><span className="ee fs-4">6.6k</span>  Trusted user</p>
          <p className="fs-4 fw-medium"><span className="ee fs-1">98%</span> Rating</p>
          <p className="fs-4 fw-medium"><span className="ee fs-1">$7.9M</span> Fund Rasing</p>
        </div>
        </div>

        </div>
          
        </div>
      

      </section>

<section className="spends-data">

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

export default Feature;
