import React, { useState } from "react";

const Slide = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (imageIndex) => {
    setIndex(imageIndex);
  };

  const handleImageIndex = (forward) => {
    if (forward) {
      if (index === images.length - 1) setIndex(0);
      else setIndex((index) => index + 1);
    } else {
      if (index === 0) setIndex(images.length - 1);
      else setIndex((index) => index - 1);
    }
  };

  return (
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-row  items-center justify-center">
        <span class="cursor-pointer" onClick={() => handleImageIndex(false)}>
          ◀️{" "}
        </span>
        <div class="w-80 h-80 p-2 flex items-center justify-center">
          <img src={images[index].image_url} alt={images[index].caption}></img>
        </div>
        <span class="cursor-pointer" onClick={() => handleImageIndex(true)}>
          {" "}
          ▶️{" "}
        </span>
      </div>
      <div class="flex items-center justify-center">
        {images.map((i, imageIndex) => {
          return (
            <div class="w-32 h-32" onClick={() => handleClick(imageIndex)}>
              <img src={i.image_url} alt={i.caption}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slide;
