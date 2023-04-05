import React, { useState, useEffect } from "react";

interface ImageSkeletonProps {
  src: string;
  alt: string;
}

const ImageSkeleton: React.FC<ImageSkeletonProps> = ({ src, alt }) => {
  const [cargada, setCargada] = useState(false);

  useEffect(() => {
    const image = new Image() as HTMLImageElement;
    image.onload = () => {
      setCargada(true);
    };
    image.src = src;
  }, [src]);

  return (
    <div className="relative h-full w-full">
      <img
        className="
          h-full 
          w-full 
          object-cover 
          transition 
          group-hover:scale-110
        "
        src={cargada ? src : "https://via.placeholder.com/300x300?text=false"}
        alt={alt}
      />
      {!cargada && (
        <div className="absolute left-0 top-0 h-full w-full animate-pulse bg-gray-300 opacity-50" />
      )}
    </div>
  );
};

export default ImageSkeleton;
