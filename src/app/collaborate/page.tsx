"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

export default function Collaborate() {
  const points = [
    "Advocacy-centered approach to accessibility",
    "Community-led and impact-driven programs",
    "Customized guidance for diverse audiences",
    "Empowering people through practical tools and training",
  ];

  return (
    <div className="bg-[#f6f5f0] text-[#004459]">
      {/* Header */}
      <header className="pt-40 text-center py-16 px-6 bg-amber-100 shadow-md">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">With Us, Not For Us</h1>
        <p className="text-lg lg:text-xl max-w-2xl mx-auto">
          Be inspired by initiatives rooted in community, accessibility, and
          advocacy, and turn shared vision into collective action.
        </p>
      </header>

      {/* Text and Video */}
      <section className="gap-8 px-6 lg:px-24 py-12 items-start">
        <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
          <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0 py-4">
            Liz M cultivates social connections and champions community building.
            Whether it be to bring awareness, advocate, teach and tutor to
            foster understanding and sideline myths and stereotypes, Liz M seeks
            allies and alliances.
          </p>
        </div>
      
        {/* Video */}
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <div
            className="w-full"
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src="https://www.youtube.com/embed/nR8i8WTRJS8"
              title="Liz on CNN's United Shades of America"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Connecting the Dots Text */}
      <section
        className="gap-8 px-6 lg:px-24 py-16 items-start bg-white"
        data-aos="fade-up">

        <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-[#004459] mb-6">
            Connecting the Dots
          </h2>
          
          <div className="space-y-6">
            <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
              Liz M spotlights people, places and causes that
              would otherwise go unnoticed or be overlooked on her WCCA TV program{" "}
              <span className="italic">Connecting the Dots</span>.
            </p>
            <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
              Each session in the{" "}
              <span className="italic">Connecting the Dots</span> series is
              thoughtfully tailored to its audience, whether it&apos;s medical
              professionals, legal teams, custodial staff, or executive
              leadership. Sessions are customized to reflect real-world scenarios
              relevant to each group, exploring practical questions such as: How
              can a team member recognize signs of vision loss? What is the
              appropriate way to address and assist patrons who are visually
              impaired? When and how should staff offer help to ensure dignity and
              independence are respected?
            </p>
            <p> </p>  {/* Empty paragraph for spacing purposes */}
          </div>
        </div>
      
        {/* Connecting the Dots Videos */}
        <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12 space-y-6"
             data-aos="fade-up">
          <h3 className="text-2xl font-bold text-[#004459] mb-6">
            Conversations That Matter
          </h3>

          <div className="space-y-6">

            {/* Row 1 */}
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/4">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full rounded"
                    src="https://archive.org/embed/connectingthedots-155"
                    title="Outdoor Recreation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="w-full md:w-3/4 md:pl-4 mt-4 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">Outdoor Recreation</h3>
                <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
                  Liz M chats with Paul Jahnige of the Massachusetts Office of Outdoor Recreation to explore the 
                  topic of accessibility in outdoor spaces, with a focus on creating inclusive environments for 
                  individuals with disabilities.
                </p>
             </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/4">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full rounded"
                    src="https://archive.org/embed/connectingthedots-131"
                    title="UMass Chan Medical School"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="w-full md:w-3/4 md:pl-4 mt-4 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">UMass Chan Medical School</h3>
                <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
                  Liz M and her guest, Jill Terrien, Associate Dean at UMass Chan Medical School, discuss an activity 
                  where ten faculty members wore blindfolds to gain firsthand experience of what it&apos;s like to live with blindness.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/4">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full rounded"
                    src="https://archive.org/embed/connectingthedots-90"
                    title="West Boylston Street"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="w-full md:w-3/4 md:pl-4 mt-4 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">West Boylston Street</h3>
                <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0">
                  Liz M sits down with Carl Gomes to discuss ways to make the West Boylston Street area more 
                  recreationally friendly and accessible for residents.
                </p>
              </div>
            </div>

            <p className="text-[#004459] text-lg leading-relaxed mx-auto lg:mx-0 py-2">
              Click{" "}
              <a
                href="https://www.wccatv.com/video/connecting-the-dots"
                target="_blank"
                className="text-amber-600 hover:text-amber-800 underline transition">
                here
              </a>{" "}
              to find many other informative sessions of{" "}
              <span className="italic">Connecting the Dots</span>.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto py-12 px-6 text-center"
           data-aos="fade-up">
        <h2 className="text-3xl font-bold text-[#004459] mb-6 text-center">
          Our Approach in Action
        </h2>
        <ul className="space-y-4">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <CheckCircle className="text-amber-500 w-6 h-6 mt-1" />
              <span className="text-lg text-[#004459] leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
