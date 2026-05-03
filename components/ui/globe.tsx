import React from "react";
import "./globe.css";

interface GlobeProps {
  className?: string;
}

const Globe: React.FC<GlobeProps> = ({ className }) => {
  return (
    <div className={`globe-outer-container ${className || "w-full h-full min-h-[300px]"}`}>
      <div className="globe-sphere">
        <div className="star star-1" />
        <div className="star star-2" />
        <div className="star star-3" />
        <div className="star star-4" />
        <div className="star star-5" />
        <div className="star star-6" />
        <div className="star star-7" />
      </div>
    </div>
  );
};

export default Globe;
