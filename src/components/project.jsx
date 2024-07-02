import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";

const projectData = [
  {
    title: 'Learnquest - Edutech Platform',
    githubL: 'https://github.com/RishabhSri17/learnquest-Edtech_FullStackProj',
    extLink: '#',
    description: 'Multipage Edutech Platform for students and faculty with sign-in & sign-up options.',
    tech: [
      'ReactJs',
      'NodeJs',
      'TailwindCSS',
    ],
  },

  {
    title: 'ERP-Scraper',
    githubL: 'https://github.com/RishabhSri17/erp_scraper',
    extLink: '#',
    description: 'It fetches the Unique-Id and Result from ERP - MANIT. ',
    tech: [
      'Javascript',
      'Axios',
    ],
  },

  {
    title: 'Generate GIPHY ',
    githubL: 'https://github.com/RishabhSri17/GenerateGiphy',
    extLink: 'generate-giphy.vercel.app/',
    description: 'Random and Tag given Meme generator based on GIPHY API.',
    tech: [
      'ReactJS',
      'TailwindCSS',
    ],
  },

  {
    title: 'Shopping Cart',
    githubL: 'https://github.com/RishabhSri17/ShoppingCart',
    extLink: 'hopping-cart-rose-three.vercel.app',
    description: 'Webpage for Shopping Website having Cart and Menu pages.',
    tech: [
      'ReactJS',
      'TailwindCSS',
    ],
  },

  {
    title: 'Blog Web',
    githubL: 'https://github.com/RishabhSri17/Blogweb',
    extLink: 'blogweb-mocha.vercel.app',
    description: 'Blog website having feature of Tag Mapped Blogs Article.',
    tech: [
      'ReactJS',
      'TailwindCSS',
    ],
  },

];

const Projects = () => {
  return (
    <div className="px-10 mt-8 mb-4 flex flex-col space-y-4 ml-4">
      <div className="flex space-x-2 items-center text-xl">
        <div className="space-mono-regular text-customTeal ">03. </div><div className="roboto-regular font-bold text-customTeal">Some Things I've Built</div><div className="w-[290px]"><hr /></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-3">
        {projectData.map((project, index) => (
          <div key={index} className="bg-customBlue2 min-h-[350px] rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-4 top-1">
              <div className="text-customTeal">
                <FaRegFolderOpen size={40} />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2 text-customLightBlue">
                  <a className="hover:text-customTeal" href={project.githubL} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                  </a>
                  {project.extLink && (
                    <a className="hover:text-customTeal" href={project.extLink} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <h3 className="py-4 text-2xl font-bold text-customLightBlue hover">{project.title}</h3>

            <p className="py-4 text-gray-400 text-sm">{project.description}</p>
            <div className="flex flex-wrap mt-4 bottom-1">
              {project.tech.map((tech, index) => (
                <span key={index} className="px-3 py-1 mr-2 text-xs font-medium text-customTeal space-mono-regular">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Projects;