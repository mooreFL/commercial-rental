import React from "react";
import "../styles/Fleet.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//shasta
import shastaext from "../images/shastaext.jpeg";
import shastaint1 from "../images/shastaint1.jpeg";
import shastaint2 from "../images/shastaint2.jpeg";
import shastaint3 from "../images/shastaint3.jpeg";
import shastaint4 from "../images/shastaint4.jpeg";
import shastaint5 from "../images/shastaint5.jpeg";
import shastalayout from "../images/shastalayout.jpg";
//jayco
import jaycoext from "../images/jaycoext.jpeg";
import jaycoint1 from "../images/jaycoint1.jpeg";
import jaycoint2 from "../images/jaycoint2.jpeg";
import jaycoint3 from "../images/jaycoint3.jpeg";
import jaycoint4 from "../images/jaycoint4.jpeg";
import jaycolayout from "../images/jaycolayout.jpg";
//coachmen
import coachmenext from "../images/coachmenext.png";
import coachmenint1 from "../images/coachmenint1.jpeg";
import coachmenint2 from "../images/coachmenint2.jpeg";
import coachmenint3 from "../images/coachmenint3.jpeg";
import coachmentlayout from "../images/coachmenlayout.jpg";

export default function Fleet() {
  return (
    <div className="fleet">
      <p className="fleet-p">Our Fleet</p>
      <div className="fleet-container">
        <div className="fleet-info">
          <p className="trailer-info">2021</p>
          <p className="trailer-info">Shasta</p>
          <p className="trailer-info">310k</p>
          <p className="trailer-info">Sleeps 7-9</p>
          <p className="trailer-info">If you are looking for the perfect RV experience with all the accommodations of being at home...This is the right rental for you and your family, spacious and comfortable ,outside speakers and plenty of storage among other features to make your stay more pleasant. Fully stocked unit new memory foam mattress outdoor stereo and fridge. Has one queen bed two twin bunks and couch that coverts to another full bed.Led lights outside under Awning. Three smart Flat screens tvs. Pets are welcome there is a Fee</p>
          <Carousel showThumbs={false} infiniteLoop={true} emulateTouch={true}>
            <div>
              <img src={shastaext} alt="trailer1" />
            </div>
            <div>
              <img src={shastaint1} alt="trailer2" />
            </div>
            <div>
              <img src={shastaint2} alt="trailer3" />
            </div>
            <div>
              <img src={shastaint3} alt="trailer4" />
            </div>
            <div>
              <img src={shastaint4} alt="trailer5" />
            </div>
            <div>
              <img src={shastaint5} alt="trailer6" />
            </div>
            <div>
              <img src={shastalayout} alt="trailer7" />
            </div>
          </Carousel>
        </div>
        <div className="fleet-info">
          <p className="trailer-info">2016</p>
          <p className="trailer-info">Jayco</p>
          <p className="trailer-info">Jayflight 26BH</p>
          <p className="trailer-info">Sleeps 6-7</p>
          <p className="trailer-info">If you are looking for the perfect RV experience with all the accommodations of being at home...This is the right rental for you and your family, spacious and comfortable,outside speakers and plenty of storage among other features to make your stay more pleasant. Fully stocked unit new memory foam mattress outdoor stereo and fridge. Has one queen bed two twin bunks and couch that coverts to another full bed.Led lights outside under Awning. Two smaller Flat screens tvs. Pets are welcome there is a Fee.</p>
          <Carousel showThumbs={false} infiniteLoop={true} emulateTouch={true}>
            <div>
              <img src={jaycoext} alt="trailer8" />
            </div>
            <div>
              <img src={jaycoint1} alt="trailer9" />
            </div>
            <div>
              <img src={jaycoint2} alt="trailer10" />
            </div>
            <div>
              <img src={jaycoint3} alt="trailer11" />
            </div>
            <div>
              <img src={jaycoint4} alt="trailer12" />
            </div>
            <div>
              <img src={jaycolayout} alt="trailer13" />
            </div>
          </Carousel>
        </div>
        <div className="fleet-info">
          <p className="trailer-info">2016</p>
          <p className="trailer-info">Coachmen</p>
          <p className="trailer-info">Pursuit 33BH Class-A RV</p>
          <p className="trailer-info">Sleeps 8-9</p>.
          <p className="trailer-info">If you are looking for the perfect RV experience with all the accommodations of being at home...This is the right rental for you and your family, spacious and comfortable,outside speakers and plenty of storage among other features to make your stay more pleasant. Fully stocked unit new memory foam mattress . Has one queen bed two twin bunks and couch that coverts to another full bed and an over the cab full bed as well you can sleep 9 comfortably .Led lights outside under Awning. Two Flat screens tvs and outdoor tv and both bunk beds have tv/dvd players great for the kids or adults.. Pets are welcome there is a per pet fee.</p>
          <Carousel showThumbs={false} infiniteLoop={true} emulateTouch={true}>
            <div>
              <img src={coachmenext} alt="trailer14" />
            </div>
            <div>
              <img src={coachmenint1} alt="trailer15" />
            </div>
            <div>
              <img src={coachmenint2} alt="trailer16" />
            </div>
            <div>
              <img src={coachmenint3} alt="trailer17" />
            </div>
            <div>
              <img src={coachmentlayout} alt="trailer18" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
