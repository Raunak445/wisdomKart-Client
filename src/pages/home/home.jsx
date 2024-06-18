import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/bootstrap-icons/bootstrap-icons.css";
// image imports
// import howitworks from "./img/how-it-work.jpg";

import under from "./pictures for website/pictures for website/Under utilization of Equipment.png";

import retention from "./pictures for website/pictures for website/Customer Retention.png";
import loss from "./pictures for website/pictures for website/Opportunity Loss.png";
import inventory from "./pictures for website/pictures for website/Un controlled inventory in a Restaurant chain business.png";
import delay from "./pictures for website/pictures for website/Patients Waiting and becoming Impatient.png";
import work from "./pictures for website/pictures for website/Too much Fire-fighting in Construction Business.png";
import school from "./pictures for website/pictures for website/Competition in Education.png";

import problem from "./pictures for website/pictures for website/Finance for Non Finance COO.png";
import logistic from "./pictures for website/pictures for website/Technical Problem Blow Holes in Casting.png";
import employee from "./pictures for website/pictures for website/Career Growth for Professionals.png";
import thinking from "./pictures for website/pictures for website/Loyalty Vs Competency.png";
import solution from "./pictures for website/pictures for website/Solutions for Logistics.png";
import design from "./pictures for website/pictures for website/Can I use Design thinking approach for my Startup.png";

import img1 from "./Homepage banner/1.jpg";
import img2 from "./Homepage banner/2.jpg";
import img3 from "./Homepage banner/3.jpg";
import img4 from "./Homepage banner/4.jpg";
import img5 from "./Homepage banner/5.jpg";
import img6 from "./Homepage banner/6.jpg";
import img7 from "./Homepage banner/7.jpg";
import img8 from "./Homepage banner/8.jpg";

import img1m from "./Mobile banner/1.jpg";
import img2m from "./Mobile banner/2.jpg";
import img3m from "./Mobile banner/3.jpg";
import img4m from "./Mobile banner/4.jpg";
import img5m from "./Mobile banner/5.jpg";
import img6m from "./Mobile banner/6.jpg";
import img7m from "./Mobile banner/7.jpg";
import img8m from "./Mobile banner/8.jpg";

