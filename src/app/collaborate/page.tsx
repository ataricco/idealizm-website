"use client";

import Link from "next/link";
import React from "react";
import PageHeader from "@/components/PageHeader";
import ContentBlock from "@/components/ContentBlock";
import AspectRatioMedia from "@/components/AspectRatioMedia";
import MediaTextRow from "@/components/MediaTextRow";

export default function Collaborate() {
  
  return (
    <div className="bg-surfaceCream text-blueText">
      {/* Header */}
      <PageHeader
        title={"With Us, Not For Us"}
        subtitle={
          "Be inspired by initiatives rooted in community, accessibility, and advocacy, and turn shared vision into collective action."
        }
      />

      {/* Text and Video */}
      <section className="gap-8 px-6 lg:px-24 py-12 items-start">
        <ContentBlock>
          <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0 py-4">
            Liz M cultivates social connections and champions community building.
            Whether it be to bring awareness, advocate, teach and tutor to
            foster understanding and sideline myths and stereotypes, Liz M seeks
            allies and alliances.
          </p>
        </ContentBlock>
      
        {/* Video */}
        <AspectRatioMedia>
          <iframe
            src="https://www.youtube.com/embed/nR8i8WTRJS8"
            title="Liz on CNN's United Shades of America"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatioMedia>
      </section>

      {/* Connecting the Dots Text */}
      <section
        className="gap-8 px-6 lg:px-24 py-16 items-start bg-white"
        data-aos="fade-up">

        <ContentBlock>
          <h2 className="text-3xl font-bold text-center text-blueText mb-6">
            Connecting the Dots
          </h2>
          
          <div className="space-y-6">
            <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0">
              Liz M spotlights people, places and causes that
              would otherwise go unnoticed or be overlooked on her WCCA TV program{" "}
              <span className="italic">Connecting the Dots</span>.
            </p>
            <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0">
              Each session in the{" "}
              <span className="italic">Connecting the Dots</span> series is
              thoughtfully tailored to its audience, whether it's medical
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
        </ContentBlock>
      
        {/* Connecting the Dots Videos */}
        <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12 space-y-6"
             data-aos="fade-up">
          <h3 className="text-2xl font-bold text-blueText mb-6">
            Conversations That Matter
          </h3>

          <div className="space-y-6">

            {/* Row 1 */}
            <MediaTextRow
              className="flex flex-col md:flex-row md:items-center"
              textContainerClassName="w-full md:w-3/4 md:pl-4 mt-4 md:mt-0"
              media={
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full rounded"
                    src="https://archive.org/embed/connectingthedots-155"
                    title="Outdoor Recreation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              }
              title={"Outdoor Recreation"}
            >
              <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0">
                Liz M chats with Paul Jahnige of the Massachusetts Office of Outdoor Recreation to explore the 
                topic of accessibility in outdoor spaces, with a focus on creating inclusive environments for 
                individuals with disabilities.
              </p>
            </MediaTextRow>

            {/* Row 2 */}
            <MediaTextRow
              className="flex flex-col md:flex-row md:items-center"
              textContainerClassName="w-full md:w-3/4 md:pl-4 mt-4 md:mt-0"
              media={
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full rounded"
                    src="https://archive.org/embed/connectingthedots-131"
                    title="UMass Chan Medical School"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              }
              title={"UMass Chan Medical School"}
            >
              <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0">
                Liz M and her guest, Jill Terrien, Associate Dean at UMass Chan Medical School, discuss an activity 
                where ten faculty members wore blindfolds to gain firsthand experience of what it&apos;s like to live with blindness.
              </p>
            </MediaTextRow>

            {/* Row 3 */}
            <MediaTextRow
              className="flex flex-col md:flex-row md:items-center"
              textContainerClassName="w-full md:w-3/4 md:pl-4 mt-4 md:mt-0"
              media={
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full rounded"
                    src="https://archive.org/embed/connectingthedots-90"
                    title="West Boylston Street"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              }
              title={"West Boylston Street"}
            >
              <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0">
                Liz M sits down with Carl Gomes to discuss ways to make the West Boylston Street area more 
                recreationally friendly and accessible for residents.
              </p>
            </MediaTextRow>

            <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0 py-2">
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

      {/* ReiMAgine Aging - Moving Forward */}
      <section className="gap-8 px-6 lg:px-24 py-16 items-start"
        data-aos="fade-up">

        <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-blueText mb-6">
            Moving Forward
          </h2>
          
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left: Paragraph */}
            <div className="flex-1 space-y-6">
              <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0">
                The audio series <span className="italic">ReiMAgine Aging</span> explores innovations that help 
                older adults thrive in Massachusetts by promoting age- and dementia-friendly communities. Robin
                Lipson, the Deputy Secretary of the Executive Office of Elder Affairs, narrates the challenges 
                adults face with transportation and mobility, highlighting the need for community engagement to 
                improve public transit for aging populations.
              </p>

              <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0">
                This episode features VIP Liz M, who adapted to vision loss by moving closer to essential services
                and engaging with Worcester&apos;s Accessibility Advisory Commission. Liz M partnered with an optometry 
                student to create &nbsp;
                <Link href="/commingle/walkfit" className="hover:text-amber-600"><strong>&quot;Walkfit,&quot;</strong></Link>&nbsp;
                a program partnering sighted individuals with visually impaired persons, fostering mutual learning 
                and relationship-building. Through practical examples like navigating busy crosswalks, Liz M 
                emphasizes that accessible infrastructure benefits everyone and advocates for slower traffic 
                to improve pedestrian safety and independence.
              </p>
            
              <p className="text-blueText text-lg leading-relaxed mx-auto lg:mx-0">
                Listen to the audio player to hear the segment featuring Liz M, or click{" "}
                <a
                  href="https://mahealthyagingcollaborative.org/reimagine-aging/forward-movement/"
                  target="_blank"
                  className="text-amber-600 hover:text-amber-800 underline transition">
                  here
                </a>{" "}
                for the full episode of {" "}
                <span className="italic">Moving Forward</span>.
              </p>
            </div>

            {/* Right: Image + Audio */}
            <div className="max-w-md mx-auto p-4">
              <img
                src="/MovingForwardTransportation.jpg"
                alt="ReiMAgine Aging - Moving Forward"
                className="w-full object-cover rounded-t-lg"
                style={{ marginBottom: 0 }}
              />

              <audio
                controls
                className="w-full rounded-b-lg"
                src="/ReImagineAging-20230921-liz.mp3"
                style={{ display: "block" }}
              >
              Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
