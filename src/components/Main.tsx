import { Stack, StackProps, Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
export const Main = (props: StackProps) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="82rem"
    borderRadius="1.5rem"
    mt="3rem"
    py={3}
    px={{ base: "1rem", md: "4rem" }}
    bg="black"
    {...props}
  >
    <Navbar />
    {props.children}
  </Stack>
);
