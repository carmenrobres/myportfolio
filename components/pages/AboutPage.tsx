import React from 'react';
import AnimateOnScroll from '../AnimateOnScroll';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <header className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="w-full aspect-square bg-gray-100 overflow-hidden">
              <img src="/profile.jpg" alt="Carmen Robres de Veciana" className="w-full h-full object-cover"/>
            </div>
            <div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-sans text-black">Carmen Robres De Veciana</h1>
                <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 mt-1 font-sans">Industrial Design Engineer</h2>
                <p className="mt-6 text-base text-gray-700 max-w-xl">
                Industrial designer passionate about integrating new technologies, currently focused on integrating AI into the prototyping process. Through my Master's, I'm exploring innovative ways to merge design and tech, pushing the boundaries of creativity and functionality.
                </p>
                <div className="text-sm mt-6">
                  <h3 className="font-semibold text-black">Contact</h3>
                  <a href="mailto:carmen.robres.dev@gmail.com" className="underline hover:text-brand-muted text-black">carmen.robres.dev@gmail.com</a>
                  <div className="flex space-x-4 mt-2">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-muted text-black">LinkedIn</a>
                      <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-muted text-black">Behance</a>
                  </div>
                </div>
            </div>
          </header>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll className="mt-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto border-t border-gray-200 pt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold uppercase tracking-wider font-sans text-black">Experience</h2>
          </div>
          <div className="md:col-span-2 space-y-8">
             <div>
                <h3 className="font-semibold text-black">Freelance: AI, Product Development and Social Innovation</h3>
                <p className="text-sm text-brand-muted">June 2024 - Present</p>
                <p className="mt-2 text-sm text-gray-700">Participated in diverse projects blending AI, product development, 3D prototyping, and graphic design. Collaborated with Lichen on social innovation and supported ventures like Facto Espai, bridging technology, creativity, and design to deliver innovative solutions.</p>
             </div>
             <div>
                <h3 className="font-semibold text-black">Junior Designer, Incapto Coffee</h3>
                <p className="text-sm text-brand-muted">June 2022 - June 2023</p>
                <p className="mt-2 text-sm text-gray-700">Project management for B2B, including the development of print and digital materials (catalogs, packaging, newsletters, banners, social media content), campaign concepts, retail designs, and ad creation with copywriting.</p>
             </div>
             <div>
                <h3 className="font-semibold text-black">Junior Trainee, Incapto Coffee</h3>
                <p className="text-sm text-brand-muted">June 2021 - June 2022</p>
                <p className="mt-2 text-sm text-gray-700">Design and development of print materials (catalogs, manuals, flyers, packaging) and digital content (newsletters, promotional banners, social media for Instagram and YouTube).</p>
             </div>
          </div>
        </div>
      </AnimateOnScroll>
      
      <AnimateOnScroll className="mt-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto border-t border-gray-200 pt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold uppercase tracking-wider font-sans text-black">Education</h2>
          </div>
          <div className="md:col-span-2 space-y-6">
             <div>
                <h3 className="font-semibold text-black">Master's in Design for Emergent Futures, Elisava & IAAC</h3>
                <p className="text-sm text-brand-muted">September 2023 - Present</p>
             </div>
             <div>
                <h3 className="font-semibold text-black">Industrial Design Engineering, UPC ESEIAAT</h3>
                <p className="text-sm text-brand-muted">2018 - 2022</p>
             </div>
             <div>
                <h3 className="font-semibold text-black">Baccalauréat (French High School) & Spanish High School, CIC</h3>
                <p className="text-sm text-brand-muted">2016 - 2018</p>
             </div>
             <div>
                <h3 className="font-semibold text-black">ESO, Aula Escola Europea</h3>
                <p className="text-sm text-brand-muted">2012 - 2016</p>
             </div>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto border-t border-gray-200 pt-12 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold uppercase tracking-wider font-sans text-black">Skills</h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-sm text-gray-700">
              <p><strong className="font-semibold text-black">Languages:</strong> Spanish: Native | Catalan: Native | English: C1 | French: B2</p>
              <p><strong className="font-semibold text-black">High Level:</strong> SolidWorks | Illustrator | Figma</p>
              <p><strong className="font-semibold text-black">Medium Level:</strong> Photoshop | After Effects | Arduino | 3DSMax</p>
              <p><strong className="font-semibold text-black">Basic Knowledge:</strong> Python | SprutCAM | Rhino | Microsoft Package | 3D Printing | CNC Cutting | Electronics</p>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-16 md:mt-24 w-full h-[40vh] max-h-[500px] bg-gray-200">
        <img src="/workshop.jpg" alt="Workshop view" className="w-full h-full object-cover object-center"/>
      </AnimateOnScroll>
    </div>
  );
};

export default AboutPage;