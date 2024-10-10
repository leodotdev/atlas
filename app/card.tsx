import React from "react";
import { Center } from "@/components/ui/center";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";

const CardDemo = () => {
  return (
    <Center className="flex-1 bg-background-0 p-6">
      <Card className="max-w-[352px] max-h-[352px] flex flex-col p-0">
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/5f2a/37c0/2ae67e355659158769f1e2e6a597f8b5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-wPmMx1oi6YVUMcBldMlzKvJSW65U017tmQF7ER6Zpyo7DSnI3DjTz6DaxE~b~nLm2NbDsEXH428QhbJJJoF8ZVmeyaPG0T3PvG2uiKgai8IwKM1M6Y0CuD7casBmzq~uZE8iW5oiDSeuT1Z5UzYt6wf5mz7zJHsmc7XcXtTTQUDbNCouZDTrUfHUpgeLINvxbc8XoEaZOsOrnQ84zrUmkmkvH0KIIpBEOZpIJj7If-UAu8RRQkybvPJ4r8TIjWhnCoDg-IxDV~ako346gOEGABtxbElKG0sLY2eTH-afk2i7FXRuohtzrOAUmKxLLWu9cuE6mddSKlzWNH4fkmKg__",
          }}
          alt="random"
          className="w-full aspect-[352/234] rounded"
          // @ts-ignore
          size="none"
        />
        <Text size="sm" className="mt-4 mb-2">
          May 15, 2023
        </Text>
        <Heading size="md">The Power of Positive Thinking</Heading>
        <Text size="sm" className="mt-2.5 line-clamp-2">
          Discover how the power of positive thinking can transform your life,
          boost your confidence, and help you overcome challenges. Explore
          practical tips and techniques to cultivate a positive mindset for
          greater happiness and success.
        </Text>
      </Card>
    </Center>
  );
};

export default CardDemo;
