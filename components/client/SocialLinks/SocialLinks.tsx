// components/SocialLinks.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="hidden md:flex fixed right-4 top-1/2 transform -translate-y-1/2 flex-col space-y-4">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-xl hover:text-gray-700 transition-colors" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-xl hover:text-blue-700 transition-colors" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-xl hover:text-blue-500 transition-colors" />
      </a>
    </div>
  );
};

export default SocialLinks;