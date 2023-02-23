'use client'
import { Box, Flex, Heading, Text, Center } from '@chakra-ui/react'
import React from 'react'
import Home from '../components/Home/page'

export default function Page() {
    const boxColor = {
        textAlign: 'center',
        padding: '30px',
        boxShadow: 'dark-lg',
        borderRadius: '20px',
        width: '280px'

    }
    return (
        <>
            <Home title="Syllabus" src="https://chronicle.brightspotcdn.com/dims4/default/23eb304/2147483647/strip/true/crop/5600x3733+0+0/resize/1680x1120!/format/webp/quality/90/?url=http%3A%2F%2Fchronicle-brightspot.s3.amazonaws.com%2F05%2Fc0%2Ff9a2e7bc4813b93c24ed78e87f6d%2Fjohnson-aug11-gettyimages-1303825740.jpg" />
            <Box>
                <Box mx="10" justifyContent='center' my='10'>
                    <Center flexDir='column'>
                        <Heading borderLeftWidth='8px' borderColor='red.600' pl='2' size='xl'>Certified Web 3.0 and Metaverse Developer</Heading>
                        <Text py='5' textAlign='center'>A One and Quarter Years Panaverse DAO Earn as you Learn Program
                            Getting Ready for the Next Generation of the Internet
                            Consolidating  <b>Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</b> </Text>
                    </Center>
                </Box>

                <Box mx="10" justifyContent='center' my='10'>
                    <Center flexDir='column'>
                        <Heading borderLeftWidth='6px' borderColor='red.600' pl='2' size='lg'><b>Core Courses</b> (Common in All Specializations)</Heading>
                        <Text py='5' textAlign='center'>A One and Quarter Years Panaverse DAO Earn as you Learn Program
                            Getting Ready for the Next Generation of the Internet
                            Consolidating  <b>Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</b> </Text>
                    </Center>
                    <Center>
                        <Flex gap='15px' mt='10'>
                            <Box sx={boxColor}>
                                <Heading  >Quater I </Heading>
                                <Text pt='10px'><b>CS-101:</b> Object-Oriented Programming using TypeScript</Text>
                            </Box>
                            <Box sx={boxColor}><Heading >Quater II</Heading>
                                <Text pt='10px'><b>W2-201:</b> Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Text></Box>
                            <Box sx={boxColor}>
                                <Heading >Quater III</Heading>
                                <Text pt='10px' ><b>$-101:</b> Dollar Making Bootcamp - Full-Stack Template and API Product Development</Text>
                            </Box>
                        </Flex>
                    </Center>
                </Box>
            </Box>
        </>
    )
}
