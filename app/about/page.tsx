"use client"
import React from 'react'
import Home from '../components/Home/page'
import { Box, Container, Text, Heading, Flex, Image } from '@chakra-ui/react'
import Instructor from '../components/Instructor/page'

export default function Page() {
    return (

        <Box bg='gray.200'>
            <Home title="About us" src="https://element502.com/wp-content/uploads/2017/01/about-post.jpg" />
            <Box>
                <Container maxW='100%' h={['100%', '100%', '100%']}>
                    <Flex mt='90' pb='30' flexDir={["column-reverse", "column-reverse", "row"]}>
                        <Box flexBasis='50%' >
                            <Image src='https://www.piaic.org/static/media/Launching-site-image2.c147d1bb.jpg' alt='piaic' w='80%' h='80%' py={['20', '10', '0']}></Image>
                        </Box>
                        <Box flexBasis='50%'>
                            <Heading>Presidential Initiative</Heading>
                            <Text mt={5}>Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.

                            </Text>

                            <Text mt={5}>    Dr. Arif Alvi was born in 1949 and completed his early education in Karachi.He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’. </Text>

                            <Text mt={5}>

                                President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>                        </Box>
                    </Flex>

                </Container>

                <Container maxW='100%' h={['100%', '100%', '100%']}>
                    <Flex mt='90' pb='30' flexDir={['column', "column", "row"]}>

                        <Box flexBasis='50%'>
                            <Heading>Presidential Initiative</Heading>
                            <Text mt={5}>Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.

                            </Text>

                            <Text mt={5}>    Dr. Arif Alvi was born in 1949 and completed his early education in Karachi.He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’. </Text>

                            <Text mt={5}>

                                President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</Text>                        </Box>
                        <Box flexBasis='50%' m='auto' pl='20px'>
                            <Image src='/panalogo.png' alt='panaverse' w='80%' h='80%' py={['20', '10', '10']}></Image>
                        </Box>
                    </Flex>

                </Container>

            </Box>
            <Instructor />
        </Box>

    )
}
