import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="group block">
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4 text-left">
        <h3 className="text-lg font-medium text-black group-hover:text-brand-muted transition-colors duration-300 font-sans">{project.title}</h3>
        <p className="text-sm text-brand-muted mt-1 transition-all duration-300 group-hover:pl-1">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">&rarr; </span>
            {project.category}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;