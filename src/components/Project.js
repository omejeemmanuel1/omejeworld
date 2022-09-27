import React, {useState, useEffect} from 'react'
import sanityClient from '../client.js';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function Project() {
    const [projectData, setProjectData] = useState(null);
   
    useEffect(() => {
      sanityClient.fetch(`*[_type == "project"] {
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
      }`).then((data) => setProjectData(data)).catch(console.error);
      Aos.init({duration:3000})
    }, [])
  return (
    <div>
    <main id="project" className='overflow-hidden bg-[#0a192f] min-h-screen md:pt-[150px] pt-[100px]' name="projects">
      <section className='container mx-auto'>
          <h1 className='ml-4 text-2xl md:text-3xl font-bold inline border-b-4 text-gray-300 border-pink-600 font-orbitron'>My projects</h1>
          <h2 className='pl-4 text-gray-300 py-4 mb-12'>
            Welcome to my projects page!
            </h2>
          <section data-aos="fade-up" className='md:grid grid-cols-2 gap-8 mx-3'>
            {projectData && projectData.map((project, index)=> (
          <article className='relative rounded-lg shadow-md shadow-[#040c16] bg-[#f5f5f5] p-6  mb-10'>
            <h3 className='text-veryDarkBlue text-1xl md:text-3xl font-bold mb-2'>
              <a 
                  href={project.link} 
                  alt={project.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  {project.title}
              </a>
            </h3>
            <div className='text-veryDarkBlue text-xs space-x-4'>
              <span>
                <strong className='font-bold'>Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
              </span>
              <span>
                <strong className='font-bold'>Company</strong>:{" "}
                    {project.place}
              </span>
              <span>
                <strong className='font-bold'>Type</strong>:{" "}
                    {project.projectType}
              </span>
              <p className='my-6 text-lg text-veryDarkBlue '>
                    {project.description}
              </p>
              <a href={project.link} rel="noopener noreferrer" target="_blank" className='text-brightRed font-bold hover:text-pink-500 text-sm'
              >
                  View the project{" "}
              <span role="img" aria-label="right-pointer">
                  👉
              </span>
              </a>
            </div>
          </article>
          ))}
          </section>
      </section>
    </main>
    </div>
  )
}
