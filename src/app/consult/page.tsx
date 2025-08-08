/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

export default function Consult() {
  return (
    <div className="bg-[#f6f5f0] text-[#004459]">
      {/* Header */}
      <header className="pt-40 text-center py-16 px-6 bg-amber-100 shadow-md">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
          Insight Beyond Sight - Accessibility Consultant
        </h1>
        <p className="text-lg lg:text-xl max-w-2xl mx-auto">
          Empowering audiences to create spaces that work for everyone — especially the non-sighted.
        </p>
      </header>

      <section className="gap-8 px-6 lg:px-24 py-16 items-start">
        <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
          <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
            Through my VISIONS enterprise, I, Liz M, offer customized trainings, engaging programs, and expert 
            consulting on a fee-for-service basis. With deep subject matter expertise, I provide thoughtful analysis 
            and strategic guidance across disciplines and settings.  My approach is hands-on and adaptive:  
            I begin by identifying and clearly articulating the core issues, then design personalized experiences tailored 
            to the specific needs of the occasion, organization, population, or professional field.
          </p>
        </div>

        {/* Video Documentary - Let's Keep Pedestrians Safe Video */}
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <div
            className="w-full"
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src="https://archive.org/embed/interview-84"
              title="Liz M Interview - Let's Keep Pedestrians Safe"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Workshop Text */}
      <section
        className="gap-8 px-6 lg:px-24 py-16 items-start bg-white"
        data-aos="fade-up">

        <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12 space-y-6">
          <h2 className="text-3xl font-bold text-center text-[#004459] mb-6">
            Workshops
          </h2>
          <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
            Liz M&apos;s custom-designed, hands-on workshops offer dynamic opportunities to learn, interact, and build skills
            in a fun, supportive environment. These pint-sized, discipline-specific sessions are designed to bring people
            together, whether you&apos;re collaborating with peers or connecting with new faces.</p>

          <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
            Each workshop is built around a theme we develop together. You can plan a single session or a series of trainings
            focused on learning about, from, and with subject matter experts.</p>

          <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
            Whether you prefer a natural setting — like an outdoor recreation area — or a built environment, such as a healthcare
            facility, Liz M will guide the process using her 
            signature <strong>ALL</strong> Principle:  <strong>A</strong>sk, <strong>L</strong>isten, <strong>L</strong>earn.</p>

          <p> </p>  {/* Empty paragraph for spacing purposes */}
        </div>
     
        {/* Recent Offerings */}
        <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12 space-y-6"
             data-aos="fade-up">
          <h3 className="text-2xl font-bold text-[#004459] mb-6">
            Highlights From Our Recent Work Include
          </h3>

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/4">
              <img src="Consult-MassDOTTraining.jpg" alt="Mass DOT" className="w-full h-auto rounded" />
            </div>
            <div className="w-full md:w-3/4 md:pl-8 mt-4 md:mt-0">
              <h3 className="text-xl font-semibold mb-2">STOP!  THE RED LIGHT&apos;S ON - Streetscapes Through a New Lens</h3>
              <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
                Traffic and highway engineers experienced streetscapes up close and personal, gaining firsthand
                perspective on the challenges and considerations faced by visually impaired pedestrians.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/4">
              <img src="UMassChanCampus.webp" alt="Dermatology Clinic" className="w-full h-auto rounded" />
            </div>
            <div className="w-full md:w-3/4 md:pl-8 mt-4 md:mt-0">
              <h3 className="text-xl font-semibold mb-2">WHAT WE DON&apos;T SEE - Experience a Medical Visit Through the Eyes of a VIP</h3>
              <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
                Liz M and team provided on-site sessions at dermatology clinics for attending physicians and medical students.
                During these unique appointments, participants experienced a medical visit from the perspective of a visually impaired person.
                This immersive learning opportunity deepened empathy, enhanced patient-centered care, and encouraged more inclusive clinical practices.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/4">
              <img src="Consult-ParatransitVehicle.png" alt="Paratransit Vehicle" className="w-full h-auto rounded" />
            </div>
            <div className="w-full md:w-3/4 md:pl-8 mt-4 md:mt-0">
              <h3 className="text-xl font-semibold mb-2">I WON&apos;T RIDE; DON&apos;T ASK ME - Empowering Travel Trainers and Mobility Specialists</h3>
              <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
                Travel trainers and transportation/mobility specialists gained valuable insight into the lived experiences of visually
                impaired individuals, enhancing their ability to design safer, more inclusive transit solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="gap-8 px-6 lg:px-24 py-16 items-start"
        data-aos="fade-up">

       

  <div className="max-w-4xl mx-auto px-6 py-4 text-[#004459] font-medium">
  <h2 className="text-3xl font-bold text-center text-[#004459] mb-6">
            Have an IDEA for a Liz M session?
            </h2>

  <div className="grid grid-cols-[2rem_1fr] gap-x-2 gap-y-2 text-lg max-w-full">

    <span className="text-4xl font-bold text-amber-600">I</span>
    <span>
      dentify (and from there innovate, integrate, interact, involve,
      intersect, interrogate, influence, imprint)
    </span>

    <span className="text-4xl font-bold text-amber-600">D</span>
    <span>
      escribe (and from here deduct, deduce, define, differentiate,
      detail, design)
    </span>

    <span className="text-4xl font-bold text-amber-600">E</span>
    <span>
      ngage (and do so by educating, exhibiting, explaining,
      empowering)
    </span>

    <span className="text-4xl font-bold text-amber-600">A</span>
    <span>ccomplish</span>

  </div>
</div>


           
  
      
      </section>
    </div>
  );
}
