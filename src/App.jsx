import React, { useState, useEffect } from 'react';
import { Github, Mail, Globe, Search, Shield, Database, Brain, Languages, ChevronRight } from 'lucide-react';
import profilePic from './assets/111.png'; // Import your profile image
import logoSvg from './assets/ultra-minimal-asf.svg'; // Import your logo

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    {
      name: 'Digital Forensics',
      icon: <Search className="w-8 h-8" />,
      description: 'Expert in recovering and analyzing digital evidence'
    },
    {
      name: 'Malware Analysis',
      icon: <Shield className="w-8 h-8" />,
      description: 'Advanced detection and analysis of malicious software'
    },
    {
      name: 'Data Recovery',
      icon: <Database className="w-8 h-8" />,
      description: 'Specialized in recovering lost or corrupted data'
    },
    {
      name: 'Behavioral Analysis',
      icon: <Brain className="w-8 h-8" />,
      description: 'Pattern recognition in cyber incidents'
    },
  ];

  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Dutch', level: 'Fluent' },
    { name: 'Spanish', level: 'Fluent' },
    { name: 'French', level: 'Fluent' },
  ];

  const projects = [
    {
      title: 'Cyber Crime Investigation Platform',
      description: 'Led the development of an advanced digital forensics platform that streamlined evidence collection and analysis, reducing investigation time by 40%.',
      tags: ['Digital Forensics', 'Python', 'Machine Learning']
    },
    {
      title: 'Network Traffic Analysis System',
      description: 'Designed and implemented an automated system for detecting and analyzing suspicious network patterns, leading to the successful resolution of multiple cybercrime cases.',
      tags: ['Network Security', 'Data Analysis', 'Python']
    },
    {
      title: 'Memory Forensics Suite',
      description: 'Created a comprehensive toolkit for analyzing system memory dumps, enabling rapid identification of malware and cyber threats.',
      tags: ['Memory Analysis', 'Malware Detection', 'Python']
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header */}
      <header className={`fixed w-full transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="relative w-12 h-12">
                <img src={logoSvg} alt="Logo" className="rounded-full shadow-lg" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Forensics Expert
                </h1>
                <p className="text-sm text-gray-600">Cybercrime Investigation Specialist</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <a href="https://github.com/Sa3oud"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:sahmad01@outlook.fr"
                 className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+31683072284"
                 className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center space-x-2">
                <span className="font-medium">+31 683 072 284</span>
              </a>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                Contact Me
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-indigo-900 to-purple-900 bg-clip-text text-transparent">
                Uncovering Digital Evidence, Solving Cyber Mysteries
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Specialized in digital forensics and cybercrime investigation with expertise in
                malware analysis and data recovery. Helping organizations protect their digital assets
                and solve complex cyber incidents.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2">
                  <span>View Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-all duration-300">
                  Download Resume
                </button>
              </div>
            </div>
            <div className="flex-shrink-0 p-3"> {/* Added p-3 class for padding */}
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-lg shadow-xl w-64 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-indigo-900">Core Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leveraging advanced technical skills and investigative techniques to solve complex digital crimes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.name}
                   className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-50">
                <div className="text-indigo-600 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-900">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-12 bg-white/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-indigo-900">Global Communication</h2>
            <p className="text-gray-600 mb-6">We provide our services in multiple languages to serve our international clients</p>
            <div className="flex flex-wrap justify-center gap-4">
              {languages.map((lang) => (
                <div key={lang.name}
                     className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm flex items-center space-x-2 hover:shadow-md transition-all duration-300 border border-indigo-50">
                  <Languages className="w-4 h-4 text-indigo-600" />
                  <span className="font-medium text-indigo-900">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-900">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title}
                   className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-50">
                <h3 className="text-xl font-semibold mb-4 text-indigo-900">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag}
                          className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
              <p className="text-indigo-200">Available for consulting and collaboration</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/Sa3oud"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-indigo-200 hover:text-white transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:sahmad01@outlook.fr"
                 className="text-indigo-200 hover:text-white transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+31683072284"
                 className="text-indigo-200 hover:text-white transition-colors duration-300">
                +31 683 072 284
              </a>
            </div>
          </div>
          <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-200">
            <p>© 2025 Digital Forensics Expert. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
