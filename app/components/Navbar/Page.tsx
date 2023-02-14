"use client";

import React from "react";
import Logo from "../../../public/panalogo.png";
import { Box, Container, Flex, SimpleGrid, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Page() {

  return (
    <Box bg="blackAlpha.800" boxShadow="lg" >
      <Container maxW={['75%', ' 100%']} >
        <SimpleGrid templateColumns="repeat(3, 1fr)" spacing='30px' >
          <Box py={3} >
            <Image
              src={Logo.src}
              alt="panaverse logo"
              width={100}
              height={60}
            />
          </Box>
          <Flex display={["none", "flex"]}
            placeItems="center"
            gap={8}
            color="white"
            fontSize={{ base: '14px', md: '16px', lg: '18px' }}
            fontWeight="semibold"
          >
            <Link href="/">Home</Link>
            <Link href="/Syllabus">Syllabus</Link>
            <Link href="/Explore">Explore</Link>
            <Link href="/About">About</Link>
            <Link href="/Blogs">Blogs</Link>
          </Flex>
          <Box px={10} p={18} display={["none", "flex"]} >
            <Button float="right" colorScheme="whiteAlpha" bg="blackAlpha.600" rounded='md' fontSize={{ base: '14px', md: '16px', lg: '18px' }}
            >
              Apply now
            </Button>
          </Box>
          <Box pt='5' pb='5' ml='20' display={["flex", "none"]}>
            <HamburgerIcon boxSize={10} />
          </Box>
        </SimpleGrid>
      </Container>
      <Flex flexDir='column' placeItems="center"
        pt='20'
        pb='50'
        gap={8}
        color="white"
        fontSize={{ base: '14px', md: '16px', lg: '18px' }}
        fontWeight="semibold" display={['none', 'none', 'none']}>
        <Link href="/">Home</Link>
        <Link href="/Syllabus">Syllabus</Link>
        <Link href="/Explore">Explore</Link>
        <Link href="/About">About</Link>
        <Link href="/Blogs">Blogs</Link>

        <Box px={10} p={18}>
          <Button float="right" colorScheme="whiteAlpha" bg="blackAlpha.600" rounded='md' fontSize={{ base: '14px', md: '16px', lg: '18px' }}
          >
            Apply now
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
