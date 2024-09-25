import React from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider";
import { Center } from "@/components/ui/center";

const SliderDemo = () => {
  return (
    <Center className="flex-1">
      <Slider defaultValue={30} className="w-[220px]">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Center>
  );
};

export default SliderDemo;
