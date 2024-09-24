import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider";
import React from "react";

const SliderDemo = () => {
  return (
    <Slider defaultValue={30} className="w-[220px]">
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

export default SliderDemo;
