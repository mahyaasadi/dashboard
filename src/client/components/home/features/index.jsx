import React, {useEffect} from "react";
import { IMG, IMG01, IMG02, IMG03, IMG04, IMG05, IMG06 } from "./img.jsx";
//slider
import Slider from "react-slick";

import AOS from "aos";
import "aos/dist/aos.css";


  const HomeFeatures =(props)=>{
 
    
    //Aos

   useEffect(() => {
    AOS.init({duration: 1200,
      once: true});  
    
  }, []);

    const settings = {

      dots: true,
			infinite: true,
			centerMode: false,
			slidesToShow: 1,
			speed: 500,
			variableWidth: true,
			arrows: false,
			autoplay:false,
			rtl: true,

      responsive: [
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              
            }
        },
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              
            }
        }
    ]
    };
    return (
      <section className="section section-features">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 features-img aos" data-aos="fade-up">
              <img src={IMG} className="img-fluid" alt="Feature" />
            </div>
            <div className="col-md-7">
              <div className="section-header aos" data-aos="fade-up">
                <h2 className="mt-2">Availabe Features in Our Clinic</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </p>
              </div>
              <div className="features-slider slider aos" data-aos="fade-up">
                <Slider {...settings}>
                  <div>
                    <div className="feature-item text-center">
                      <img src={IMG01} className="img-fluid" alt="Feature" />
                      <p>Patient Ward</p>
                    </div>
                  </div>
                  <div>
                    <div className="feature-item text-center">
                      <img src={IMG02} className="img-fluid" alt="Feature" />
                      <p>Test Room</p>
                    </div>
                  </div>
                  <div>
                    <div className="feature-item text-center">
                      <img src={IMG03} className="img-fluid" alt="Feature" />
                      <p>ICU</p>
                    </div>
                  </div>
                  <div>
                    <div className="feature-item text-center">
                      <img src={IMG04} className="img-fluid" alt="Feature" />
                      <p>Laboratory</p>
                    </div>
                  </div>
                  <div>
                    <div className="feature-item text-center">
                      <img src={IMG05} className="img-fluid" alt="Feature" />
                      <p>Operation</p>
                    </div>
                  </div>
                  <div>
                    <div className="feature-item text-center">
                      <img src={IMG06} className="img-fluid" alt="Feature" />
                      <p>Medical</p>
                    </div>
                  </div>

                  <div>
                    <div className="feature-item text-center">
                      <img src={IMG01} className="img-fluid" alt="Feature" />
                      <p>Patient Ward</p>
                    </div>
                  </div>
                  <div>
                    <div className="feature-item text-center">
                      <img src={IMG02} className="img-fluid" alt="Feature" />
                      <p>Test Room</p>
                    </div>
                  </div>
                  <div>
                    <div className="feature-item text-center">
                      <img src={IMG03} className="img-fluid" alt="Feature" />
                      <p>ICU</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default HomeFeatures;
