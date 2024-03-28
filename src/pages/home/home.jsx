import "./style1.css";

import { Link } from "react-router-dom";

// images imports
import banner from "./img/banner.png";
import services from "./img/services-1.jpg";
import services_2 from "./img/services-2.jpg";
import howitworks from "./img/how-it-work.jpg";
import mentor from "./img/mentor.jpg";
import about from "./img/about.jpg";
import manufacturing from "./img/manufacturing.jpg";
import service from "./img/service.jpg";
import startup from "./img/startup.jpg";
import supply from "./img/supply.jpg";
import enterprise from "./img/enterprise.jpg";
import retail from "./img/retail.jpg";
import underutilization from './img/underutilization.jpg'
import customerRetention from './img/customerRetention.jpg'
import loss from './img/loss.jpg'
import inventory from './img/inventory.jpg'
import delay from './img/delay.jpg'
import work from './img/work.jpg'
import school from './img/school.jpg'
import marketing from './img/marketing.jpg'
import finance from './img/finance.jpg'
import problem from './img/problem.jpg'
import logistic from './img/logistic.jpg'
import thinking from './img/thinking.jpg'
import employee from './img/employee.jpg'

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";


//end of images import

const Home = () => {
  const [currentItem, setCurrentItem] = useState(0); // State to track the index of the current item

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) =>
        prevItem === items.length - 1 ? 0 : prevItem + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);




  
  const items = [
    {
      image: banner, // Use your actual image here
      content: "Unlock Your Potential with Our Online Mentoring Services",
      subContent:
        "Experience the Power of Wise Counsel for Personal and Professional Growth",
    },
    {
      image: manufacturing, // Use your dummy image here
      heading: "Manufacturing Industries",
      subContent:
        "Long Lead-Times\nQuality Issues/ Low Yield\nPoor Asset/Equipment Utilization\nIncreasing Costs/ Low EBITDA\nCustomer Complaints\nInventory/ Stock out",
    },

    {
      image: service,
      heading: "Service Industries",
      subContent:
        "Excellence in Hospitals\nExcellence in Education Institutes\nExcellence in Hospitality Industries\nExcellence in Consulting Services\nExcellence in Facility Management\nExcellence in Govt and NGO services",
    },
    {
      image: startup,
      heading: "Startup",
      subContent:
        "Business Plan/ Business Canvas\nDesign Thinking\nKey Process Establishment\nTalent sourcing and Management\nFunding\nBusiness Strategies",
    },
    {
      image: enterprise,
      heading: "Supply Chain",
      subContent:
        "Cashflow Management\nPeople Management\nProcess Management\nBusiness Development\nQuality Management",
    },
    {
      image: supply, // New item image,
      heading: "MSMEs",
      subContent:
        "Vendor Development\nLogistics\nInventory Management\nWarehousing\nLead time Management",
    },
    {
      image: retail,
      heading: "Retail Industries",
      subContent:
        "Optimization of Inventory\nWarehouse Management\nLogistics Management\nCustomer Delight\nQuality Management\nShowrooms Management",
    },
  ];

  const nextItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === items.length - 1 ? 0 : prevItem + 1
    );
  };

  const prevItem = () => {
    setCurrentItem((prevItem) =>
      prevItem === 0 ? items.length - 1 : prevItem - 1
    );
  };

  return (
    <div className="wrapper">
      {/* 
<!-- ======= bannerHomepage Section ======= --> */}

      <section id="bannerHomepage">
        <div className="container bannerHomepage-container">
          <div className="row  align-items-center homeStart position-relative">
            <div
              className="col-lg-6 py-5 py-lg-0 order-2 order-lg-1 bannerHomepage-content"
              data-aos="fade-right"
            >
              {currentItem === 0 ? (
                <div className="subsec">
                  <h1>{items[currentItem].content}</h1>

                  <div>{items[currentItem].subContent}</div>
                  <br />
                  <Link
                    to="/bookMentor"
                    className="btn-get-started scrollto bookbtn"
                  >
                    Book an Appointment
                  </Link>
                </div>
              ) : (
                <div className="subsec">

               <strong>
                  <div className="heading">
              
                    {items[currentItem].heading
                      .split("\n")
                      .map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                  </div>

                  </strong> 



                  {items[currentItem].subContent
                    .split("\n")
                    .map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}

                  <br />
                  <Link
                    to="/bookMentor"
                    className="btn-get-started scrollto bookbtn"
                  >
                    Book an Appointment
                  </Link>
                </div>
              )}
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 bannerHomepage-image"
              data-aos="fade-left"
            >
              <img
                src={items[currentItem].image}
                className="img-fluid img"
                alt=""
              />

              <div className="scroll-arrows">
                <BsChevronLeft
                  className="scroll-left"
                  style={{
                    fontSize: "36px",
                    position: "absolute",
                    left: "-640px",
                    top: "-200px",
                    transform: "translateY(-50%)",
                  }}
                  onClick={prevItem}
                />
                <BsChevronRight
                  className="scroll-right"
                  style={{
                    fontSize: "36px",
                    position: "absolute",
                    right: "-40px",
                    top: "-200px",
                    transform: "translateY(-50%)",
                  }}
                  onClick={nextItem}
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* <!-- End bannerHomepage --> */}

      {/* <!-- ======= About Section ======= --> */}

      <section id="about" className="about section-bg">
        <div className="container">
          <div className="row gy-4">
            <div className="image col-xl-4">
              <img
                src={about}
                alt="..."
                className="image col-xl-12"
                style={{ height: "700px" }}
              />
            </div>
            <div className="col-xl-8">
              <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
                <h3 data-aos="fade-in" data-aos-delay="100">
                  About Us
                </h3>

                {/* <p data-aos="fade-in">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p> */}

                <div className="row gy-4 mt-3">
                  <div className="col-md-6 icon-box" data-aos="fade-up">
                    <i className="bx bx-shield-alt-2"></i>
                    <h4>Harnessing the Power of Wise Counsel</h4>
                    <div className="text">
                      At WisdomKart, we believe in the power of wise counsel. We
                      understand that a few minutes spent in conversation with a
                      knowledgeable mentor can often yield more valuable
                      insights than days spent navigating challenges alone.
                      That's why we're dedicated to providing online mentoring
                      services to individuals and organizations worldwide.
                    </div>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="bx bx-shield-alt-2"></i>
                    <h4>Comprehensive Mentorship Across Diverse Fields</h4>
                    <div className="text">
                      Our mentoring topics cover a wide range of areas including
                      business excellence, entrepreneurship, startup guidance,
                      problem-solving, executive leadership, career development,
                      strategic planning, business resilience, organizational
                      culture, and people development. Each of our mentors is a
                      subject matter expert with extensive experience in their
                      respective fields.
                    </div>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bx bx-shield-alt-2"></i>
                    <h4>Personalized Mentor Selection</h4>
                    <div className="text">
                      At WisdomKart, we empower solution seekers to choose the
                      right mentor for their needs. Whether you prefer to select
                      your mentor independently or seek guidance from our
                      counselors, we're here to support you every step of the
                      way.
                    </div>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i className="bx bx-shield-alt-2"></i>
                    <h4>Trusted Guidance from Industry Leaders</h4>
                    <div className="text">
                      Our mentors undergo a rigorous selection process and
                      systematic evaluation to ensure that they deliver
                      exceptional value to our clients. With WisdomKart, you can
                      trust that you're receiving guidance from the best minds
                      in the business, tailored to your unique needs and goals.
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- End .content--> */}
            </div>
          </div>
        </div>
      </section>

      {/* 
<!-- End About Section -->   */}

      {/* <!-- ======= Services Section ======= --> */}

      <section id="services" className="services section-bg">
        <div className="container">
          {/* <!--  */}

          <div className="section-title">
            <h2 data-aos="fade-in">Services</h2>
          </div>

          {/* --> */}

          <div className="row">
            <div className="col-md-6 d-flex" data-aos="fade-right">
              <div className="card">
                <div className="card-img">
                  <img src={services} alt="..." className="img" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Our Mission</h5>
                  <div className="text">
                    At Wisdomkart, our mission is to empower professionals and
                    entrepreneurs with precise, practical, and cost-effective
                    solutions to business challenges, leveraging the collective
                    wisdom of our expert mentors. We are dedicated to guiding
                    our clients towards success by offering strategic insights,
                    actionable advice, and enriching mentoring relationships, as
                    they navigate challenges to achieve excellence.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex" data-aos="fade-left">
              <div className="card">
                <div className="card-img">
                  <img src={services_2} alt="..." className="img" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Principles</h5>
                  <ul>
                    <li className="text"> Attention to Details</li>
                    <li className="text">Empathy</li>
                    <li className="text">Thinking out of box</li>
                    <li className="text">Being Practical</li>
                    <li className="text">Problem solving</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Services Section --> */}

      {/* <!-- ======= Our Customers ======= --> */}

      {/* <section id="customers" className="section-bg customers">
        <div className="container">
          <div className="section-title" data-aos="fade-in">
            <h2>Our Customers</h2>
            <p>
              <strong>Who can benefit:</strong> Business Owners, MSMEs,
              Startups, Senior Managers, Family Businesses, Entrepreneurs from
              any Industry including Automotive, General Engineering, Food,
              Pharma, Retail, Aerospace, Healthcare, Hospitality, Education,
              Construction, etc., from any country.
            </p>
          </div>
        </div>
      </section> */}

      {/* <!-- End Our Customers Section -->   */}

      {/* <!-- ======= How it Works ? ======= --> */}

      <section id="HowItWorks" className="section-bg HowItWorks">
        <div className="container">
          <div className="section-title">
            <h2 data-aos="fade-in">How it Works?</h2>
            {/* <!-- */}
            {/* <p data-aos="fade-in">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p> */}
            {/* --> */}
          </div>

          <div className="row gy-4">
            <div className="col-xl-8">
              <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
                {/* <!-- */}
                <h3 data-aos="fade-in" data-aos-delay="100">
                  Our Customers
                </h3>
                {/* --> */}
                {/* <!-- */}
                <div data-aos="fade-in" className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </div>
                {/* --> */}
                <div className="row gy-4 mt-3">
                  <div
                    className="col-md-11 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <i className="bi bi-check"></i>{" "}
                    <h3> Describe your challenge</h3>
                    <div className="text">
                      {" "}
                      The Mentee provides the problem statement along with what
                      is expected to achieve through Mentoring.
                    </div>
                  </div>

                  <div
                    className="col-md-11 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bi bi-check"></i>
                    <h3>Search for the Right Mentor</h3>
                    <div className="text">
                      {" "}
                      1) The Mentee can search his/her Mentor by going through
                      the profiles of several Mentors.
                    </div>
                    <div className="text">
                      {" "}
                      2) We at WisdomKart would help you to find the right
                      Mentor.
                    </div>
                  </div>

                  <div
                    className="col-md-11 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i className="bi bi-check"></i>
                    <h3>Consult with your Mentor</h3>
                    <div className="text">
                      Select your Mentor and have free 60 Minutes
                      initialconsultation.
                    </div>
                  </div>

                  <div
                    className="col-md-11 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i className="bi bi-check"></i>
                    <h3>Hire your Mentor</h3>
                    <div className="text">
                      Choose the Right Mentor and start seeing positive results
                      in your Business.
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- End .content--> */}
            </div>
            <div className="image col-xl-4">
              <img
                src={howitworks}
                className="image col-xl-12"
                alt=""
                style={{}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Our HowItWorks Section -->   */}

      {/* <!-- ======= Need for a Mentor part 1 ======= --> */}
      <section id="NeedMentor1" className="section-bg NeedMentor1">
        <div className="container">
          <div className="section-title">
            <h2 data-aos="fade-in" data-aos-delay="300">
              Need for a Mentor
            </h2>
            {/* <!-- */}
            {/* <p data-aos="fade-in">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p> */}
            {/* --> */}
          </div>

          <div className="row gy-4">
            <div className="image col-xl-6" style={{ position: "relative" }}>
              <img
                src={mentor}
                className="img-fluid"
                alt=""
                style={{
                  borderRadius: "14px",
                  width: "950px",
                  height: "700px",
                }}
              />
              {/* <h1
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "white",
                  background: "black",
                }}
              >
                Do Some one need Mentoring?
              </h1> */}
            </div>

            <div className="col-xl-6">
              <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
                <h3 data-aos="fade-in" data-aos-delay="100">
                  <span style={{ color: "#ef4d5c" }}>Just</span> Practice will
                  not make us Perfect
                </h3>
                <h3 data-aos="fade-in" data-aos-delay="200">
                  It is the <span style={{ color: "#2b9f10" }}>RIGHT</span>{" "}
                  Practice will make us Perfect.
                </h3>
                <div data-aos="fade-in" data-aos-delay="300" className="text">
                  We should know the right or correct method and then practice
                  it. Gurus and Mentors Teach us what is the right method, which
                  when practiced takes us towards Perfection. Otherwise, it is
                  just hours added to practice which either take longer time to
                  reach our destination or we may end-up with wrong destination.
                </div>
                <br />
                <br />

                <div className="row">
                  <h4
                    data-aos="fade-up"
                    data-aos-delay="400"
                    style={{ color: "#213b52" }}
                  >
                    {" "}
                    <strong>
                      There are Prospects across the globe who lacks support in:
                    </strong>
                  </h4>

                  <div className="row mt-3">
                    <div
                      className="col-md-11 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <BsCheck className="icon" />
                      <h5>Improving their Performance</h5>
                    </div>

                    <div
                      className="col-md-11 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <BsCheck className="icon" />
                      <h5>Receiving Objective Feedbacks</h5>
                    </div>

                    <div
                      className="col-md-11 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <BsCheck className="icon" />
                      <h5>Gaining the right Knowledge</h5>
                    </div>

                    <div
                      className="col-md-11 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="700"
                    >
                      <BsCheck className="icon" />
                      <h5>Being Accountable to self</h5>
                    </div>

                    <div
                      className="col-md-11 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="800"
                    >
                      <BsCheck className="icon" />
                      <h5>Gaining Positive Reinforcement for their actions</h5>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- End .content--> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Our HowItWorks Section -->   */}

      {/* <!-- ======= Features Section ======= --> */}
      <section id="features" className="features section-bg">
        <div className="container">
          <div className="section-title">
            <h2 data-aos="fade-in">Some of the real world scenarios</h2>
            {/* <!--  */}
            {/* <p data-aos="fade-in">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p> */}
            {/* --> */}
          </div>

          <div className="row content">
            <div className="col-md-5" data-aos="fade-right">
              <img src={underutilization} className="img-fluid"    style={{ height: "400px", width: "400px" }} alt=""  />
            </div>
            <div className="col-md-7 pt-4" data-aos="fade-left">
              <h3>Under utilization of Equipment</h3>
              <div className="text">
                A plastic manufacturing company located in Gujarat – India is
                looking for solutions to improve utilization of Injection
                Molding Machines. The Manager asking for 2 more new machines to
                meet the demand which costs 85 lakh INR. It is a Family owned
                business and the founder’s view is that they are not utilizing
                the machines in an effective way because
              </div>
              <ul>
                <ul>
                  <li>
                  <BsCheck className="icon" /> Frequent breakdowns
                  </li>
                  <li>
                  <BsCheck className="icon" /> Very high Changeover time
                  </li>
                  <li>
                  <BsCheck className="icon" />Other Idle times
                  </li>
                </ul>
              </ul>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src={customerRetention} className="img-fluid" alt="" />
            </div>
            <div
              className="col-md-7 pt-5 order-2 order-md-1"
              data-aos="fade-right"
            >
              <h3>Customer Retention</h3>
              <div className="text">
                " A Tier 2 Supplier of an Automotive ancillary unit is in the
                verge of losing its key customer as they are consistently scored
                less in the system maturity audit done by customer. The expected
                score is greater than 80 % and the actual score is fluctuating
                under 60 %. Below are the issues as expressed by COO."
              </div>
              <ul>
                <li>
                <BsCheck className="icon" />Inconsistency in compliance to
                  quality standards as there is huge attrition of front line
                  contract employees
                </li>
                <li>
                <BsCheck className="icon" />Repeated customer complaints in
                  some of the appearance parameters
                </li>
                <li>
                <BsCheck className="icon" />Parts are inspected 200 % but
                  still problem persists
                </li>
              </ul>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5" data-aos="fade-right">
              <img src={loss} className="img-fluid" alt=""   style={{width:"400px" , height:"400px"}}/>
            </div>
            <div className="col-md-7 pt-5" data-aos="fade-left">
              <h3>Opportunity Loss</h3>
              <div className="text">
                This organization in Indore is supplier of welding consumables
                to one of the largest fabrication company. Off late customer is
                looking for a second source as the deliveries are poor and he
                feels the price is high. The organization built additional
                capacity thinking the about the long term business with the
                customer. Below are the concerns{" "}
              </div>
              <ul>
                <li>
                <BsCheck className="icon" />Customer is planning to take
                  away 40 % of the business immediately and possibility of
                  losing more business in the next 12 months
                </li>
                <li>
                <BsCheck className="icon" />90 % of the revenue is coming
                  from this single customer
                </li>
              </ul>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src={inventory} className="img-fluid" alt="" style={{width:"400px" , height:"400px"}} />
            </div>
            <div
              className="col-md-7 pt-5 order-2 order-md-1"
              data-aos="fade-right"
            >
              <h3>Un controlled inventory in a Restaurant chain business</h3>
              <div className="text">
                This entrepreneur runs chain of fast-food and Fine dining
                restaurants in Chennai. Business is very good. But unable to
                leverage on the top-line as the huge inventory eating away his
                working capital.
              </div>

              <ul>
                <li>
                <BsCheck className="icon" /> His chefs and Operations
                  Managers are not able to predict correct demand resulting in
                  either stock-out or excess inventory
                </li>
                <li>
                <BsCheck className="icon" />Suppliers are inconsistent{" "}
                </li>
                <li>
                <BsCheck className="icon" />A significant portion is
                  perishable products like vegetables and shelf life items.{" "}
                </li>
              </ul>
            </div>
          </div>

          {/* <!--======================================================================================================================--> */}

          <div className="row content">
            <div className="col-md-5" data-aos="fade-right">
              <img src={delay} className="img-fluid" alt=""   />
            </div>
            <div className="col-md-7 pt-4" data-aos="fade-left">
              <h3>Patients Waiting and becoming Impatient</h3>
              <div className="text">
                A leading and professionally run hospital in Mumbai experiencing
                poor customer satisfaction ratings. Though Customers are happy
                about the healthcare quality but very un happy about service
                levels. Mainly the waiting time some times 60 minutes more than
                the appointment time. It is happening with the doctors, labs and
                at medical stores. Many key customers complained and even
                considering of changing their preferences. The delays are due to
                multiple issues like late arrival of people, searching, Poor
                ergonomics etc..
              </div>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src={work} className="img-fluid" alt="" />
            </div>
            <div
              className="col-md-7 pt-5 order-2 order-md-1"
              data-aos="fade-right"
            >
              <h3>Too much Fire-fighting in Construction Business</h3>
              <div className="text">
                Owner of a leading construction company In Bangalore is
                suffering from stress and depression. The company grown 10 folds
                in last 5 years so the work load of the owner. Though he hired
                people for key positions, still majority of issues he need to
                resolve on daily basis. Even smallest decisions people try to
                approach the owner. He wishes his company to be more
                professional and his team takeover the day to day work. However
                he does-not know where to start………
              </div>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5" data-aos="fade-right">
              <img src={school} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5" data-aos="fade-left">
              <h3>Competition in Education </h3>
              <div className="text">
                An Education Institution in Gurugram off-late finding it
                difficult to get required number of students. Many schools
                started in the surrounding area and luring the parents with many
                offerings including infrastructure, Scholarships, Free Laptops,
                Student exchange programmes, Foreign trips etc.. Though it is a
                old and reputed institute but unable to sustain the brand image
                in spite of consistency in education quality and performance of
                students.
              </div>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src={marketing} className="img-fluid" alt="" />
            </div>
            <div
              className="col-md-7 pt-5 order-2 order-md-1"
              data-aos="fade-right"
            >
              <h3>Low Budget Marketing</h3>
              <div className="text">
                An Education Institution in Gurugram off-late finding it
                difficult to get required number of students. Many schools
                started in the surrounding area and luring the parents with many
                offerings including infrastructure, Scholarships, Free Laptops,
                Student exchange programmes, Foreign trips etc.. Though it is a
                old and reputed institute but unable to sustain the brand image
                in spite of consistency in education quality and performance of
                students.
              </div>
            </div>
          </div>

          {/* <!--=========================================================================================================--> */}

          <div className="row content">
            <div className="col-md-5" data-aos="fade-right">
              <img src={finance} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-4" data-aos="fade-left">
              <h3>Finance for Non Finance COO</h3>
              <div className="text">
                The COO of a Manufacturing organization wanted to understand
                Finance from the Operations point of View. He is interested to
                learn about the metrics used by his corporate finance team to
                measure his performance. Some of them are EBITDA, ROCA, ITR,
                Gross Margin, Value addition per employee .
              </div>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src={problem} className="img-fluid" alt="" />
            </div>
            <div
              className="col-md-7 pt-5 order-2 order-md-1"
              data-aos="fade-right"
            >
              <h3>Technical Problem – Blow Holes in Casting</h3>
              <div className="text">
                This Coimbatore company supplying Castings to a leading MNC,
                facing customer complaints due to blow holes. Process is
                established 5 years back and there is no clues how the problems
                popped-up in last 2 months.Nothing is changed as per the
                operations head who is looking for a right Mentor to guide him.{" "}
              </div>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5" data-aos="fade-right">
              <img src={logistic} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5" data-aos="fade-left">
              <h3>Solutions for Logistics</h3>
              <div className="text">
                This Chennai based small scale company bagged an export order
                from UK. The proprietor has no experience of export shipment
                requirements like regulatory, tax, cost of shipping, shipping
                vendors etc..
              </div>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src={howitworks} className="img-fluid" alt="" />
            </div>
            <div
              className="col-md-7 pt-5 order-2 order-md-1"
              data-aos="fade-right"
            >
              <h3>Career Growth for Professionals</h3>
              <div className="text">
                She is a Post Graduate in Engineering and MBA in Marketing
                Management. Carries 15 years of diversified experience. Feels
                that career growth not happening as expected. Wanted to validate
                choices she made and next steps.
              </div>
            </div>
          </div>
          {/* <!--========================================================================================================================--> */}

          <div className="row content">
            <div className="col-md-5" data-aos="fade-right">
              <img src={employee} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-4" data-aos="fade-left">
              <h3>Loyalty Vs Competency</h3>
              <p>
                The CEO is confused in choosing between Loyal people and
                Competent people. Difficult to find both in a single person.
              </p>
            </div>
          </div>

          <div className="row content">
            <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
              <img src={thinking} className="img-fluid" alt="" />
            </div>
            <div
              className="col-md-7 pt-5 order-2 order-md-1"
              data-aos="fade-right"
            >
              <h3>Can I use Design thinking approach for my Startup?</h3>
              <div className="text">
                An Enthusiastic and Energetic youngster from Hyderabad planning
                to start a educational startup and heard about Design thinking
                approach. He wanted to explore it for his start up to ensure
                flawless execution from concept to commercialization.
              </div>
            </div>
          </div>

          {/*    
  <!--========================================================================================================================--> */}
        </div>
      </section>
      {/* <!-- End Features Section --> */}

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* <!-- Vendor JS Files --> */}
      <script src="vendor/New/aos/aos.js"></script>
      <script src="vendor/apexcharts/apexcharts.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="vendor/chart.js/chart.umd.js"></script>
      <script src="vendor/echarts/echarts.min.js"></script>
      <script src="vendor/quill/quill.min.js"></script>
      <script src="vendor/simple-datatables/simple-datatables.js"></script>
      <script src="vendor/tinymce/tinymce.min.js"></script>
      <script src="vendor/php-email-form/validate.js"></script>
      <script src="vendor/New/glightbox/js/glightbox.min.js"></script>
      <script src="vendor/New/swiper/swiper-bundle.min.js"></script>
      {/* 
<!-- Template Main JS File --> */}
      <script src="js/main1.js"></script>
    </div>
  );
};

export default Home;
