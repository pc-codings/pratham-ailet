import React, { useState, useEffect } from 'react';
import './App.css';
import pic from "./pratham.png";
import peop from "./people.jpg";
import ip1 from "./ip-1.png";
import ip2 from "./ip-2.png";
import ip3 from "./ip-3.png";
import ip4 from "./ip-4.png";
import ip5 from "./ip-5.png";
import ip6 from "./ip-6.png";
import six from "./6.jpg"
import facebook from "./facebook.png";
import twitter from "./twitar.png";
import google from "./google+.png";
import linkedin from "./linkedin.png";
import pra from "./pratham-logo.png";
import use from "./use2.png";
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set an interval to switch images
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="image">
      <img src={images[currentIndex]} alt="carousel" />
    </div>
  );
};

const Carousel = ({ images = [ip1, ip2, ip3, ip4, ip5, ip6] }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOffset((prevOffset) => (prevOffset - 100) % (images.length * 20)); // Adjust based on your CSS and number of images
    }, 3000); // Rotate images every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="carousel-container">
      {images.concat(images.slice(0, 4)).map((image, index) => (
        <div
          key={index}
          className="carousel-slide"
          style={{ transform: `translateX(${offset}%)` }}
        >
          <img src={image} alt={`Slide ${index}`} className="carousel-image" />
        </div>
      ))}
    </div>
  );
};


