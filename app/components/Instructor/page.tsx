import React from 'react'
import {
    Box, Container, Center, Text, Image, Heading, Flex
} from '@chakra-ui/react'
import { data } from '../../database/db'

export default function page() {
    return (
        <Box pb='60px'>
            <Container maxW='90%' >
                <Center>
                    <Heading mb='30px'>Our Instructors</Heading>
                </Center>
                <Flex flexDir={['column', 'column', 'column', 'row']}>
                    {data.map((ins: any) => (
                        <Box key={ins.id}>
                            <Center>
                                <Image pt='5px' borderRadius='full' width={90} height={90} src={ins.src} alt=''></Image>
                            </Center>

                            <Heading size='md' pt='5px' textAlign='center'>{ins.heading}</Heading>
                            <Text pt='10px' px='20px' textAlign='center'>{ins.text}</Text>
                        </Box>
                    ))}
                </Flex>
            </Container>
        </Box>
    )
}
