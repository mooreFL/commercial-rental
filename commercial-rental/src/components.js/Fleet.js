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
//2016jayco
import jaycoext from "../images/jaycoext.jpeg";
import jaycoint1 from "../images/jaycoint1.jpeg";
import jaycoint2 from "../images/jaycoint2.jpeg";
import jaycoint3 from "../images/jaycoint3.jpeg";
import jaycoint4 from "../images/jaycoint4.jpeg";
import jaycolayout from "../images/jaycolayout.jpg";

//2021jayco
import jayco174ext from "../images/jayco174ext.jpg";
import jayco174ext2 from "../images/jayco174ext2.jpg";
import jayco174int1 from "../images/jayco174int1.jpg";
import jayco174int2 from "../images/jayco174int2.jpg";
import jayco174int3 from "../images/jayco174int3.jpg";
import jayco174int4 from "../images/jayco174int4.jpg";
import jayco174int5 from "../images/jayco174int5.jpg";

//2018forestriver
// import forestext1 from "../images/forestext1.jpg";
// import forestint1 from "../images/forestint1.jpeg";
// import forestint2 from "../images/forestint2.jpeg";
// import forestint3 from "../images/forestint3.jpeg";
// import forestint4 from "../images/forestint4.jpeg";
// import forestint5 from "../images/forestint4.jpeg";
// import forestint6 from "../images/forestint6.jpeg";
// import forestlayout from "../images/forestlayout.jpg";
import newforestext1 from "../images/newforestext1.jpeg";
import newforestext2 from "../images/newforestext2.jpeg";
import newforestint1 from "../images/newforestint1.jpeg";
import newforestint2 from "../images/newforestint2.jpeg";
import newforestint3 from "../images/newforestint3.jpeg";


//2020forestrivergreywolf
import imageplaceholder from "../images/imageplaceholder.png";


