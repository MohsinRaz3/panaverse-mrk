import { Box, Container, Heading, Center } from '@chakra-ui/react'
import React from 'react'

export default function page(home: any) {
    return (
        <Box bgImage={home.src} bgAttachment='fixed' bgSize='cover'>
            <Container maxW='90%' h='60vh'>
                <Heading pt='150px' borderBottomWidth='12px' w='20%' color='blackAlpha.800' size='2xl' borderColor='red.600'> {home.title}</Heading>
            </Container>
        </Box>
    )
}
