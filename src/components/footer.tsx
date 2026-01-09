import React from "react";
import { useLandingPageFinal } from "@/contexts/LandingPageContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { usePathname } from 'next/navigation'; 

export default function Footer({ deviceType }: { deviceType: string }) {
  const { final } = useLandingPageFinal();
  const pathname = usePathname();

  // Don't show footer on the homepage
  if (pathname === '/') return null;

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

  const testimonials = [
    {
      quote: "I felt safe because of the assistance of my guide - I don’t think I would have otherwise.",
      name: "Sighted Civil Engineer",
    },
    {
      quote: "I appreciated the opportunity to interact with different pedestrian push buttons and curb ramps to get a sense of what is useful and difficult for a VIP.",
      name: "Sighted Civil Engineer",
    },
    {
      quote: "These trainings have been invaluable.",
      name: "Sighted Civil Engineer",
    },
  ];

  return (
    final && (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
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
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="text-left">
                <h1>{testimonial.quote}</h1>
                <p className="font-bold">— {testimonial.name}</p>
              </div>
            ))}
          </Carousel>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} IdeaLizm. All rights reserved.
          </p>
        </div>
      </footer>
    )
  );
}
