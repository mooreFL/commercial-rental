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
//coachmen
import coachmenext from "../images/coachmenext.png";
import coachmenint1 from "../images/coachmenint1.jpeg";
import coachmenint2 from "../images/coachmenint2.jpeg";
import coachmenint3 from "../images/coachmenint3.jpeg";
import coachmentlayout from "../images/coachmenlayout.jpg";

export default function Fleet() {
  return (
  <section className="fleet">
    <div className="fleet">
      <p className="fleet-p">Our Fleet</p>
      <div className="fleet-container">
        <div className="fleet-info">
          <p className="trailer-info">2021</p>
          <p className="trailer-info">Shasta</p>
          <p className="trailer-info">310k</p>
          <p className="trailer-info">Sleeps 7-9</p>
          <p className="trailer-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, sequi hic architecto delectus earum mollitia ducimus corrupti dignissimos sed. Quisquam, blanditiis molestias? Perspiciatis modi saepe, quas quidem at impedit repudiandae?</p>
          <Carousel showThumbs={true} infiniteLoop={true} emulateTouch={true}>
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
          <p className="trailer-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, laborum? Corrupti quia quibusdam pariatur ipsam optio non quod vel veritatis sit dignissimos quas, aliquid repellat delectus impedit similique, laudantium cupiditate.</p>
          <Carousel showThumbs={true} infiniteLoop={true} emulateTouch={true}>
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
          <p className="trailer-info">2021</p>
          <p className="trailer-info">Jayco</p>
          <p className="trailer-info">Jayflight 26BH</p>
          <p className="trailer-info">Sleeps 8</p>.
          <p className="trailer-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, laborum? Corrupti quia quibusdam pariatur ipsam optio non quod vel veritatis sit dignissimos quas, aliquid repellat delectus impedit similique, laudantium cupiditate.</p>
          <Carousel showThumbs={true} infiniteLoop={true} emulateTouch={true}>
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
        <div className="fleet-info">
          <p className="trailer-info">2016</p>
          <p className="trailer-info">Coachmen</p>
          <p className="trailer-info">Pursuit 33BH RV</p>
          <p className="trailer-info">Sleeps 8-9</p>.
          <p className="trailer-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, laborum? Corrupti quia quibusdam pariatur ipsam optio non quod vel veritatis sit dignissimos quas, aliquid repellat delectus impedit similique, laudantium cupiditate.</p>
          <Carousel showThumbs={true} infiniteLoop={true} emulateTouch={true}>
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
  </section>
  );
}
