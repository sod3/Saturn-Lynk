// src/components/ThreeFeatureIcon.jsx
import React from 'react';

export const ThreeFeatureIcon = ({ iconType, className = "w-6 h-6" }) => {
  const getIconSVG = (type) => {
    const baseProps = {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      className: `w-full h-full text-white`
    };

    switch (type) {
      case 'expert-team':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case '24/7-support':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        );
      case 'quality-assurance':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
      case 'proven-results':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M18 20V10" />
            <path d="M12 20V4" />
            <path d="M6 20v-6" />
          </svg>
        );
      case 'client-focused':
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" {...baseProps}>
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-full flex items-center justify-center">
        {getIconSVG(iconType)}
      </div>
    </div>
  );
};