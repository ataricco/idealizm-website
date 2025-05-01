import React from "react";
import { useLandingPageFinal } from "@/contexts/LandingPageContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Footer({ deviceType }: { deviceType: string }) {
  const { final } = useLandingPageFinal();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    final && (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Idealizm. All rights reserved.
          </p>
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={deviceType !== "mobile" ? true : false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            deviceType={deviceType}
            itemClass="carousel-item-padding-80-px text-left"
            className="max-w-xl mx-auto pt-10 pb-5"
          >
            <div>
              <h1>
                “Walking with WalkFit has changed the way I experience my city.
                I feel safe, supported, and part of a wonderful community that
                truly sees me.”
              </h1>
              <p className="font-bold">— Lena M., Worcester Resident</p>
            </div>
            <div>
              <h1>
                “Before WalkFit, I rarely left my house alone. Now, I look
                forward to our weekly walks. It&apos;s more than exercise —
                it&apos;s freedom.”
              </h1>
              <p className="font-bold">— Derrick R., VIP Participant</p>
            </div>
            <div>
              <h1>
                “The first time I walked blindfolded, I realized how much I take
                sight for granted. Volunteering with WalkFit opened my eyes in a
                completely different way.”
              </h1>
              <p className="font-bold">— Jordan S., Volunteer Guide</p>
            </div>
            <div>
              <h1>
                “Guiding someone for the first time was a little nerve-wracking,
                but the training and the people made me feel comfortable
                quickly. I&apos;ve made friendships I&apos;ll never forget.”
              </h1>
              <p className="font-bold">— Priya T., Volunteer</p>
            </div>
          </Carousel>
        </div>
      </footer>
    )
  );
}