import services from "./img/services-1.jpg";
import services_2 from "./img/services-2.jpg";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  const listControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          listControls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.2 },
          });
        }
      });
    });

    const listItems = document.querySelectorAll(".list-item");
    listItems.forEach((item) => observer.observe(item));

    return () => {
      listItems.forEach((item) => observer.unobserve(item));
    };
  }, [listControls]);

  const controls = useAnimation();
  const sectionRefTick = useRef(null);

  useEffect(() => {
    const sectionElementTick = sectionRefTick.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start((i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.2 }, // Adjust the delay between points
          }));
        }
      });
    });

    if (sectionElementTick) {
      observer.observe(sectionElementTick);
    }

    return () => {
      if (sectionElementTick) {
        observer.unobserve(sectionElementTick);
      }
    };
  }, [controls]);

  const card1Controls = useAnimation();
  const card2Controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    const handleScroll = () => {
      if (!sectionElement) return;

      const sectionRect = sectionElement.getBoundingClientRect();
      const isVisible =
        sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;

      if (isVisible) {
        card1Controls.start({ x: 0, transition: { duration: 0.2 } });
        card2Controls.start({ x: 0, transition: { duration: 0.2 } });
      } else {
        card1Controls.start({ x: "-100vw" });
        card2Controls.start({ x: "100vw" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [card1Controls, card2Controls]);

  const slides = [
    {
      url: img1,
    },

    {
      url: img2,
    },
    {
      url: img3,
    },
    {
      url: img4,
    },
    {
      url: img5,
    },
    {
      url: img6,
    },
    {
      url: img7,
    },
    {
      url: img8,
    },
  ];

  const slidesm = [
    {
      url: img1m,
    },

    {
      url: img2m,
    },
    {
      url: img3m,
    },
    {
      url: img4m,
    },
    {
      url: img5m,
    },
    {
      url: img6m,
    },
    {
      url: img7m,
    },
    {
      url: img8m,
    },
  ];

  // const divStyle = {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: "100vh",
  //   backgroundSize: "cover",
  //   padding: "20px",
  //   width: "100%",
  //   // Media queries for responsiveness
  //   '@media (max-width: 768px)': {
  //     padding: '10px',

  //   },
  // };

  // const properties = {
  //   duration: 2000,
  //   // transitionDuration: 500,
  //   infinite: true,
  //   indicators: true,
  //   arrows: true,
  // };

  const slideRef = useRef(null);

  // const [moveSlides, setMoveSlides] = useState(true);

  
  const newRef=useRef(null)


  useEffect(() => {
    // let intervalId;
    
    
      newRef.current = setInterval(() => {
        if (slideRef.current) {
          slideRef.current.goNext();
        }
      }, 4000); // Change the duration as needed
    
    
      

    return () => clearInterval(newRef.current);
  }, []);

  // console.log(newRef)



  // Empty dependency array ensures the effect runs only once after the initial render

  const [isScrolledDown, setIsScrolledDown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      const threshold = window.innerWidth <= 768 ? 40 : 200; // Adjust threshold based on device width
      setIsScrolledDown(currentScroll > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();


  const onSlideClickHandler=()=>{
   
    clearInterval(newRef.current);

  }


  const slidesToShow = window.innerWidth <= 576 ? slidesm : slides;
  // const slidesToShow = slidesm;
  return (
    <div>
      {/* <!-- ======= Hero Section ======= --> */}

      <section id="hero">
        {/* <div className="container">
            <div className="row d-flex align-items-center">
              <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1">
                <h1>Unlock Your Potential with Our Online Mentoring Services</h1>
                <h2>
                  Experience the Power of Wise Counsel for Personal and
                  Professional Growth
                </h2>
                <Link to={'./bookMentor'} className="btn-get-started scrollto">
                  BOOK AN APPOINTMENT
                </Link>{" "}
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                {" "}
                <img
                  src={heroImg}
                  className="img-fluid"
                  alt=""
                />{" "}
              </div>
            </div>
          </div> */}

        <Slide ref={slideRef} transitionDuration={2000}>
          {slidesToShow.map((image, index) => (
            <div key={index}  onClick={() => onSlideClickHandler()}>
              <div
              // style={{ backgroundImage: `url(${image.url})` }}
              
              >
                <img
                  src={image.url}
                  alt=""
                  className="mobile-display"
                  // onClick={() => setMoveSlides(!moveSlides)}
                  // onMouseEnter={() => setMoveSlides(false)}
                  // onMouseLeave={() => setMoveSlides(true)}
                />
                <img
                  src={image.url}
                  alt=""
                  className="desktop-display"
                 
                  // onMouseEnter={() => setMoveSlides(false)}
                  // onMouseLeave={() => setMoveSlides(true)}
                />
              </div>

              {/* <div
                id="caption"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                Navigate Challenges , Achieve Excellence
              </div> */}
            </div>
          ))}
        </Slide>
      </section>

      <footer className={`footer ${isScrolledDown ? "visible" : "hidden"}`}>
        <p className="footerText">Navigate Challenges, Achieve Excellence</p>
        <button
          className="footerButton"
          onClick={() => navigate("/findMentor")}
        >
          Find a Mentor
        </button>
      </footer>

      {/* <!-- End Hero -->  */}

      {/* <!-- Service Start --> */}
      {/* 
      <div className="Service-first container-fluid bg-light">
        <div className="container"> */}
      {/* <!-- */}

      {/* <div className=" row section-title g-5">
            <h2>Areas of Mentoring </h2>
          </div> */}

      {/* --> */}

      {/* 
          <div className="row g-4 g-5">
            <div className="col-lg-3">
              <div className="ms-sm-4 d-flex flex-column flex-sm-row rounded h-100 card-body">
                <div className="ms-sm-4">
                  <h4 className="mb-3">Supply Chain</h4>
                  <ul>
                    <li>
                      <i className="bi bi-check"></i>Cashflow Management
                    </li>
                    <li>
                      <i className="bi bi-check"></i>People Management
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Process Management
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Business Development
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Quality Management
                    </li>
                  </ul>
                  <Link to="/bookMentor" className="get-started-btn mt-4">
                    BOOK AN APPOINTMENT
                  </Link>{" "}
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="ms-sm-4 d-flex flex-column flex-sm-row rounded h-100 card-body">
                <div className="ms-sm-4">
                  <h4 className="mb-3">MSMEs</h4>
                  <ul>
                    <li>
                      <i className="bi bi-check"></i>Vendor Development
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Logistics
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Inventory Management
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Warehousing
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Lead time Management
                    </li>
                  </ul>
                  <Link to="/bookMentor" className="get-started-btn mt-4">
                    BOOK AN APPOINTMENT
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="ms-sm-4 d-flex flex-column flex-sm-row rounded h-100 card-body">
                <div className="ms-sm-4">
                  <h4 className="mb-3">Manufacturing Industries</h4>
                  <ul>
                    <li>
                      <i className="bi bi-check"></i>Long Lead-Times
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Quality Issues/ Low Yield
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Poor Asset/Equipment
                      Utilization
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Increasing Costs/ Low
                      EBITDA
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Customer Complaints
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Inventory/ Stock out
                    </li>
                  </ul>
                  <Link to="/bookMentor" className="get-started-btn mt-4">
                    BOOK AN APPOINTMENT
                  </Link>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="ms-sm-4 d-flex flex-column flex-sm-row rounded h-100 card-body">
                <div className="ms-sm-4">
                  <h4 className="mb-3">Retail Industries</h4>
                  <ul>
                    <li>
                      <i className="bi bi-check"></i>Optimization of Inventory
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Warehouse Management
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Logistics Management
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Customer Delight
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Quality Management
                    </li>
                    <li>
                      <i className="bi bi-check"></i>Showrooms Management
                    </li>
                  </ul>
                  <Link to="/bookMentor" className="get-started-btn mt-4">
                    BOOK AN APPOINTMENT
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- Service End -->  */}

      {/* <!-- ======= About Section ======= --> */}

      <section id="about" className="about">
        <div className="container">
          <div className="row gy-4">
            <div className="image col-xl-4"></div>
            <div className="col-xl-8">
              <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
                <h3>About Us</h3>
                <div className="row gy-4 mt-3">
                  <div className="col-md-6 icon-box">
                    {" "}
                    <motion.div
                      whileHover={{ fontWeight: "bold", scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className="bi bi-record2-fill"></i>

                      <h4>Harnessing the Power of Wise Counsel</h4>

                      <p>
                        At WisdomKart, we believe in the power of wise counsel.
                        We understand that a few minutes spent in conversation
                        with a knowledgeable mentor can often yield more
                        valuable insights than days spent navigating challenges
                        alone. That's why we're dedicated to providing online
                        mentoring services to individuals and organizations
                        worldwide.
                      </p>
                    </motion.div>
                  </div>
                  <div className="col-md-6 icon-box">
                    {" "}
                    <motion.div
                      whileHover={{ fontWeight: "bold", scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className="bi bi-record2-fill"></i>

                      <h4>Comprehensive Mentorship Across Diverse Fields</h4>
                      <p>
                        Our mentoring topics cover a wide range of areas
                        including business excellence, entrepreneurship, startup
                        guidance, problem-solving, executive leadership, career
                        development, strategic planning, business resilience,
                        organizational culture, and people development. Each of
                        our mentors is a subject matter expert with extensive
                        experience in their respective fields.{" "}
                      </p>
                    </motion.div>
                  </div>
                  <div className="col-md-6 icon-box">
                    {" "}
                    <motion.div
                      whileHover={{ fontWeight: "bold", scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className="bi bi-record2-fill"></i>

                      <h4>Personalized Mentor Selection</h4>
                      <p>
                        At WisdomKart, we empower solution seekers to choose the
                        right mentor for their needs. Whether you prefer to
                        select your mentor independently or seek guidance from
                        our counselors, we're here to support you every step of
                        the way.
                      </p>
                    </motion.div>
                  </div>
                  <div className="col-md-6 icon-box">
                    {" "}
                    <motion.div
                      whileHover={{ fontWeight: "bold", scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className="bi bi-record2-fill"></i>

                      <h4>Trusted Guidance from Industry Leaders</h4>
                      <p>
                        Our mentors undergo a rigorous selection process and
                        systematic evaluation to ensure that they deliver
                        exceptional value to our clients. With WisdomKart, you
                        can trust that you're receiving guidance from the best
                        minds in the business, tailored to your unique needs and
                        goals.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
              {/* <!-- End .content-->  */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section -->  */}

      {/* <!-- ======= Services Section ======= --> */}

      <section id="services" className="services" ref={sectionRef}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex">
              <motion.div
                className="card"
                initial={{ x: "-100vw" }}
                animate={card1Controls}
              >
                <div className="card-img">
                  <img src={services} alt="..." />{" "}
                </div>

                {/* <div className="card-body"> */}
                <motion.div
                  whileHover={{ fontWeight: "bold" }}
                  transition={{ duration: 0.3 }}
                  className="card-body"
                >
                  <h5 className="card-title">Our Mission</h5>
                  <p>
                    At Wisdomkart, our mission is to empower professionals and
                    entrepreneurs with precise, practical, and cost-effective
                    solutions to business challenges, leveraging the collective
                    wisdom of our expert mentors. We are dedicated to guiding
                    our clients towards success by offering strategic insights,
                    actionable advice, and enriching mentoring relationships, as
                    they navigate challenges to achieve excellence.
                  </p>
                </motion.div>
                {/* </div> */}
              </motion.div>
            </div>
            <div className="col-md-6 d-flex">
              <motion.div
                className="card"
                initial={{ x: "100vw" }}
                animate={card2Controls}
              >
                <div className="card-img">
                  {" "}
                  <img src={services_2} alt="..." />{" "}
                </div>
                <motion.div
                  whileHover={{ fontWeight: "bold" }}
                  transition={{ duration: 0.3 }}
                  className="card-body"
                >
                  <h5 className="card-title">Guiding Principles</h5>
                  <ul>
                    <li> Attention to Details</li>
                    <li>Empathy</li>
                    <li>Thinking out of box</li>
                    <li>Being Practical</li>
                    <li>Problem solving</li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Our HowItWorks Section -->  */}

      {/* <!-- ======= Need for a Mentor part 1 ======= --> */}
      <section id="NeedMentor1" className="NeedMentor1">
        <div className="container">
          <div className="section-title">
            <h2>Need for a Mentor</h2>
          </div>
          <div className="row gy-4">
            <div className="image col-xl-6" style={{ position: "relative" }}>
              <h1
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "white",
                  background: "black",
                }}
              >
                Do Some one need Mentoring?
              </h1>
            </div>
            <div className="col-xl-6">
              <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
                <h3>
                  <span style={{ color: "#ef4d5c" }}>Just</span> Practice will
                  not make us Perfect
                </h3>
                <h3>
                  It is the <span style={{ color: "#2b9f10" }}>RIGHT</span>{" "}
                  Practice will make us Perfect.
                </h3>
                <p>
                  {" "}
                  We should know the right or correct method and then practice
                  it. Gurus and Mentors Teach us what is the right method, which
                  when practiced takes us towards Perfection. Otherwise, it is
                  just hours added to practice which either take longer time to
                  reach our destination or we may end-up with wrong destination.{" "}
                </p>
                <br />
                <br />
                <div className="row">
                  <h4 style={{ color: "#213b52" }}>
                    {" "}
                    <strong>
                      There are Prospects across the globe who lacks support in:
                    </strong>
                  </h4>

                  <div className="row mt-3" ref={sectionRefTick}>
                    <motion.div
                      className="col-md-11 icon-box"
                      initial={{ opacity: 0, y: 20 }}
                      animate={controls}
                      custom={0}
                    >
                      <i className="bi bi-check"></i>
                      <h5>Improving their Performance</h5>
                    </motion.div>
                    <motion.div
                      className="col-md-11 icon-box"
                      initial={{ opacity: 0, y: 20 }}
                      animate={controls}
                      custom={1}
                    >
                      <i className="bi bi-check"></i>
                      <h5>Receiving Objective Feedbacks</h5>
                    </motion.div>
                    <motion.div
                      className="col-md-11 icon-box"
                      initial={{ opacity: 0, y: 20 }}
                      animate={controls}
                      custom={2}
                    >
                      <i className="bi bi-check"></i>
                      <h5>Gaining the right Knowledge</h5>
                    </motion.div>
                    <motion.div
                      className="col-md-11 icon-box"
                      initial={{ opacity: 0, y: 20 }}
                      animate={controls}
                      custom={3}
                    >
                      <i className="bi bi-check"></i>
                      <h5>Being Accountable to self</h5>
                    </motion.div>
                    <motion.div
                      className="col-md-11 icon-box"
                      initial={{ opacity: 0, y: 20 }}
                      animate={controls}
                      custom={4}
                    >
                      <i className="bi bi-check"></i>
                      <h5>Gaining Positive Reinforcement for their actions</h5>
                    </motion.div>
                  </div>
                </div>
              </div>
              {/* <!-- End .content-->  */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Our HowItWorks Section -->  */}

      {/* <!-- ======= Features Section ======= --> */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-title">
            <h2>Some of the real world scenarios</h2>
          </div>

          <div className="row content">
            <div className="col-md-5">
              {" "}
              <img
                src={under}
                className="img-fluid"
                alt=""
                style={{ height: "400px", width: "400px" }}
              />{" "}
            </div>
            <div className="col-md-7 pt-4">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Under utilization of Equipment</h3>
                <div className="text1">
                  {" "}
                  A plastic manufacturing company located in Gujarat – India is
                  looking for solutions to improve utilization of Injection
                  Molding Machines. The Manager asking for 2 more new machines
                  to meet the demand which costs 85 lakh INR. It is a Family
                  owned business and the founder’s view is that they are not
                  utilizing the machines in an effective way because{" "}
                </div>

                <ul className="text1">
                  <li>
                    <i className="bi bi-check"></i>Frequent breakdowns
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Very high Changeover time
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Other Idle times
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5 order-1 order-md-2">
              {" "}
              <img src={retention} className="img-fluid" alt="" />{" "}
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Customer Retention</h3>
                <div className="text1">
                  {" "}
                  A Tier 2 Supplier of an Automotive ancillary unit is in the
                  verge of losing its key customer as they are consistently
                  scored less in the system maturity audit done by customer. The
                  expected score is greater than 80 % and the actual score is
                  fluctuating under 60 %. Below are the issues as expressed by
                  COO.{" "}
                </div>

                <ul className="text1">
                  <li>
                    <i className="bi bi-check"></i>Inconsistency in compliance
                    to quality standards as there is huge attrition of front
                    line contract employees
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Repeated customer complaints
                    in some of the appearance parameters
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Parts are inspected 200 % but
                    still problem persists
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-5">
              {" "}
              <img
                src={loss}
                className="img-fluid"
                alt=""
                style={{ height: "400px", width: "400px" }}
              />{" "}
            </div>
            <div className="col-md-7 pt-5">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Opportunity Loss</h3>

                <div className="text1">
                  This organization in Indore is supplier of welding consumables
                  to one of the largest fabrication company. Off late customer
                  is looking for a second source as the deliveries are poor and
                  he feels the price is high. The organization built additional
                  capacity thinking the about the long term business with the
                  customer. Below are the concerns{" "}
                </div>
                <ul className="text1">
                  <li>
                    <i className="bi bi-check"></i> Customer is planning to take
                    away 40 % of the business immediately and possibility of
                    losing more business in the next 12 months
                  </li>
                  <li>
                    <i className="bi bi-check"></i> 90 % of the revenue is
                    coming from this single customer
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-5 order-1 order-md-2">
              {" "}
              <img
                src={inventory}
                className="img-fluid"
                alt=""
                style={{ height: "400px", width: "400px" }}
              />{" "}
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Un controlled inventory in a Restaurant chain business</h3>
                <div className="text1">
                  {" "}
                  This entrepreneur runs chain of fast-food and Fine dining
                  restaurants in Chennai. Business is very good. But unable to
                  leverage on the top-line as the huge inventory eating away his
                  working capital.
                </div>

                <ul className="text1">
                  <li>
                    <i className="bi bi-check"></i> His chefs and Operations
                    Managers are not able to predict correct demand resulting in
                    either stock-out or excess inventory
                  </li>
                  <li>
                    <i className="bi bi-check"></i> Suppliers are inconsistent
                  </li>
                  <li>
                    <i className="bi bi-check"></i> A significant portion is
                    perishable products like vegetables and shelf life items.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* <!--======================================================================================================================--> */}

          <div className="row content">
            <div className="col-md-5">
              {" "}
              <img src={delay} className="img-fluid" alt="" />{" "}
            </div>
            <div className="col-md-7 pt-4">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Patients Waiting and becoming Impatient</h3>
                <p className="text1">
                  {" "}
                  A leading and professionally run hospital in Mumbai
                  experiencing poor customer satisfaction ratings. Though
                  Customers are happy about the healthcare quality but very un
                  happy about service levels. Mainly the waiting time some times
                  60 minutes more than the appointment time. It is happening
                  with the doctors, labs and at medical stores. Many key
                  customers complained and even considering of changing their
                  preferences. The delays are due to multiple issues like late
                  arrival of people, searching, Poor ergonomics etc..{" "}
                </p>
              </motion.div>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-5 order-1 order-md-2">
              {" "}
              <img src={work} className="img-fluid" alt="" />{" "}
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Too much Fire-fighting in Construction Business</h3>
                <p className="text1">
                  {" "}
                  Owner of a leading construction company In Bangalore is
                  suffering from stress and depression. The company grown 10
                  folds in last 5 years so the work load of the owner. Though he
                  hired people for key positions, still majority of issues he
                  need to resolve on daily basis. Even smallest decisions people
                  try to approach the owner. He wishes his company to be more
                  professional and his team takeover the day to day work.
                  However he does-not know where to start………{" "}
                </p>
              </motion.div>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-5">
              {" "}
              <img src={school} className="img-fluid" alt="" />{" "}
            </div>

            <div className="col-md-7 pt-5">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Competition in Education </h3>
                <p className="text1">
                  An Education Institution in Gurugram off-late finding it
                  difficult to get required number of students. Many schools
                  started in the surrounding area and luring the parents with
                  many offerings including infrastructure, Scholarships, Free
                  Laptops, Student exchange programmes, Foreign trips etc..
                  Though it is a old and reputed institute but unable to sustain
                  the brand image in spite of consistency in education quality
                  and performance of students.{" "}
                </p>
              </motion.div>
            </div>
          </div>
          <div className="row content">
            {/* <div className="col-md-5 order-1 order-md-2">
              {" "}
              <img src={marketing} className="img-fluid" alt="" />{" "}
            </div> */}
            {/* <div className="col-md-7 pt-5 order-2 order-md-1">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Low Budget Marketing</h3>
                <p>
                  {" "}
                  An Education Institution in Gurugram off-late finding it
                  difficult to get required number of students. Many schools
                  started in the surrounding area and luring the parents with
                  many offerings including infrastructure, Scholarships, Free
                  Laptops, Student exchange programmes, Foreign trips etc..
                  Though it is a old and reputed institute but unable to sustain
                  the brand image in spite of consistency in education quality
                  and performance of students.
                </p>
              </motion.div>
            </div> */}
          </div>

          {/* <!--=========================================================================================================--> */}

          <div className="row content">
            <div className="col-md-7 pt-4">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Finance for Non Finance COO</h3>
                <p className="text1">
                  {" "}
                  The COO of a Manufacturing organization wanted to understand
                  Finance from the Operations point of View. He is interested to
                  learn about the metrics used by his corporate finance team to
                  measure his performance. Some of them are EBITDA, ROCI, ITR,
                  Gross Margin, Value addition per employee .{" "}
                </p>
              </motion.div>
            </div>
            <div className="col-md-5">
              {" "}
              <img src={problem} className="img-fluid" alt="" />{" "}
            </div>
          </div>
          <div className="row content">
            <div className="col-md-5">
              {" "}
              <img src={logistic} className="img-fluid" alt="" />{" "}
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Technical Problem – Blow Holes in Casting</h3>
                <p className="text1">
                  {" "}
                  This Coimbatore company supplying Castings to a leading MNC,
                  facing customer complaints due to blow holes. Process is
                  established 5 years back and there is no clues how the
                  problems popped-up in last 2 months.Nothing is changed as per
                  the operations head who is looking for a right Mentor to guide
                  him.{" "}
                </p>
              </motion.div>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-7 pt-5">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Solutions for Logistics</h3>
                <p className="text1">
                  This Chennai based small scale company bagged an export order
                  from UK. The proprietor has no experience of export shipment
                  requirements like regulatory, tax, cost of shipping, shipping
                  vendors etc..
                </p>
              </motion.div>
            </div>
            <div className="col-md-5">
              {" "}
              <img src={solution} className="img-fluid" alt="" />{" "}
            </div>
          </div>
          <div className="row content">
            <div className="col-md-5">
              {" "}
              <img src={employee} className="img-fluid" alt="" />{" "}
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Career Growth for Professionals</h3>
                <p className="text1">
                  She is a Post Graduate in Engineering and MBA in Marketing
                  Management. Carries 15 years of diversified experience. Feels
                  that career growth not happening as expected. Wanted to
                  validate choices she made and next steps.
                </p>
              </motion.div>
            </div>
          </div>
          {/* <!--========================================================================================================================--> */}

          <div className="row content">
            <div className="col-md-7 pt-4">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Loyalty Vs Competency</h3>
                <p className="text1">
                  {" "}
                  The CEO is confused in choosing between Loyal people and
                  Competent people. Difficult to find both in a single person.{" "}
                </p>
              </motion.div>
            </div>
            <div className="col-md-5">
              {" "}
              <img src={thinking} className="img-fluid" alt="" />{" "}
            </div>
          </div>
          <div className="row content">
            <div className="col-md-5 ">
              {" "}
              <img src={design} className="img-fluid" alt="" />{" "}
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <motion.div
                whileHover={{ fontWeight: "bold" }}
                transition={{ duration: 0.3 }}
              >
                <h3>Can I use Design thinking approach for my Startup?</h3>
                <p className="text1">
                  An Enthusiastic and Energetic youngster from Hyderabad
                  planning to start a educational startup and heard about Design
                  thinking approach. He wanted to explore it for his start up to
                  ensure flawless execution from concept to commercialization.
                </p>
              </motion.div>
            </div>
          </div>

          {/* <!--========================================================================================================================-->  */}
        </div>
      </section>
      {/* <!-- End Features Section -->  */}
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer" className="footer1">
        <div className="contact-info">
          <div className="copyright">
            {" "}
            &copy; Copyright{" "}
            <strong>
              <span>Wisdomkart</span>
            </strong>
            . All Rights Reserved{" "}
          </div>
          <ul>
            <li>
              <FaPhone /> +91 98863 18437
            </li>
            <li>
              <FaEnvelope /> saptha@ssbts.in
            </li>
            <li>
              <FaMapMarkerAlt /> #19, 10th Cross, Vijaya Bank Colony, Off
              Basavanapura main road, Devasandra post, K R Puram, Bangalore
              560036, India
            </li>
          </ul>
        </div>
      </footer>
      {/* <!-- End Footer -->  */}

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  );
};

export default Home;
