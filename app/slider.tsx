import React from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@/components/ui/slider";
import { Center } from "@/components/ui/center";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import HundredEmoji from "@/components/custom/icons/hundredEmoji";
import ThumbDownEmoji from "@/components/custom/icons/thumbDownEmoji";

const SliderDemo = () => {
  return (
    <Center className="flex-1 bg-background-0">
      <Box className="bg-background-0 p-6 rounded-xl border border-outline-200 w-full max-w-[336px]">
        <Text size="xl" className="font-medium text-typography-900">
          How satisfied are you with gluestack?
        </Text>
        <Slider defaultValue={30} className="w-full mt-10">
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Box className="flex flex-row justify-between mt-4">
          <Icon as={ThumbDownEmoji} />
          <Icon as={HundredEmoji} />
        </Box>
      </Box>
    </Center>
  );
};

export default SliderDemo;
