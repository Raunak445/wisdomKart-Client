import './style1.css'






// images imports
import banner from './img/banner.png'
import services from './img/services-1.jpg'
import services_2 from './img/services-2.jpg'
import howitworks from './img/how-it-work.jpg'
import mentor from './img/mentor.jpg'
import about from './img/about.jpg'

//end of images import



const Home = () => {
  return (
    <>

{/* 
<!-- ======= bannerHomepage Section ======= --> */}
      <section id="bannerHomepage">

<div className="container">
  <div className="row d-flex align-items-center">
  <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
   <h1>Unlock Your Potential with Our Online Mentoring Services</h1>
    <h2>Experience the Power of Wise Counsel for Personal and Professional Growth</h2>

    {/* <!-- */}

    <a href="#about" className="btn-get-started scrollto">Get Started</a>
    {/* --> */}
  </div>
  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
    <img src={banner} className="img-fluid" alt=""/>
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
     
            <img src={about} alt="..." className='image col-xl-12' style={{ height: '700px' }} />
        
      </div>
      <div className="col-xl-8">
        <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
          <h3 data-aos="fade-in" data-aos-delay="100">About Us</h3>


          <p data-aos="fade-in">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>



          <div className="row gy-4 mt-3">
            <div className="col-md-6 icon-box" data-aos="fade-up">
              <i className="bx bx-shield-alt-2"></i>
              <h4>Harnessing the Power of Wise Counsel</h4>
              <p>At WisdomKart, we believe in the power of wise counsel. We understand that a few minutes spent in
conversation with a knowledgeable mentor can often yield more valuable insights than days spent
navigating challenges alone. That's why we're dedicated to providing online mentoring services to
individuals and organizations worldwide.</p>
            </div>
            <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
              <i className="bx bx-shield-alt-2"></i>
              <h4>Comprehensive Mentorship Across Diverse Fields</h4>
              <p>Our mentoring topics cover a wide range of areas including business excellence, entrepreneurship,
startup guidance, problem-solving, executive leadership, career development, strategic planning,
business resilience, organizational culture, and people development. Each of our mentors is a subject
matter expert with extensive experience in their respective fields.
</p>
            </div>
            <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
              <i className="bx bx-shield-alt-2"></i>
              <h4>Personalized Mentor Selection</h4>
              <p>At WisdomKart, we empower solution seekers to choose the right mentor for their needs. Whether
you prefer to select your mentor independently or seek guidance from our counselors, we're here to
support you every step of the way.</p>
            </div>
            <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-shield-alt-2"></i>
              <h4>Trusted Guidance from Industry Leaders</h4>
              <p>Our mentors undergo a rigorous selection process and systematic evaluation to ensure that they
deliver exceptional value to our clients. With WisdomKart, you can trust that you're receiving guidance
from the best minds in the business, tailored to your unique needs and goals.</p>
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
      <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    
    {/* --> */}

    <div className="row">
      <div className="col-md-6 d-flex" data-aos="fade-right">
        <div className="card">
          <div className="card-img">
            <img src={services} alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Our Mission</h5>
            <p className="card-text">At Wisdomkart, our mission is to empower professionals and
entrepreneurs with precise, practical, and cost-effective solutions to
business challenges, leveraging the collective wisdom of our expert
mentors. We are dedicated to guiding our clients towards success by
offering strategic insights, actionable advice, and enriching
mentoring relationships, as they navigate challenges to achieve
excellence.</p>
            
          </div>
        </div>
      </div>
      <div className="col-md-6 d-flex" data-aos="fade-left">
        <div className="card">
          <div className="card-img">
            <img src={services_2} alt="..."/>
          </div>
          <div className="card-body">
            <h5 className="card-title">Principles</h5>
            <ul>
      <li> Attention to Details</li>
      <li>Empathy</li>
      <li>Thinking out of box</li>
    <li>Being Practical</li>
    <li>Problem solving</li>
     
    </ul>
           
          </div>
        </div>

      </div>
      
    </div>

  </div>
</section>
{/* <!-- End Services Section --> */}

 {/* <!-- ======= Our Customers ======= --> */}
<section id="customers" className="section-bg customers">
  <div className="container">

  <div className="section-title">
      <h2 data-aos="fade-in">Our Customers</h2>
      <p data-aos="fade-in"><strong>Who are all can be benefitted:</strong> Business Owners, MSMEs ,
Startups, Senior Managers, Family Businesses, Entrepreneurs from any Industry including Automotive, General Engineering, Food, Pharma, Retail, Aerospace, Healthcare, Hospitality, Education, Construction etc.. from any country</p>
    </div>
  
   

  </div>
</section>
{/* <!-- End Our Customers Section -->   */}

{/* <!-- ======= How it Works ? ======= --> */}
<section id="HowItWorks" className="section-bg HowItWorks">
  <div className="container">

  <div className="section-title">
      <h2 data-aos="fade-in">How it Works?</h2>
      {/* <!-- */}
      <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      {/* --> */}
    </div>
  
    <div className="row gy-4">
     
      <div className="col-xl-8">
        <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
          {/* <!-- */}
          <h3 data-aos="fade-in" data-aos-delay="100">Our Customers</h3>
          {/* --> */}
          {/* <!-- */}
          <p data-aos="fade-in">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>
          {/* --> */}
          <div className="row gy-4 mt-3">
            <div className="col-md-11 icon-box" data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-check"></i> <h4> Describe your challenge</h4>
              <p> The Mentee provides the problem statement along with what is expected to achieve through Mentoring.</p>
            </div>
      
      <div className="col-md-11 icon-box" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-check"></i><h4>Search for the Right Mentor</h4>
        <p> 1) The Mentee can search his/her Mentor by going through the profiles of several Mentors.</p>
       <p> 2) We at WisdomKart would help you to find the right Mentor.</p>
            </div>
      
      <div className="col-md-11 icon-box" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-check"></i><h4>Consult with your Mentor</h4>
              <p>Select your Mentor and have free 60 Minutes initialconsultation.</p>
            </div>
      
             <div className="col-md-11 icon-box" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-check"></i><h4>Hire your Mentor</h4>
              <p>Choose the Right Mentor and start seeing positive results in your Business.</p>
            </div>
           
          </div>
        </div>
        
        {/* <!-- End .content--> */}
      </div>
   <div className="image col-xl-4">
   <img src={howitworks} className="image col-xl-12" alt=""  style={{}}/>
   </div>
    </div>

  </div>
