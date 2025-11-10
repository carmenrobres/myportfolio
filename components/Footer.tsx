import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-light">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:p-8">
        <div className="flex justify-between items-center text-xs uppercase tracking-wider">
          <div className="text-brand-muted">
            &copy; {new Date().getFullYear()} Carmen Robres de Veciana
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-brand-muted transition-all duration-300 inline-block hover:-translate-y-0.5">LinkedIn</a>
            <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="text-black hover:text-brand-muted transition-all duration-300 inline-block hover:-translate-y-0.5">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;