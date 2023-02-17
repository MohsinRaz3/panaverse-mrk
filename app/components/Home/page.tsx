import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function page(home: any) {
    return (
        <Box bgImage={home.src} bgAttachment='fixed' bgSize='cover'>
            <Container maxW='90%' h='60vh'>
                <Heading py='150px' color='blackAlpha.800' size='2xl' > {home.title}</Heading>
            </Container>
        </Box>
    )
}
