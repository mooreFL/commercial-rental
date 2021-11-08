import React from "react";
import "../styles/Reviews.css"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Reviews() {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={10000}
    >
      <div>
        <div className="myCarousel">
          <h3 className="review-name">Catherine</h3>
          <p>
            "We were very happy with our RV rental experience. The RV was very
            clean and comfortable and well maintained. David was thoughtful and
            we communicated well throughout the booking experience. Nothing was
            too much trouble. A good experience all round."
          </p>
        </div>
      </div>

      <div>
        <div className="myCarousel">
          <h3 className="review-name">Lauren</h3>
          <p>
            "David was awesome from start to finish, guiding us through our
            first hitching/unhitching and towing experience and the RV itself
            was in excellent condition, super clean and great decoration touches
            to make it feel more like a well cared-for home, highly recommended
            and thanks again!"
          </p>
        </div>
      </div>

      <div>
        <div className="myCarousel">
          <h3 className="review-name">Diego</h3>
          <p>
          "Excellent host! really amazing experience. I will rent again for sure."
          </p>
        </div>
      </div>
    </Carousel>
  );
}
