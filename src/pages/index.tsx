import { Box } from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { WhatIDo } from "../components/WhatIDo";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

const Index = () => (
  <Box>
    <Hero />
    <WhatIDo />
  </Box>
);

export default Index;
