"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'


const projectsData =[
    {
        id: 1,
        title: "Travel App",
        description:"A travel guide App",
        image:"/projects/1.png",
        tag:["All", "Mobile"],
        gitUrl:"/",
        previewUrl:"/",
    },
    {
        id: 2,
        title: "Autoroll",
        description:"An Automobile blog App",
        image:"/projects/6.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    },
    {
        id: 3,
        title: "Portfolio",
        description:"Personal Portfolio",
        image:"/projects/portfolio.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    },
    {
        id: 4,
        title:"CallyStone",
        description:"An E-commerce for jewelries",
        image:"/projects/6.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    },
    {
        id: 5,
        title:"Inside Calabar",
        description:"A blog about Cross River lifestyle",
        image:"/projects/6.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/",
    },
    {
        id: 6,
        title:"Clone Website",
        description:"social media clone site",
        image:"/projects/6.png",
        tag:["All", "Mobile"],
        gitUrl:"/",
        previewUrl:"/",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

  return (
    <section className="max-container padding-container" id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"}
            />
             <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"}
            />
             <ProjectTag 
                onClick={handleTagChange} 
                name="Mobile" 
                isSelected={tag === "Mobile"}
            />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project) => (
            <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
            ))}
        </div>
    </section>
  )
}

export default ProjectsSection