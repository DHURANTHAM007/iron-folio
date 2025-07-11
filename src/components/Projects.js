import React from 'react';
import { FaBook, FaGamepad, FaFirefox, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projectsData = [
    {
        icon: <FaBook className="text-5xl text-iron-red" />,
        title: "LEON",
        description: "An original narrative blending noir-style storytelling, emotional grit, and cinematic tension. LEON explores isolation, loyalty, and silent revolutions — told through vivid scenes and sharp prose.",
        tags: ["Original Story", "Narrative Writing", "Drama", "Cinematic", "Medium Series"],
        liveLink: "https://medium.com/@anjosh753",
        liveText: "Read on Medium"
    },
    {
        icon: <FaGamepad className="text-5xl text-iron-red" />,
        title: "Tic Tac Toe",
        description: "Interactive browser-based Tic Tac Toe game.",
        tags: ["HTML", "CSS", "JavaScript", "Game"],
        liveLink: "https://dhurantham007.github.io/Tic-Tack-Toe/",
        codeLink: "https://github.com/DHURANTHAM007/Tic-Tack-Toe"
    },
    {
        icon: <FaFirefox className="text-5xl text-iron-red" />,
        title: "Mozilla Splash Page",
        description: "A demo project cloning Mozilla's home page.",
        tags: ["HTML", "CSS", "Responsive", "Clone"],
        liveLink: "https://dhurantham007.github.io/Mozilla_Splashpage/",
        codeLink: "https://github.com/DHURANTHAM007/Mozilla_Splashpage"
    },
];

const ProjectCard = ({ project }) => (
    <div className="tech-card rounded-lg overflow-hidden flex flex-col">
        <div className="h-48 bg-gradient-to-br from-iron-red/20 to-iron-gold/20 flex items-center justify-center">
            {project.icon}
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => <span key={tag} className="project-tag text-xs px-2 py-1 rounded-full">{tag}</span>)}
            </div>
            <div className="flex space-x-4 mt-auto">
                {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2 rounded-md text-sm inline-flex items-center">
                        <FaExternalLinkAlt className="mr-2" /> {project.liveText || 'Live Demo'}
                    </a>
                )}
                {project.codeLink && (
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2 rounded-md text-sm inline-flex items-center">
                        <FaCode className="mr-2" /> View Code
                    </a>
                )}
            </div>
        </div>
    </div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative bg-darker">
            <div className="tech-line w-full mb-16"></div>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl tech-font font-bold text-center mb-16 tech-heading">PROJECT ARCHIVES</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map(p => <ProjectCard key={p.title} project={p} />)}
                </div>
            </div>
        </section>
    );
};

export default Projects;