</section>
{/* <!-- End Our HowItWorks Section -->   */}


{/* <!-- ======= Need for a Mentor part 1 ======= --> */}
<section id="NeedMentor1" className="section-bg NeedMentor1">
  <div className="container">

  <div className="section-title">
      <h2 data-aos="fade-in"  data-aos-delay="300">Need for a Mentor</h2>
      {/* <!-- */}
      <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      {/* --> */}
    </div>
      
    <div className="row gy-4">
  <div className="image col-xl-6" style={{position: "relative"}}>
  <img src={mentor} className="img-fluid" alt=""  style={{borderRadius: "14px", width:"900px",height:"600px"}}/>
  <h1 style={{ position: "absolute", bottom: "0", left: "0", fontSize: "24px", fontWeight: "bold", color: "white", background: "black" }}>
  
  Do Some one need Mentoring?
  </h1>
  </div>
     
      <div className="col-xl-6">
     

        <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
          <h3 data-aos="fade-in" data-aos-delay="100"><span style={{color:"#ef4d5c"}}>Just</span> Practice will not make us Perfect</h3>
    <h3 data-aos="fade-in" data-aos-delay="200">It is the <span style={{color:"#2b9f10"}}>RIGHT</span> Practice will make us Perfect.</h3>
          <p data-aos="fade-in" data-aos-delay="300">
            We should know the right or correct method and then practice it. Gurus and Mentors Teach us what is the right method, which when practiced takes us towards Perfection. Otherwise, it is just hours added to practice which either take longer time to reach our destination or we may end-up with wrong destination.
          </p>
    <br/>
