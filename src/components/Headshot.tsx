import Image from "next/image";
import { Box } from "@chakra-ui/react";

const cloudinaryURL = ({ src, width, quality = 100 }) => {
  return `https://res.cloudinary.com/dsjhcek2q/image/upload/c_scale,w_${width},f_auto,q_${quality}/v1662176118/portfolio/${src}`;
};

export const Headshot = () => (
  <Box
    fontSize={0}
    borderRadius="full"
    overflow="hidden"
    border="1rem solid"
    borderColor={"border"}
    maxW="300px"
    boxShadow={"0 0 25px 0 rgb(0 0 0 / 80%)"}
  >
    <Image
      width={300}
      height={300}
      src={"me_pla91j"}
      layout="intrinsic"
      loader={cloudinaryURL}
      alt={"Portait image of Tim Moran"}
    />
  </Box>
);
