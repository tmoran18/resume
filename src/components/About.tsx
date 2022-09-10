import { Stack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";

interface iAbout {
  title: string;
  name: string;
  description: string;
}

export const About = ({ title, name, description }: iAbout) => (
  <Stack maxW={"lg"}>
    <Text color="textMuted">{title}</Text>
    <Heading as="h1" size="2xl" fontWeight={600}>
      {name}
    </Heading>
    <Text py={4}>{description}</Text>
    <HStack align={"center"} justify={{ base: "center", lg: "start" }}>
      <Link href="/" passHref>
        <Button
          as="a"
          fontSize={"sm"}
          bg="border"
          rounded={"full"}
          border="2px solid"
          borderColor={"blue"}
          color="white"
          size="md"
          _hover={{ bg: "blue" }}
        >
          Download CV
        </Button>
      </Link>
      <Link href="/contact" passHref>
        <Button
          fontSize={"sm"}
          as="a"
          px={6}
          bg="border"
          color="white"
          rounded={"full"}
          border="2px solid"
          borderColor={"white"}
          _hover={{ bg: "white", color: "black" }}
        >
          Contact
        </Button>
      </Link>
    </HStack>
  </Stack>
);