<br/>

    <div className="row">
      <h4 data-aos="fade-up" data-aos-delay="400" style={{color: "#213b52"}}> <strong>There are Prospects across the globe who lacks support in:</strong></h4>
      <div className="row mt-3">
      <span className="col-md-11 icon-box" data-aos="fade-up" data-aos-delay="400">
        <i className="bi bi-check"></i> <h5>Improving their Performance</h5>
      </span>

        <div className="col-md-11 icon-box" data-aos="fade-up" data-aos-delay="500">
        <i className="bi bi-check"></i><h5>Receiving Objective Feedbacks</h5>

      </div>

        <div className="col-md-11 icon-box" data-aos="fade-up" data-aos-delay="600">
        <i className="bi bi-check"></i><h5>Gaining the right Knowledge</h5>

      </div>

       <div className="col-md-11 icon-box" data-aos="fade-up" data-aos-delay="700">
        <i className="bi bi-check"></i><h5>Being Accountable to self</h5>

      </div>

         <div className="col-md-11 icon-box" data-aos="fade-up" data-aos-delay="700">
        <i className="bi bi-check"></i><h5>Gaining Positive Reinforcement for their actions</h5>

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
     <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
     {/* --> */}
    </div>

    <div className="row content">
      <div className="col-md-5" data-aos="fade-right">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-4" data-aos="fade-left">
        <h3>Under utilization of Equipment</h3>
        <p>
          A plastic manufacturing company located in Gujarat – India is looking for solutions to improve utilization of Injection Molding Machines. The Manager asking for 2 more new machines to meet the demand which costs 85 lakh INR. It is a Family owned business and the founder’s view is that they are not utilizing the machines in an effective way because
        </p>
        <ul>
          <li><i className="bi bi-check"></i>Frequent breakdowns</li>
          <li><i className="bi bi-check"></i>Very high Changeover time</li>
    <li><i className="bi bi-check"></i>Other Idle times</li>
        </ul>
      </div>
    </div>

    <div className="row content">
      <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
        <h3>Customer Retention</h3>
        <p>            " A Tier 2 Supplier of an Automotive ancillary unit is in the verge of losing its key customer as they are consistently scored less in the system maturity audit done by customer. The expected score is greater than 80 % and the actual score is fluctuating under 60 %. Below are the issues as expressed by COO."
        </p>
    <ul>
          <li><i className="bi bi-check"></i>Inconsistency in compliance to quality standards as there is huge attrition of front line contract employees</li>
          <li><i className="bi bi-check"></i>Repeated customer complaints in some of the appearance parameters</li>
    <li><i className="bi bi-check"></i>Parts are inspected 200 % but still problem persists</li>
        </ul>
       
      </div>
    </div>

    <div className="row content">
      <div className="col-md-5" data-aos="fade-right">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-5" data-aos="fade-left">
        <h3>Opportunity Loss</h3>howitworks
        <p>This organization in Indore is supplier of welding consumables to one of the largest fabrication company. Off late customer is looking for a second source as the deliveries are poor and he feels the price is high. The organization built additional capacity thinking the about the long term business
with the customer. Below are the concerns </p>
        <ul>
          <li><i className="bi bi-check"></i> Customer is planning to take away 40 % of the business immediately and possibility of losing more business in the
next 12 months</li>
          <li><i className="bi bi-check"></i>90 % of the revenue is coming from this single customer</li>              
        </ul>
      </div>
    </div>

    <div className="row content">
      <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
        <h3>Un controlled inventory in a Restaurant chain business</h3>
        <p>
         This entrepreneur runs chain of fast-food and Fine dining restaurants in Chennai. Business is very good. But unable to leverage on the top-line as the huge inventory eating away his working capital.</p>
    
    <ul>
          <li><i className="bi bi-check"></i> His chefs and Operations Managers are not able to predict correct demand resulting in either stock-out or excess inventory</li>
          <li><i className="bi bi-check"></i>Suppliers are inconsistent </li> 
     <li><i className="bi bi-check"></i> A significant portion is perishable products like vegetables and shelf life items. </li>  			  
  </ul>
       
      </div>
    </div>
  
  
{/* <!--======================================================================================================================--> */}
  
    <div className="row content">
      <div className="col-md-5" data-aos="fade-right">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-4" data-aos="fade-left">
        <h3>Patients Waiting and becoming Impatient</h3>
        <p>
          A leading and professionally run hospital in Mumbai experiencing poor customer satisfaction ratings. Though Customers are happy about the healthcare quality but very un happy about service levels. Mainly the waiting time some times 60 minutes more than the appointment time. It is happening with the doctors, labs and at medical stores. Many key customers complained and even considering of changing their preferences. The delays are due to multiple issues like late arrival of people, searching, Poor ergonomics etc..
        </p>
      </div>
    </div>

    <div className="row content">
      <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
        <h3>Too much Fire-fighting in Construction Business</h3>
        <p>  Owner of a leading construction company In Bangalore is suffering from stress and depression. The company grown 10 folds in last 5 years so the work load of the owner. Though he hired people for key positions, still majority of issues he need to resolve on daily basis. Even smallest decisions people try to approach the owner. He wishes his company to be more professional and his team takeover the day to day work. However he does-not know where to start………
        </p>
    
      </div>
    </div>

    <div className="row content">
      <div className="col-md-5" data-aos="fade-right">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-5" data-aos="fade-left">
        <h3>Competition in Education </h3>
        <p>An Education Institution in Gurugram off-late finding it difficult to get required number of students. Many schools started in the surrounding area and luring the parents with many offerings including infrastructure, Scholarships, Free Laptops, Student exchange programmes, Foreign trips etc.. Though it is a old and reputed institute but unable to sustain the brand image in spite of consistency in education quality and performance of students.
