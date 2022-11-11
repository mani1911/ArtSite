import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const Image = ({ src }) => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft">
      <div className="group relative md:w-96 m-5 shadow-xl flex sm:w-9/10">
        <img className="w-full object-cover rounded-xl" src={src} />
        <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700/10 transpa opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
          <a
            className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300"
            href={src}
            download={src}
          >
            Download
          </a>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Image;
