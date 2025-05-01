/* eslint-disable react/no-unescaped-entities */

"use client";
import React from "react";
import Image from "next/image";

export default function Story() {
    return (
        <> 
        <div className="bg-[#f6f5f0] text-[#004459]">
            <header className="pt-40 text-center py-16 px-6 bg-amber-100 shadow-md">
                <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">Liz's Story</h1>
                <h2 className="text-lg lg:text-xl max-w-2xl mx-auto">
                When you viewed the picture, what did you see?
                </h2>
            </header>
        </div>
        
        <div className="text-center lg:text-left lg:mb-0 px-6 py-4 lg:px-12 text-[#004459]">
            <p className = "text-lg lg:text-xl max-w-2xl mx-auto">
            <Image src={"/background.jpg"} alt="Liz Myska" className="mx-auto mb-4 rounded-md" width={1000} height={800} />
            My name is Liz Myska. I am the Liz M of IDEALIZM.   
            <br /> <br />
            Here is my sighted response to the question “what do you see in this photo?" 
            <br /> <br />
            “I see a street scape.  There is a crosswalk and a pedestrian.” 
            <br /> <br />
            This is what first met my eye.  I would not necessarily have commented further unless prodded to do so. 
            <br /> <br />
            If prompted to examine the photo in more detail, I might have volunteered that the pedestrian was a blind person who was at risk of a collision with a motor vehicle.   
            <br /> <br />
            How did I know it was a blind person in the photo? The white cane that the pedestrian was holding <strong>identified</strong> her as a blind person.    
            <br /> <br />
            I might have commented further that the motor vehicle looks poised to turn into the path of the unsuspecting walker. I might have registered concern for the blind person’s safety.  Was she aware of the danger?  
            <br /> <br />
            I have just described what a sighted person might perceive and glean from this photo.     Visual information is taken in through our eyes,  channeled to our brains where it is processed and an image of the surrounding environment is formed.  Visual perception involves the process of making sense of what one’s eyes see. This happens automatically-for those with normal or correctible eyesight.
            <br /> <br />
            I was once one of those individuals. Not anymore.
            <br /> <br />
            It all  changed for me in 2008 when I became a VIP (visually impaired person) . 
            <br /> <br />
            I am the blind person depicted in these photos.
            <br /> <br />
            I have since learned about blindness and learned “how to be blind”.   I am eager to share my findings and my lived experience with you. Why? Because it will benefit us both.  
            <br /> <br />
            I am a lawyer by trade.  Over the many decades I have practiced law, I have learned how to interact and commune with others.  I bring my briefcase full of the lawyer skills I learned in school and in practice and which I have honed over time such as detailed analysis and research, critical thinking and problem solving to my new enterprise VISIONS Consulting L3C. 
            <br /> <br />
            Lawyers provide guidance. As a VIP I can provide you, your staff, and your organization guidance about “my population,” which is growing exponentially in number as time passes. I CAN GUIDE YOU IN ATTRACTING, INTERACTING , INVOLVING, AND INCLUDING    VIPs IN YOUR ORGANIZATION.

            </p>
            </div>
        </>
    );
}