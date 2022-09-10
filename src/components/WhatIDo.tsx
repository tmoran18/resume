import { Flex, Icon, Box, Text, Heading } from "@chakra-ui/react";
import { FeIcon } from "./icons/FeIcon";
import { CrIcon } from "./icons/CrIcon";

const Benefit = ({ title, description, icon }) => (
  <Flex
    align="center"
    mb={4}
    w={"100%"}
    direction={{ base: "column", md: "row" }}
    textAlign={{ base: "center", md: "left" }}
  >
    <Icon as={icon} w={12} h={12} color="blue" mb={2} />
    <Box ml={4}>
      <Text fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text fontSize="sm" maxW="500px">
        {description}
      </Text>
    </Box>
  </Flex>
);

export const WhatIDo = () => (
  <Box color={"white"}>
    <Heading
      pos="relative"
      as="h4"
      size="md"
      mb={4}
      mt={{ base: 16, md: 24 }}
      textAlign={{ base: "center", md: "left" }}
      textDecor={"underline"}
      textDecorationColor="blue"
      textUnderlineOffset={"0.3rem"}
    >
      What I Do
    </Heading>
    <Flex mb={5} gap={"1rem"} direction={{ base: "column", md: "row" }}>
      <Benefit
        title="Front End Web Development"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatum voluptatibus culpa ut velit fuga laboriosam nihil beatae."
        icon={FeIcon}
      />
      <Benefit
        title="UI Design"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatum voluptatibus culpa ut velit fuga laboriosam nihil beatae."
        icon={CrIcon}
      />
    </Flex>
    <Flex gap={"1rem"} direction={{ base: "column", md: "row" }}>
      <Benefit
        title="Front End Web Development"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatum voluptatibus culpa ut velit fuga laboriosam nihil beatae."
        icon={CrIcon}
      />
      <Benefit
        title="UI Design"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatum voluptatibus culpa ut velit fuga laboriosam nihil beatae."
        icon={FeIcon}
      />
    </Flex>
  </Box>
);
