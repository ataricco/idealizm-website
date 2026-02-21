import React from "react";
import { useLandingPageFinal } from "@/contexts/LandingPageContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { usePathname } from 'next/navigation'; 

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={() => onClick()}
      className="absolute left-2 z-10 flex items-center justify-center w-10 h-10 bg-slate-900 bg-opacity-80 text-white rounded-full hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors border border-transparent hover:border-white"
      aria-label="Previous testimonial"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomRightArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={() => onClick()}
      className="absolute right-2 z-10 flex items-center justify-center w-10 h-10 bg-slate-900 bg-opacity-80 text-white rounded-full hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors border border-transparent hover:border-white"
      aria-label="Next testimonial"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  );
};

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
      <footer className="bg-footerBg text-white py-4">
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
            deviceType={deviceType}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            itemClass="carousel-item-padding-80-px text-left px-16 sm:px-24"
            className="max-w-4xl mx-auto pt-10 pb-5"
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="text-left">
                <p className="text-xl">{testimonial.quote}</p>
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
