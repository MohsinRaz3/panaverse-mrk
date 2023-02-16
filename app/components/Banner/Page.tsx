"use client"
import React from 'react'
import {
    Box, Flex, Heading, Text, Button, Image, Container,
} from '@chakra-ui/react'
import png from '../../../public/bannermeta.png'
import png1 from '../../../public/bannermeta1.png'


export default function Page() {

    return (
        <>        <Box >
            <Container maxW={1400} bgAttachment='fixed' bgImage={"https://e0.pxfuel.com/wallpapers/112/218/desktop-wallpaper-abstract-background-light-grid-light-coloured-grey.jpg"}>
                <Flex display={{ lg: 'flex', base: 'grid' }} pb='100px' px='10px' pt={{ lg: '50px', base: '0px' }} >
                    <Box px={{ lg: '40px', base: '0px' }} pt={{ lg: '200px', base: '50px' }}>
                        <Heading color='blackAlpha.700'>Certified Web 3.0 and Metaverse Developer</Heading>
                        <Text color='whiteAlpha.900'>Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users. A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</Text>
                        <Button>More Info</Button>
                    </Box>
                    <Box > <Image src='/bannermeta.png' alt="banner"></Image></Box>
                </Flex>
            </Container>
        </Box>




            <Box >
                <Box h="100vh"  >
                    <Flex mt={["12", "36"]} flexDir={["column-reverse", "row"]} w="100%" align="center" justifyContent="center">
                        <Box w="50%" mt={["12", "0"]}>
                            <Image src='/bannermeta1.png' alt="banner" objectFit='cover' w="100%" h={{ lg: '300', base: '150' }}></Image></Box>
                        <Box w="50%" >
                            <Heading size='xl'>The Curriculum</Heading>
                            <Text pt='20px'>This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development.</Text>
                            <Button mt="6" size={{ lg: 'lg', base: 'sm' }} colorScheme='blackAlpha'>More Info</Button>
                        </Box>
                    </Flex>
                </Box>
            </Box>

        </>

    )
}