function App() {
  const images = [peop,six]
  return (
    <div className="App">
      {/* upper header */}
      <div className="upper-header">
        <marquee className="marquee">Registration Open for CUET</marquee>
        <div className="mid-head">
          <button className="upper-button">Pay Online</button>
          <button className="upper-button">Register</button>
        </div>
      </div>
      {/* header */}
      <div className="header">
        <div className="image">
          <img src={pic}/>
        </div>
        <div className="header-items">
          <p>ABOUT</p>
          <p>PREP MODULE</p>
          <p>COURSES</p>
          <p>RESULTS</p>
          <p>BLOG</p>
          <p>CONTACT</p>
          <p>CAREER</p>
          <p>LOGIN</p>
          <p>PARTNER</p>
        </div>
      </div>
      {/* hero section */}
      <div className="hero">
        <ImageCarousel images={images} />;

        {/* <div>
          <ul>
            <li>/ Pages</li>
            <li>/ AILET</li>
          </ul>
        </div> */}
      </div>
      {/* body */}
      <div className="body-place">
        <tr className="body-down">
          <td className="body-left">
            <div className="data">
              <h1>All India Law Entrance Test</h1>
              <div className="normal-div"></div>
              <p><b>National Law University, Delhi:</b> All India Law Entrance Test (AILET) is a national level entrance exam for admissions to undergraduate (UG) and postgraduate (PG) law programmes offered by National Law Universities around the country.</p>
              <p><b>Eligibility:</b></p>
              <ol>
                <li>There is no upper age limit for UG Programme in AILET 2023. However, a student is required to be atleast 18 years of age while taking admission in NLU Delhi.</li>
                <li>Minimum percentage of marks in 10+2 or an equivalent examination:</li>
                <ul>
                  <li>Forty five percent (45%) marks or equivalent grade of candidates</li>
                  <li>Forty Percent (40%) marks or equivalent in case of candidates belonging to SC/ST/Persons with Disability categories.</li>
                </ul>
              </ol>
              <p><b>AILET Pattern</b></p>
              <ul>
                <li>Duration: 1 Hour and 30 Minutes</li>
                <li>Mode: Offline</li>
                <li>Total Questions: 150</li>
              </ul>
            </div>
            <div className="table-data">
              <tr className="table-data-upper">
                <td className="table-data-left">
                  <h2>Sections</h2>
                </td>
                <td className="table-data-right">
                  <h2>Number of Questions (roughly)</h2>
                </td>
              </tr>
              <tr className="table-data-mid">
                <td className="table-data-left">
                  <h3>English Language</h3>
                </td>
                <td className="table-data-right">
                  <h3>50</h3>
                </td>
              </tr>
              <tr className="table-data-down">
                <td className="table-data-left">
                  <h3>Current Affair and GK</h3>
                </td>
                <td className="table-data-right">
                  <h3>50</h3>
                </td>
              </tr>
              <tr className="table-data-mid">
                <td className="table-data-left">
                  <h3>English Language</h3>
                </td>
                <td className="table-data-right">
                  <h3>50</h3>
                </td>
              </tr>
            </div>
            <div className="data-3">
              <ul>
                <li><b>Marking Scheme:</b> Each correct answer will get a score of +1 mark, each wrong answer will get a score of -0.25 marks.</li>
                <li>If two or more candidates get the same marks at the All India Law Entrance Test (AILET), their merit list will be determined on the basis of higher marks in the section of Logical Reasoning in the AILET 2023.</li>
                <li>If the merit is still the same, then the candidate senior in age shall get preference. If still there is no change in merit, then computerized draw of lots shall be taken into consideration.</li>
                <li>Total Seats: 123</li>
              </ul>
            </div>
            <div>
              <h1>AILET 2024 Deadlines </h1>
              <div className="normal-div"></div>
                <div className="table-data">
                <tr className="table-data-upper">
                  <td className="table-data-left">
                    <h2>Application</h2>
                  </td>
                  <td className="table-data-right">
                    <h2>Last Date to Apply (roughly)</h2>
                  </td>
                </tr>
                <tr className="table-data-mid">
                  <td className="table-data-left">
                    <h3>Application Opens</h3>
                  </td>
                  <td className="table-data-right">
                    <h3> 	7 August, 2023</h3>
                  </td>
                </tr>
                <tr className="table-data-down">
                  <td className="table-data-left">
                    <h3>Last date to Apply</h3>
                  </td>
                  <td className="table-data-right">
                    <h3>13 November, 2023</h3>
                  </td>
                </tr>
                <tr className="table-data-mid">
                  <td className="table-data-left">
                    <h3>Release of Admit Cards</h3>
                  </td>
                  <td className="table-data-right">
                    <h3>20 November, 2023</h3>
                  </td>
                </tr>
                <tr className="table-data-mid">
                  <td className="table-data-left">
                    <h3>AILET 2023 Exam Date</h3>
                  </td>
                  <td className="table-data-right">
                    <h3> 	10 December, 2023</h3>
                  </td>
                </tr>
              </div>
            </div>
            <div>
              <h1>Why PRATHAM</h1>
              <div className="normal-div"></div>
              <div className="para">
              <p>You can consider PRATHAM TEST PREP because of the faculty team, ready to travel the distance to get you a seat in the top tier National Law Universities. With mentors from Nalsar Hyderabad, NLU Jodhpur, NLIU Bhopal, RGNUL Patiala, NLU Assam you will get just the right guidance to crack an extremely competitive examination like AILET.Additionally, it offers a vast set of preparation material namely Knowledge Primers along with Class Assignments, Home Assignments and Special Handouts for every topic. You will get chapter-wise question bank and a mock test series to help you strategize for the exam. You will have access to an online portal where you can find E-lectures from the best faculty, exam analysis videos, and strategy sessions along with regular online/offline (as you opt) classes on the weekends so you are able to balance your boards and Law entrance preparation.You can also book mentor slots to speak to a mentor exclusively to address your problems and curate a study plan.</p>
            </div>
            </div>
            <div>
              <h1>Frequently Asked Questions</h1>
              <div className="normal-div"></div>
              <h3>Can I appear for AILET while in Class XIth? </h3>
              <div className="normal-div-2"></div>
              <h3>Can I start preparing for AILET after my boards are over?  </h3>
              <div className="normal-div-2"></div>
              <h3>CHow much time is ideally required to crack a competitive exam like AILET?  </h3>
              <div className="normal-div-2"></div>
              <h3>When will the AILET conducted this year and what is the application fee? </h3>
              <div className="normal-div-2"></div>
              <h3>What is the last date of submitting the application form for AILET 2024? </h3>
              <div className="normal-div-2"></div>

            </div>
          </td>
          <td className="body-right">
            <div className="form">
                <h3>GET PERSONALISED COUNSELLING</h3>
                <div className="form-1">
                  <input
                  type="text"
                  value={"Select Program"}
                  />
                  <input
                  type="text"
                  value={"Select Course"}
                  />
                </div>
                <div className="form-2">
                  <input
                  type="text"
                  value={"First Name"}
                  />
                  <input
                  type="text"
                  value={"Last Name"}
                  />
                </div>
                <div className="form-3">
                  <input
                  type="text"
                  value={"Phone"}
                  />
                  <input
                  type="text"
                  value={"Email"}
                  />
                </div>
                <div className="form-4">
                  <input
                  type="text"
                  value={"City"}
                  />
                  <input
                  type="text"
                  value={"School"}
                  />
                </div>
                <div className="form-5">
                <input
                value={"Select Class"}/>
                </div>
                <div className="button-2">
                  <button className="form-button">Submit</button>
                </div>
            </div>
          </td>
        </tr>

      </div>
      <div className="body-lower">
        <h1>Popular Universities / Entrance</h1>
        <div className="normal-div"></div>
      </div>
      <div>
        <Carousel/>
      </div>
      <div style={{width:"70%",margin:"auto"}}>
        <h1 style={{color:"rgb(27, 27, 112)",textAlign:"left"}}>Student Testimonial</h1>
        <div className='normal-div'></div>
        <img src={use} style={{marginTop:"50px",marginBottom:"50px"}}/>
      </div>
      <div className='footer'>
        <div className='footer-2'>
          <h1>Prep Module</h1>
          <div className='normal-div'></div>
        </div>
      <div className='footer-3'>
        <table style={{ width: '100%', tableLayout: 'fixed' }}>
          <tbody>
            <tr style={{ height: '40px' }}>
              <td style={{ padding: '10px 0' }}>&gt; &nbsp;&nbsp;&nbsp;&nbsp;TWO YEAR PROGRAM</td>
              <td style={{ padding: '10px 0' }}>&gt; &nbsp;&nbsp;&nbsp;&nbsp;ONE YEAR PROGRAM</td>
              <td style={{ padding: '10px 0' }}>&gt; &nbsp;&nbsp;&nbsp;&nbsp;RETAKER PROGRAM</td>
            </tr>
            <tr style={{ height: '40px' }}>
              <td style={{ padding: '10px 0' }}>&gt; &nbsp;&nbsp;&nbsp;&nbsp;HYBRID PROGRAM</td>
              <td style={{ padding: '10px 0' }}>&gt; &nbsp;&nbsp;&nbsp;&nbsp; CRASH COURSE</td>
              <td style={{ padding: '10px 0' }}>&gt; &nbsp;&nbsp;&nbsp;&nbsp; SAT® PREPARATION</td>
            </tr>
            <tr style={{ height: '40px' }}>
              <td style={{ padding: '10px 0' }}>&gt; &nbsp;&nbsp;&nbsp;&nbsp;ONLINE STUDY MATERIAL MATERIAL</td>
              <td style={{ padding: '10px 0' }}>&gt; &nbsp;&nbsp;&nbsp;&nbsp;ONLINE STUDY MATERIAL LAW</td>
              <td style={{ padding: '10px 0' }}>&gt; &nbsp;&nbsp;&nbsp;&nbsp; COUNSELING DIVISION</td>
            </tr>
          </tbody>
        </table>
      </div>


      </div>
      <div className='footer-mid' style={{margin:"0px"}}>
        <table style={{ margin:"auto",width: '70%', tableLayout: 'fixed',height:"400px" }}>
        <tr>
          <td>
            <img src={pra} style={{height:"70px"}}/>
            <p style={{ color: "white", textAlign: "left", wordSpacing: "6px" }}
            >PRATHAM is an educational institute that remains adamant in emerging as one of the leading institutes, enhancing the budding youth into successful individuals.</p>
            <p style={{color:"white", textAlign: "left"}}>We Are Social !</p>
            <div className='footer-part-1'>
              <img src={facebook}/>
              <img src={google}/>
              <img src={linkedin}/>
              <img src={twitter}/>
            </div>
          </td>
          <td>
            <h2 style={{color:"white"}}>Top Course</h2>
            <div className='normal-div-1'></div>
            <p style={{color:"white",textAlign:"left",marginLeft:"100px"}}>&gt;&nbsp;&nbsp;CUET</p>
            <p style={{color:"white",textAlign:"left",marginLeft:"100px"}}>&gt;&nbsp;&nbsp;CLAT</p>
            <p style={{color:"white",textAlign:"left",marginLeft:"100px"}}>&gt;&nbsp;&nbsp;IIM Indore, IPM</p>
            <p style={{color:"white",textAlign:"left",marginLeft:"100px"}}>&gt;&nbsp;&nbsp;IIM Rohtak, IPM</p>
            <p style={{color:"white",textAlign:"left",marginLeft:"100px"}}>&gt;&nbsp;&nbsp;NLU Delhi</p>
          </td>

          <td>
            <h2 style={{color:"white"}}>Prep Module</h2>
            <div className='normal-div-1'></div>
            <p style={{color:"white",textAlign:"left",marginLeft:"100px"}}>&gt;&nbsp;&nbsp;2 Year Program</p>
            <p style={{color:"white",textAlign:"left",marginLeft:"100px"}}>&gt;&nbsp;&nbsp;1 Year Program</p>
            <p style={{color:"white",textAlign:"left",marginLeft:"100px"}}>&gt;&nbsp;&nbsp;Hybrid Program</p>
            <p style={{color:"white",textAlign:"left",marginLeft:"100px"}}>&gt;&nbsp;&nbsp;Crash Course</p>
            <p style={{color:"white",textAlign:"left",marginLeft:"100px"}}>&gt;&nbsp;&nbsp;International Education</p>
          </td>
          <td style={{marginLeft:"30px"}}> 
            <h2 style={{color:"white"}}>Prep Module</h2>
            <div className='normal-div-1'></div>
            <div style={{marginLeft:"100px"}}>
              <p style={{color:"white",textAlign:"left",wordSpacing:"6px"}}>PRATHAM Head Office HS-13, 2nd Floor, Kailash Colony Main Market New Delhi 110048</p>
              <p style={{color:"white",textAlign:"left",wordSpacing:"6px"}}>+91- 99999 75392</p>
              <p style={{color:"white",textAlign:"left",wordSpacing:"6px"}}>011-42 666 000</p>
              <p style={{color:"white",textAlign:"left",wordSpacing:"6px"}}>info@prathamonline.com</p>
            </div>
          </td>
        </tr>
        </table>
      </div>
      <div style={{backgroundColor:"#3b3c3e", height:"100%", margin:"auto"}}>
        <div style={{width:"70%",margin:"auto" ,padding:"20px"}}>
          <div>
          <p style={{textAlign:"left",margin:"0rem",color:"white"}}>Partners</p>
          </div>
          <div className='normal-div-3'></div>
          <div style={{width:"100%",margin:"auto", display:"flex", flexWrap:"wrap",justifyContent:"flex-start"}}>
            <p style={{color:"white",margin:"30px"}}>IIFM</p>
            <p style={{color:"white",margin:"30px"}}>NCFM Drivatives</p>
            <p style={{color:"white",margin:"30px"}}>FIREFISH</p>
            <p style={{color:"white",margin:"30px"}}>PRIMARY OLYMPIAD</p>
            <p style={{color:"white",margin:"30px"}}>WORLD GK OLYMPIAD</p>
            <p style={{color:"white",margin:"30px"}}>INTERNATIONAL FINANCE OLYMPIAD</p>
            <p style={{color:"white",margin:"30px"}}>GLOBAL ECONOMICS OLYMPIAD</p>
            <p style={{color:"white",margin:"30px"}}>GLOBAL OLYMPIAD ON APTITUDE</p>
          </div>

        </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-evenly", position:"sticky",bottom:"0",zIndex:"1000", backgroundColor:"white"}}>
        <p style={{color:"rgb(27, 27, 112)"}}> Copyright Paritosh || All right Reserved</p>
        <p style={{color:"rgb(27, 27, 112)"}}>+91-9565577776</p>
        <p style={{color:"rgb(27, 27, 112)"}}>paritoshchowdhury6264@gmail.com</p>
      </div>


    </div>
  );
}

export default App;
