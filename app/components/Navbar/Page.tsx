"use client";

import React from "react";
import Logo from "../../../public/panalogo.png";
import { Box, Container, Flex, SimpleGrid, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <Box bg="red.500" boxShadow="lg">
      <Container maxW={1400}>
        <SimpleGrid templateColumns="repeat(3, 1fr)">
          <Box py={3}>
            <Image
              src={Logo.src}
              alt="panaverse logo"
              width={100}
              height={60}
            />
          </Box>
          <Flex
            placeItems="center"
            gap={8}
            color="white"
            fontSize={18}
            fontWeight="semibold"
          >
            <Link href="/">Home</Link>
            <Link href="/Syllabus">Syllabus</Link>
            <Link href="/Explore">Explore</Link>
            <Link href="/About">About</Link>
            <Link href="/Blogs">Blogs</Link>
          </Flex>
          <Box px={10} pt={18}>
            <Button float="right" colorScheme="red" bg="red.400">
              Apply now
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
