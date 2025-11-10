import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const AnimatedLinkText: React.FC<{ text: string }> = ({ text }) => (
    <div className="relative h-[1.2em] overflow-hidden">
        <span className="block transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full">{text}</span>
        <span className="block absolute inset-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">{text}</span>
    </div>
);

const MenuOverlay: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isProjectsActive = path === '/projects' && location.pathname.startsWith('/projects');
    const isActive = location.pathname === path || isProjectsActive;
    return isActive ? 'text-black' : 'text-gray-400';
  };

  const isPathActive = (path: string) => {
    if (path === '/projects') return location.pathname.startsWith('/projects');
    return location.pathname === path;
  }

  return (
    <div className="fixed inset-0 bg-brand-light z-40 flex flex-col items-center justify-center p-8">
       <div className="absolute top-0 left-0 w-full p-4 sm:p-6 lg:p-8 container mx-auto flex items-center justify-between h-20">
         <Link to="/" className="text-lg font-sans font-bold tracking-wide text-black uppercase" onClick={onClose}>
            Carmen Robres de Veciana
          </Link>
          <button onClick={onClose} className="text-4xl font-thin text-black">&times;</button>
        </div>
      <nav className="flex flex-col items-start space-y-6">
        {[
          { path: '/', label: 'HOME', number: '01' },
          { path: '/projects', label: 'PROJECTS', number: '02' },
          { path: '/about', label: 'ABOUT', number: '03' }
        ].map(item => (
          <NavLink key={item.path} to={item.path} className="font-sans group" onClick={onClose}>
            <div className={`flex items-center transition-colors duration-300 ${getLinkClass(item.path)}`}>
                <div className="text-xl mr-4"><AnimatedLinkText text={item.number} /></div>
                <div className="text-5xl md:text-7xl font-medium"><AnimatedLinkText text={item.label} /></div>
                {isPathActive(item.path) && <span className="text-black ml-2 text-3xl">&rarr;</span>}
            </div>
          </NavLink>
        ))}
      </nav>
      <div className="absolute bottom-8 right-8 text-right text-sm">
        <p className="font-semibold text-black">GET IN TOUCH</p>
        <a href="mailto:carmen.robres.dev@gmail.com" className="hover:underline text-black">carmen.robres.dev@gmail.com</a>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header className="sticky top-0 z-30 bg-brand-light">
        <div className="container mx-auto px-4 sm:px-6 lg:p-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="text-lg font-sans font-bold tracking-wide text-black uppercase hover:opacity-70 transition-opacity">
                Carmen Robres de Veciana
              </Link>
            </div>
            <div className="flex items-center space-x-8">
                 <a href="mailto:carmen.robres.dev@gmail.com" className="hidden md:inline text-sm font-medium tracking-wider uppercase transition-transform duration-300 hover:-translate-y-0.5 text-black">Get in touch</a>
                 <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="group flex flex-col justify-center items-center h-8 w-8 space-y-1.5 z-50"
                    aria-label="Open menu"
                >
                    <span className="block h-0.5 w-6 bg-black transition-transform duration-300 group-hover:-translate-y-0.5"></span>
                    <span className="block h-0.5 w-6 bg-black transition-transform duration-300 group-hover:translate-y-0.5"></span>
                </button>
            </div>
          </div>
        </div>
      </header>
      {isOpen && <MenuOverlay onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Header;