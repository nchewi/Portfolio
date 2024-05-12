"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>SQL</li>
        <li>JavaScript</li>
        <li>Data Analysis</li>
        <li>Python</li>
        <li>React</li>
        <li>CyberSecurity</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SoloLearn Academy</li>
        <li>Cross River University of Technology</li>
        <li>Cisco Networking Academy</li>
        <li>DataCamp</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Analysis, SoloLearn and Udacity</li>
        <li>Data Engineer, DataCamp</li>
        <li>Web Development, SoloLearn</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) =>{
    startTransition(()=>{
      setTab(id);
    });
  };
  return (
    <section className="max-container padding-container text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px16">
        <Image
            src="/about-image.png"
            width={500}
            height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4 border-b border-purple-500">About Me</h2>
          <p className="text-base lg:text-lg">
            A passionate tech enthusiast with a knack for turning data into insights and crafting immersive web experiences. With a background in data analysis, I thrive on dissecting complex datasets to uncover valuable trends and patterns that drive informed decision-making. In addition to my analytical prowess, I am well-versed in web development, proficient in languages such as HTML, CSS, JavaScript and frameworks like React and Next Js.<br/>If you're looking for a data-driven problem-solver with a passion for crafting exceptional digital experiences, look no further. Let's connect and create something remarkable together!  
          </p>
          <div className="flex flex-row mt-8">
            <TabButton 
              selectTab={()=> handleTabChange("skills")} 
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton> 

            <TabButton 
              selectTab={()=> handleTabChange("education")} 
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

            <TabButton 
              selectTab={()=> handleTabChange("certifications")} 
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div> 
    </section>
  )
}

export default AboutSection