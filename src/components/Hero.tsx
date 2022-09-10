import { Flex, Heading } from "@chakra-ui/react";
import { Headshot } from "./Headshot";
import { About } from "./About";

export const Hero = () => (
  <Flex
    direction={{ base: "column", lg: "row" }}
    textAlign={{ base: "center", lg: "left" }}
    justifyContent="space-between"
    mx="auto !important"
    gap={14}
    alignItems="center"
    color={"white"}
    maxW={"4xl"}
  >
    <Headshot />
    <About
      title="Front End Developer"
      name="Tim Moran"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium voluptate assumenda, suscipit corporis ipsam eligendi animi tempora nulla sit consequatur architecto."
    />
  </Flex>
);
