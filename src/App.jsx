import React, { useState, useEffect } from "react";
import { Github, Mail, Globe, Search, Shield, Database, Brain, Languages, ChevronRight } from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { 
      name: "Digital Forensics", 
      icon: <Search className="w-8 h-8" />,
      description: "Expert in recovering and analyzing digital evidence"
    },
    { 
      name: "Malware Analysis", 
      icon: <Shield className="w-8 h-8" />,
      description: "Advanced detection and analysis of malicious software"
    },
    { 
      name: "Data Recovery", 
      icon: <Database className="w-8 h-8" />,
      description: "Specialized in recovering lost or corrupted data"
    },
    { 
      name: "Behavioral Analysis", 
      icon: <Brain className="w-8 h-8" />,
      description: "Pattern recognition in cyber incidents"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Your JSX content here */}
    </div>
  );
};

export default Portfolio;