export default function Fleet() {
  return (
    <section className="fleet" id="fleet">
      <div className="fleet">
        <p className="fleet-p">Our <span className="title-splash">Fleet</span></p>
        <div className="fleet-container">
          <div className="fleet-info">
          <div className="card-stat-container">
            <p className="trailer-info-header year"><span className="orange-splash">Year:</span> 2021</p>
            <p className="trailer-info-header make"><span className="orange-splash">Make:</span> Shasta Oasis 310k</p>
            <p className="trailer-info-header capacity"><span className="orange-splash">Capacity:</span> Sleeps 7-9</p>
            </div>
            <p className="trailer-info">
              If you are looking for the perfect RV experience with all the
              accommodations of being at home. This is the right rental for you
              and your family, spacious and comfortable, outside speakers and
              plenty of storage among other features to make your stay more
              pleasant. Fully stocked unit new memory foam mattress, outdoor
              stereo and fridge. Has one queen bed and two twin bunks. Couch that
              coverts to another full bed. Led lights outside under Awning. Three
              smart Flat screen tvs. Pets are welcome with an additional fee.
            </p>
            <Carousel showThumbs={true} infiniteLoop={true} emulateTouch={true}>
              <div className="trailerImages">
                <img src={shastaext} alt="trailer1" />
              </div>
              <div className="trailerImages">
                <img src={shastaint1} alt="trailer2" />
              </div>
              <div className="trailerImages">
                <img src={shastaint2} alt="trailer3" />
              </div>
              <div className="trailerImages">
                <img src={shastaint3} alt="trailer4" />
              </div>
              <div className="trailerImages">
                <img src={shastaint4} alt="trailer5" />
              </div>
              <div className="trailerImages">
                <img src={shastaint5} alt="trailer6" />
              </div>
              <div className="trailerImages">
                <img src={shastalayout} alt="trailer7" />
              </div>
            </Carousel>
          </div>
          <div className="fleet-info">
          <div className="card-stat-container">
            <p className="trailer-info-header year"><span className="orange-splash">Year:</span> 2016</p>
            <p className="trailer-info-header make"><span className="orange-splash">Make:</span> Jayco Jayflight 26BH</p>
            <p className="trailer-info-header capacity"><span className="orange-splash">Capacity:</span> Sleeps 6-7</p>
            </div>
            <p className="trailer-info">
              If you are looking for the perfect RV experience with all the
              accommodations of being at home. This is the right rental for you
              and your family, spacious and comfortable, outside speakers and
              plenty of storage among other features to make your stay more
              pleasant. Fully stocked unit new memory foam mattress, outdoor
              stereo and fridge. Has one queen bed and two twin bunks. Couch that
              coverts to another full bed. Led lights outside under Awning. Two
              smaller Flat screens tvs. Pets are welcome with an additional fee.
            </p>
            <Carousel showThumbs={true} infiniteLoop={true} emulateTouch={true}>
              <div className="trailerImages">
                <img src={jaycoext} alt="trailer8" />
              </div>
              <div className="trailerImages">
                <img src={jaycoint1} alt="trailer9" />
              </div>
              <div className="trailerImages">
                <img src={jaycoint2} alt="trailer10" />
              </div>
              <div className="trailerImages">
                <img src={jaycoint3} alt="trailer11" />
              </div>
              <div className="trailerImages">
                <img src={jaycoint4} alt="trailer12" />
              </div>
              <div className="trailerImages">
                <img src={jaycolayout} alt="trailer13" />
              </div>
            </Carousel>
          </div>
          <div className="fleet-info">
          <div className="card-stat-container">
            <p className="trailer-info-header year"><span className="orange-splash">Year:</span> 2021</p>
            <p className="trailer-info-header make"><span className="orange-splash">Make:</span> Jayco Jayflight 174BH</p>
            <p className="trailer-info-header capacity"><span className="orange-splash">Capacity:</span> Sleeps 5</p>
            </div>
            <p className="trailer-info">
              If you are looking for the perfect RV experience with all the
              accommodations of being at home. This is the right rental for you
              and your family, spacious and comfortable, outside speakers and
              plenty of storage among other features to make your stay more
              pleasant. Fully stocked unit with brand new outdoor stereo and
              fridge. Has one queen bed, two twin bunks and couch that coverts to
              another full bed. Led lights outside under Awning. Pets are
              welcome with an additional fee.
            </p>
            <Carousel showThumbs={true} infiniteLoop={true} emulateTouch={true}>
              <div className="trailerImages">
                <img src={jayco174ext} alt="trailer14" />
              </div>
              <div className="trailerImages">
                <img src={jayco174ext2} alt="trailer15" />
              </div>
              <div className="trailerImages">
                <img src={jayco174int1} alt="trailer16" />
              </div>
              <div className="trailerImages">
                <img src={jayco174int2} alt="trailer17" />
              </div>
              <div className="trailerImages">
                <img src={jayco174int3} alt="trailer18" />
              </div>
              <div className="trailerImages">
                <img src={jayco174int4} alt="trailer18" />
              </div>
              <div className="trailerImages">
                <img src={jayco174int5} alt="trailer18" />
              </div>
            </Carousel>
          </div>
          <div className="fleet-info">
          <div className="card-stat-container">
            <p className="trailer-info-header year"><span className="orange-splash">Year:</span> 2018</p>
            <p className="trailer-info-header make"><span className="orange-splash">Make:</span> Forest River Salem FSX 207BH</p>
            <p className="trailer-info-header capacity"><span className="orange-splash">Capacity:</span> Sleeps 5</p>
            </div>
            <p className="trailer-info">
            If you are looking for the perfect RV experience with all the accommodations of being at home. This is the right rental for you and your family, spacious and comfortable,outside speakers and plenty of storage among other features to make your stay more pleasant.
            Fully stocked unit new memory foam mattress, outdoor stereo and fridge. Has one queen bed two twin bunks. Couch that coverts to another full bed. Led lights outside under Awning. Flat screens tvs with built in DVD player. Pets are welcome with +additional Fee.
            </p>
            <Carousel showThumbs={true} infiniteLoop={true} emulateTouch={true}>
              <div className="trailerImages">
                <img src={newforestext1} alt="trailer14" />
              </div>
              <div className="trailerImages">
                <img src={newforestext2} alt="trailer15" />
              </div>
              <div className="trailerImages">
                <img src={newforestint1} alt="trailer16" />
              </div>
              <div className="trailerImages">
                <img src={newforestint2} alt="trailer17" />
              </div>
              <div className="trailerImages">
                <img src={newforestint3} alt="trailer18" />
              </div>
            </Carousel>
          </div>
          <div className="fleet-info" id="fifth-trailer">
            <div className="card-stat-container"> 
            <p className="trailer-info-header year"><span className="orange-splash">Year:</span> 2020</p>
            <p className="trailer-info-header make"><span className="orange-splash">Make:</span> Forest River Grey Wolf 26DBH</p>
            <p className="trailer-info-header capacity"><span className="orange-splash">Capacity:</span> Sleeps 8 - 9</p>
            </div>
            <p className="trailer-info">
              If you are looking for the perfect experience with all the
              accommodations of being at home. This is the right rental for you
              and your family, outside speakers and plenty of storage among
              other features to make your stay more pleasant. Fully stocked unit
              new memory foam mattress. Has one queen bed two twin bunks. Couch that coverts to another full bed and an over the cab full
              bed; you can sleep 9 comfortably. Led lights outside under
              Awning. Two Flat screens tvs and outdoor tv. Both bunk beds
              have tv/dvd players great for the kids or adults. Pets are welcome
              with an additional pet fee.
            </p>
            <Carousel showThumbs={true} infiniteLoop={true} emulateTouch={true}>
              <div>
                <img src={imageplaceholder} alt="trailer14" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
