import React, { useEffect, useState } from "react";
import Image from "./Image";

const Gallery = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets/", false, /\.(png|jpe?g|svg)$/)
  );
  const values = Object.keys(images).map(function (key) {
    return images[key];
  });

  return (
    <div className="flex h-auto bg-gradient-to-b from-black to-gray-800 flex-wrap justify-center items-center p-5 border-zinc-50">
      {values.map((img) => (
        <div key={img} className="">
          <Image src={img} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
