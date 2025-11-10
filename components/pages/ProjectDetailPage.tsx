import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../../data';
import AnimateOnScroll from '../AnimateOnScroll';

const SectionWithGallery: React.FC<{ title: string; children: React.ReactNode; images: string[]; imagePosition?: 'left' | 'right' }> = ({ title, children, images, imagePosition = 'right' }) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const imageColOrder = imagePosition === 'right' ? 'md:order-2' : 'md:order-1';
  const contentColOrder = imagePosition === 'right' ? 'md:order-1' : 'md:order-2';

  return (
    <AnimateOnScroll className="grid md:grid-cols-12 gap-12 my-16 md:my-24 items-start">
      <div className={`md:col-span-7 ${imageColOrder}`}>
        <div className="bg-gray-100 aspect-[4/3]">
          <img src={activeImage} alt={`${title} active view`} className="w-full h-full object-cover"/>
        </div>
      </div>
      <div className={`md:col-span-5 ${contentColOrder}`}>
        <h2 className="text-xl font-bold uppercase tracking-wider mb-4 text-black font-sans">{title}</h2>
        <div className="text-gray-700 leading-relaxed space-y-4 mb-8">
          {children}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {images.map((img, index) => (
            <button key={index} onClick={() => setActiveImage(img)} className={`bg-gray-100 aspect-square transition-opacity duration-300 ${activeImage === img ? 'opacity-100 border-2 border-black' : 'opacity-50 hover:opacity-100'}`}>
               <img src={img} alt={`${title} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  )
};

const SectionWithCenteredTextAndImage: React.FC<{ title: string; children: React.ReactNode; image: string; }> = ({ title, children, image }) => {
    return (
        <AnimateOnScroll className="my-16 md:my-24">
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-xl font-bold uppercase tracking-wider mb-4 text-black font-sans">{title}</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
            </div>
            <div className="bg-gray-100 aspect-video">
                <img src={image} alt={`${title} full view`} className="w-full h-full object-cover"/>
            </div>
        </AnimateOnScroll>
    );
};

const renderContent = (content: string | string[] | undefined, isProcess: boolean) => {
    if (isProcess && Array.isArray(content)) {
        return (
            <ul className="space-y-6 border-l-2 border-brand-muted pl-8">
                {content.map((step, i) => (
                    <li key={i} className="relative text-gray-800">
                        <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full bg-brand-muted ring-4 ring-brand-light"></span>
                        {step}
                    </li>
                ))}
            </ul>
        );
    }
    if (typeof content === 'string') {
        return <p>{content}</p>;
    }
    return null;
}


const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const projectIndex = projects.findIndex(p => p.id === projectId);

  const project = useMemo(() => projectIndex !== -1 ? projects[projectIndex] : null, [projectIndex]);

  if (!project) {
    return <div className="text-center py-20">Project not found. <Link to="/projects" className="text-black underline">Go back to projects</Link></div>;
  }
  
  const allProjectImages = [project.image, ...(project.images || [])];
  
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const isPdf = project.externalLink?.endsWith('.pdf');
  const linkText = isPdf ? 'Download PDF' : 'Visit Website';
  
  return (
    <div>
      <header className="relative h-[60vh] flex items-center justify-center text-center text-brand-light overflow-hidden">
        <img src={project.image} alt={`${project.title} background`} className="absolute inset-0 w-full h-full object-cover blur-sm scale-110" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter my-2 uppercase font-sans">{project.title}</h1>
            <p className="text-lg md:text-xl mt-4 opacity-90">{project.subtitle}</p>
          </AnimateOnScroll>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimateOnScroll>
          <button onClick={() => navigate('/projects')} className="mb-12 text-brand-muted hover:text-black transition-colors uppercase text-sm tracking-wider">&larr; All Projects</button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 border-b border-gray-200 pb-16">
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-brand-muted">Details</h3>
                <div className="space-y-2 text-sm">
                  <div><strong className="text-brand-muted w-20 inline-block">Year:</strong> <span className="text-black">{project.year}</span></div>
                  <div><strong className="text-brand-muted w-20 inline-block">Industry:</strong> <span className="text-black">{project.industry.join(', ')}</span></div>
                  <div><strong className="text-brand-muted w-20 inline-block">Service:</strong> <span className="text-black">{project.service.join(', ')}</span></div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-brand-muted">Learnings</h3>
                <p className="text-sm italic text-gray-700">{project.learnings}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-black font-sans">Overview</h3>
                <div className="text-gray-700 leading-relaxed space-y-4"><p>{project.overview}</p></div>
              </div>
              {project.externalLink && (
                <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-3 text-brand-muted">Project Link</h3>
                    <a 
                        href={project.externalLink}
                        target={isPdf ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        download={isPdf}
                        className="text-sm text-black underline hover:text-brand-muted transition-colors"
                    >
                        {linkText} &rarr;
                    </a>
                </div>
              )}
            </div>
          </div>
        </AnimateOnScroll>
      
        {project.needs && allProjectImages.length > 0 && (
            <SectionWithCenteredTextAndImage title="Context / Needs" image={allProjectImages[0]}>
                {renderContent(project.needs, false)}
            </SectionWithCenteredTextAndImage>
        )}
        
        {project.concept && allProjectImages.length > 0 && (
            <SectionWithGallery title="Concept Development" images={allProjectImages} imagePosition="right">
                 {renderContent(project.concept, false)}
            </SectionWithGallery>
        )}

        {project.process && allProjectImages.length > 0 && (
            <SectionWithGallery title="Process" images={allProjectImages} imagePosition="left">
                 {renderContent(project.process, true)}
            </SectionWithGallery>
        )}

        {project.outcome && allProjectImages.length > 0 && (
            <SectionWithGallery title="Outcome / Final Exhibit" images={allProjectImages} imagePosition="right">
                 {renderContent(project.outcome, false)}
            </SectionWithGallery>
        )}

        {project.reflection && allProjectImages.length > 1 && (
            <SectionWithCenteredTextAndImage title="Reflection" image={allProjectImages[1]}>
                {renderContent(project.reflection, false)}
            </SectionWithCenteredTextAndImage>
        )}
        
        {allProjectImages.length > 1 && (
          <AnimateOnScroll className="my-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {allProjectImages.map((img, index) => (
                <div key={index} className="bg-gray-100 aspect-square">
                  <img src={img} alt={`${project.title} gallery view ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        )}

        <div className="mt-24 flex justify-between border-t border-gray-200 pt-8 text-sm uppercase tracking-wider">
          <div>
            {prevProject && <Link to={`/projects/${prevProject.id}`} className="text-brand-muted hover:text-black transition-colors">&larr; Previous</Link>}
          </div>
          <div>
            {nextProject && <Link to={`/projects/${nextProject.id}`} className="text-brand-muted hover:text-black transition-colors">Next &rarr;</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;