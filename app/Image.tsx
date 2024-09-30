import React from "react";
import { Image } from "@/components/ui/image";
import { Center } from "@/components/ui/center";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";

const ImageDemo = () => {
  return (
    <Center className="flex-1 p-6 bg-background-0">
      <HStack
        space="lg"
        className="max-h-[272px] max-w-[372px] h-full w-full m-6 bg-background-0"
      >
        <VStack space="sm" className="overflow-scroll pr-2.5">
          <Box className="border border-outline-300 rounded items-center justify-center bg-background-0 h-[76px] w-[76px] flex-shrink-0">
            <Image
              size="sm"
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/ef75/fff3/49d8b3048a3ef682ae345ee11c29a57d?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gnvfin6IcvGssv9BmdA1cQ4~z9tqyn9W4m4urilOeKIjmbiEC-a5VbjfEOtxfiqxC8rX16THK2wQMiizdMTcB7O7k0~FBPoG5jvA-SwL6hvRPP0N0mrDvsYGgVjNWLbChle29K39syhpMHqITo3-cUJihoRN-EGfNnIRCUQAqIYd9QD8X7SfbxyS1VnmDuk~Vqgdmg7Gm3uUV~u7kiQ1cAEiCThoTPTFfQwjfJDVbykoDEewa0Kqb3D2k3-~66YosW1rf-07sU1oxX2y2BlVuSEjDvDv5y8Zl8V16vwGLKGCovszK3k6kGn1s3KbGM294HdTAj8nFkdTO11o5W1pwQ__",
              }}
              alt="image"
            />
          </Box>
          <Box className="border border-outline-300 rounded items-center justify-center bg-background-0 h-[76px] w-[76px] flex-shrink-0">
            <Image
              size="sm"
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/771e/9a48/e8da7b029be17da9ad1d51bce7fe9130?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HzgXrgww-Yx5srvucV80aERy1gj4t-BkDzsVTtZdmoci1vQ-M9I54frlF95-PMcM19X9hKeiaCPOcENBvvKfSjr-Q2Gjfp-YNc3noKGfWSVIBaD88FLA4VQ3sIiFMQCU~UDN9WFnb76iKNVTZuUvAk5j1H15XYP8WxDh6TYFcX5F8i6eoZWunM01PgO~8rA-GY2Ic58i5c1Vfk4arQC3a6lLv9ZNpQyoHIHFO2mwTz2eR0LvyMqIT8v8qRqyqa2wL45rxZSa~q7e1WIcCs3P7l6d2CXNHaK1YcXAMTmxLbjKEhtWbkoI~fQvld9sOPHwU4z7TpIa63VS2603UhW-Cg__",
              }}
              alt="image"
            />
          </Box>
          <Box className="border border-outline-300 rounded items-center justify-center bg-background-0 h-[76px] w-[76px] flex-shrink-0">
            <Image
              size="sm"
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/37fa/283f/59d9d85fe60fa40f32f36c9605f2d94d?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AlqsG91qlrgGaapdFuJ1UzAUCBX9ACoU1cAuhMivbTdsnjDTal6y9tfWnp8O2NMq5j2gkIXVRJ57odddq54PEy-6GqavGWrVLfZdscvYpdDRJqZwgj-0SqK~-G4BLziH7dHhU6vL~~HPBqIjdG9xT8lzYv1YhIgLWy9by3EM7W8G8bX9p1lk9PcAiEcJh9eGR3SkzkR5WkpsvQ-MKdMNg9EOoXcYI~ZAaoL1wKmQMyC1~K3Fbfz4B~IaAPmJPA9mLCrcI12OLAfwspB1j2yVTTZoKs8~jczNlIBg3x1fvXi94SrH6lVMkioeMNsV3GmDDDuFC6Vf7XA3K4LmyaAGCQ__",
              }}
              alt="image"
            />
          </Box>
          <Box className="border border-outline-300 rounded items-center justify-center bg-background-0 h-[76px] w-[76px] flex-shrink-0">
            <Image
              size="sm"
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/1da0/fab8/fe310409896b1e0eeb3843123c426763?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UY8h2LY53V6VpXPhfI0MrMNz63UyFwbdJpPqPH-syo8Mb8EeibngtP-eY01-OWfqWMtlQk78M7y8CjBpbBUkoPjdQA2W2ivd~pTgKwedeA1hECA-HVWXyFPWmGUMSjKrH-eXodqbnf98CnKq7oR6U7EIe5Wl44CkPeyiepUxEOXDpyIobZ3whttoB33ooIz~KwCUol8dydGoG9ZUB5OPkLO49YHEHS9yuSExygcO9Hm2nv267b0D-~yvCIbANClyUfqThBvbkzrVQzO~jLBz2W7YyTd0WoZYAmUNCKk~7tgQA5Xh9Iuz2WpA8CwLWJHD1Qedw0hh0VreCiZK5Od6YQ__",
              }}
              alt="image"
            />
          </Box>
        </VStack>
        <VStack className="p-2">
          <Image
            size="2xl"
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/5e69/4148/f77716db2dc2381ffc1fd5a033b3f387?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L-xdD388n6zcvLn8gq1Q1S81HO54leUI7twa0ug-yNQFLNeH9WaE9irJOfxwa9DRDHt9bNQ5FhWQggS0OsKq7vMch-zRiqybFpDjrePinldqeR1MUs~zUzDckC81X8WQPNQ09YFuPQFsQB5O40CHa0Hgc6v5Md2aoxZVnNlNe1eNi~NW5HyyjuKmd6FPsy0O-pp8nvG77ZUgT2Kl8EIBXOXU~9YxnNt78Q9uBY-rXuvHPfOZs-yxCuEwh2DGk3bNBcxtRu3Du1ZXq1QKGxLk5tbGc-10Upm1GbJur~JBiYUWkT9wMf4UCczTkvMk70ZYPooPgHEw3AxUT0ldaWHSaQ__",
            }}
            alt="image"
          />
        </VStack>
      </HStack>
    </Center>
  );
};

// const ImageDemo = () => {
//   return (
//     <Center className="flex-1">
//       <Image
//         size="xl"
//         source={{
//           uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//         }}
//         alt="image"
//       />
//     </Center>
//   );
// };

export default ImageDemo;
