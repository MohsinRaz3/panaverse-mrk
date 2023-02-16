"use client";

import React from "react";
import Logo from "../../../public/panalogo.png";
import {
  Box, Container, Image, Flex, SimpleGrid, Button, Drawer,
  DrawerBody,

  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, useDisclosure, IconButton, Heading
} from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>    <Box bg="blackAlpha.800" shadow="lg">
      <Container maxW={1400} >
        <SimpleGrid templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }} spacing='30px' >
          <Box py={3} display={{ base: 'none', lg: "flex" }} >
            <Image
              src='/panalogo.png'
              alt="panaverse logo"
              width={50}
              height={10}
            ></Image>
          </Box>
          <Flex display={{ base: 'none', lg: "flex" }}
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
          <Box px={10} p={18} display={{ base: 'none', lg: "initial" }} >
            <Button float="right" colorScheme="whiteAlpha" bg="blackAlpha.600" rounded='md' fontSize={{ base: '14px', md: '16px', lg: '18px' }}
            >
              Apply now
            </Button>
          </Box>
          <Box py={3} display={{ base: 'initial', lg: "none" }}>
            <Image
              src='/panalogo.png'
              alt="panaverse logo"
              width={50}
              height={10}
            ></Image>
          </Box>
          <Box display={{ base: 'initial', lg: 'none' }} m="4" pos="absolute" top="0" right="0">

            <IconButton aria-label="hamburger" colorScheme="gray" onClick={onOpen} icon={<HamburgerIcon />}
            >

            </IconButton>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent bg='white'>
                <DrawerCloseButton />


                <Flex h='35vh' m='auto' flexDir='column' justifyContent='space-between' align='center'>
                  <Link href='/'> Home</Link>
                  <Link href='/'> About</Link>
                  <Link href='/'> Contact</Link>
                  <Link href='/'> Syllabus</Link></Flex>





              </DrawerContent>
            </Drawer>
          </Box>
        </SimpleGrid>
      </Container>

    </Box >
    </>

  );
}
