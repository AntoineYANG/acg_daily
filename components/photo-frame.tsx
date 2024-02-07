import type { FC, PropsWithChildren, ReactNode } from "react";
import Balancer from "react-wrap-balancer";


const PhotoFrame: FC<PropsWithChildren<{ text?: ReactNode }>> = ({ children, text }) => {
  return (
    // wooden
    <div className="rounded-md overflow-hidden max-w-[200px] p-4 relative transform rotate-[2.5deg] wood-texture">
      <div className="absolute inset-0 bg-[#fffb93a7] transform rotate-[-5deg] -z-1"></div>
      <div className="relative transform rotate-[-2.5deg]">{children}</div>
      {text && (
        <div className="text-center mt-3 transform rotate-[-2.5deg]">
          <Balancer>{text}</Balancer>
        </div>
      )}
    </div>
  );
};


export default PhotoFrame;
