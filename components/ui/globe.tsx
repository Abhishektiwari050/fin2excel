import React from "react";

interface GlobeProps {
  className?: string;
}

const Globe: React.FC<GlobeProps> = ({ className }) => {
  return (
    <>
      <style>
        {`
          @keyframes earthRotate {
            0% { background-position: 0 0; }
            100% { background-position: 400px 0; }
          }
          @keyframes twinkling { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-slow { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-long { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
          @keyframes twinkling-fast { 0%,100% { opacity:0.1; } 50% { opacity:1; } }
        `}
      </style>
      <div className={`flex items-center justify-center ${className || "w-full h-full min-h-[300px]"}`}>
        <div
          className="relative w-full h-full max-w-[500px] aspect-square rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2),-5px_0_8px_#c3f4ff_inset,15px_2px_25px_#000_inset,-24px_-2px_34px_#c3f4ff99_inset,250px_0_44px_#00000066_inset,150px_0_38px_#000000aa_inset]"
          style={{
            backgroundImage: "url('https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/globe.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "left",
            animation: "earthRotate 30s linear infinite",
          }}
        >
          {/* Stars - Using percentages to ensure they stay inside the globe regardless of its size */}
          <div
            className="absolute left-[10%] top-[20%] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling 3s infinite" }}
          />
          <div
            className="absolute left-[15%] top-[40%] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-slow 2s infinite" }}
          />
          <div
            className="absolute left-[85%] top-[30%] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-long 4s infinite" }}
          />
          <div
            className="absolute left-[70%] top-[80%] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling 3s infinite" }}
          />
          <div
            className="absolute left-[25%] top-[75%] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-fast 1.5s infinite" }}
          />
          <div
            className="absolute left-[75%] top-[10%] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-long 4s infinite" }}
          />
          <div
            className="absolute left-[80%] top-[20%] w-1 h-1 bg-white rounded-full"
            style={{ animation: "twinkling-slow 2s infinite" }}
          />
        </div>
      </div>
    </>
  );
};

export default Globe;
