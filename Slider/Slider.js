import React from "react";
import { images } from "./images";
import Slide from "./Slide";

const Slider = () => {
  const [imagesData, setImagesData] = React.useState(images);

  return (
    <div class="p-4 flex items-center justify-center">
      <Slide images={imagesData} />
    </div>
  );
};
export default Slider;
