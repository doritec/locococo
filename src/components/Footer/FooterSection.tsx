import React from 'react';

interface FooterSectionProps {
  title: string;
  links: string[];
}

export const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};