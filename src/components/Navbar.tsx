import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link } from "@chakra-ui/react";
import { Logo } from "./icons/Logo";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  return (
    <Box>
      <Flex
        className="flex-wrapper"
        bg={"black"}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 6 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify="space-between" align={"center"}>
          <Flex alignItems={"center"}>
            <Logo />
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("white", "white")}
              ml={3}
              fontSize={"xl"}
              display={{ base: "none", md: "block" }}
            >
              <Text as="span" fontWeight={"bold"}>
                Tim
              </Text>{" "}
              Moran
            </Text>
          </Flex>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav router={router} />
          </Flex>
        </Flex>
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }} justify="end">
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav router={router} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ router }) => {
  const linkColor = useColorModeValue("white", "black");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      <NextLink href="/" passHref>
        <Link color={router.pathname == "/" ? "blue" : "gray.400"}>About me</Link>
      </NextLink>
      <NextLink href="/resume" passHref>
        <Link color={router.pathname == "/resume" ? "blue" : "gray.400"}>Resume</Link>
      </NextLink>
      <NextLink href="/contact" passHref>
        <Link color={router.pathname == "/contact" ? "blue" : "gray.400"}>Contact</Link>
      </NextLink>
    </Stack>
  );
};

const MobileNav = ({ router }) => {
  return (
    <Flex bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
      <NextLink href="/" passHref>
        <Link color={router.pathname == "/" ? "blue" : "gray.400"} display="block">
          About me
        </Link>
      </NextLink>
      <NextLink href="/resume" passHref>
        <Link color={router.pathname == "/resume" ? "blue" : "gray.400"} display="block">
          Resume
        </Link>
      </NextLink>
      <NextLink href="/contact" passHref>
        <Link color={router.pathname == "/contact" ? "blue" : "gray.400"} display="block">
          Contact
        </Link>
      </NextLink>
    </Flex>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About Me",
    href: "/",
  },
  {
    label: "Resume",
    href: "/resume",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