</p>
        
      </div>
    </div>

    <div className="row content">
      <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
        <h3>Low Budget Marketing</h3>
        <p>
        An Education Institution in Gurugram off-late finding it difficult to get required number of students. Many schools started in the surrounding area and luring the parents with many offerings including infrastructure, Scholarships, Free Laptops, Student exchange programmes, Foreign trips etc.. Though it is a old and reputed institute but unable to sustain the brand image in spite of consistency in education quality and performance of students.</p>
    
      </div>
    </div>
   
  {/* <!--=========================================================================================================--> */}
  
    <div className="row content">
      <div className="col-md-5" data-aos="fade-right">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-4" data-aos="fade-left">
        <h3>Finance for Non Finance COO</h3>
        <p>
         The COO of a Manufacturing organization wanted to understand Finance from the Operations point of View. He is interested to learn about the metrics used by his corporate finance team to measure his performance. Some of them are EBITDA, ROCA, ITR, Gross Margin, Value addition per employee .
        </p>
        
      </div>
    </div>

    <div className="row content">
      <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
        <h3>Technical Problem – Blow Holes in Casting</h3>
        <p> This Coimbatore company supplying Castings to a leading MNC, facing customer complaints due to blow holes. Process is established 5 years back and there is no clues how the problems popped-up in last 2 months.Nothing is changed as per the operations head who is looking for a right Mentor to guide him. </p>
    
      </div>
    </div>

    <div className="row content">
      <div className="col-md-5" data-aos="fade-right">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-5" data-aos="fade-left">
        <h3>Solutions for Logistics</h3>
        <p>This Chennai based small scale company bagged an export order from UK. The proprietor has no experience of export shipment requirements like regulatory, tax, cost of shipping, shipping vendors etc..</p>
       
      </div>
    </div>

    <div className="row content">
      <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
        <h3>Career Growth for Professionals</h3>
        <p>She is a Post Graduate in Engineering and MBA in Marketing Management. Carries 15 years of diversified experience. Feels that career growth not happening as expected. Wanted to validate choices she made and next steps.</p>
    
  
      </div>
    </div>
  {/* <!--========================================================================================================================--> */}
  
  
    <div className="row content">
      <div className="col-md-5" data-aos="fade-right">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-4" data-aos="fade-left">
        <h3>Loyalty Vs Competency</h3>
        <p>
          The CEO is confused in choosing between Loyal people and Competent people. Difficult to find both in a single person.
        </p>
        
      </div>
    </div>

    <div className="row content">
      <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
        <img src={howitworks} className="img-fluid" alt=""/>
      </div>
      <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
        <h3>Can I use Design thinking approach for my Startup?</h3>
        <p>An Enthusiastic and Energetic youngster from Hyderabad planning to start a educational startup and heard about Design thinking approach. He wanted to
explore it for his start up to ensure flawless execution from concept to commercialization.</p>
    
      </div>
    </div>

{/*    
  <!--========================================================================================================================--> */}
  

  </div>
</section>
{/* <!-- End Features Section --> */}



<a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

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


    </>
  );
};

export default Home;
