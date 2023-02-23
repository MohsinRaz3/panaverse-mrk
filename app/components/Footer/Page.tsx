import React from 'react'
import { Box, Container, Image, SimpleGrid, Heading, Text, Grid } from '@chakra-ui/react'
import Link from 'next/link'

export default function Page() {
    const fontStyle = {
        fontSize: ['12px', '14px', '16px'],
        color: 'white'
    }
    return (
        <Box bg='blackAlpha.900'>
            <Box maxW='90%' sx={fontStyle} >
                <SimpleGrid pt='10' templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} spacing='30px' alignItems='center' justifyContent='center' textAlign={{ sm: 'center', lg: 'start' }}>
                    <Box p='6'><Heading as='h3' size='lg'>About Us</Heading>
                        <Image mt={{ base: '5', lg: '5' }} mx={{ base: 'auto', lg: '0' }} src='/panalogo.png' alt="Panaverse logo" width='50' height='10' />
                        <Text pt='2' color='whiteAlpha.600'>Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
                    </Box>

                    <Box p='6'>
                        <Heading as='h3' size='lg'>Important Links</Heading>
                        <Grid pt='2' color='whiteAlpha.600'>
                            <Link href='/'>Home</Link>
                            <Link href='/blog'>Blog</Link>
                            <Link href='/syllabus'>Syllabus</Link>
                            <Link href='/about'>About</Link>
                        </Grid>

                    </Box>
                    <Box p='6'>
                        <Heading as='h3' size='lg'>Social Links</Heading>
                        <Grid pt='2' color='whiteAlpha.600'>
                            <Link href='/'>Facebook</Link>
                            <Link href='/'>Twitter</Link>
                            <Link href='/'>LinkedIn</Link>
                            <Link href='/'>Youtube</Link>
                        </Grid></Box>
                    <Box p='6'>
                        <Heading as='h3' size='lg'>Contact us</Heading>
                        <Grid pt='2' color='whiteAlpha.600'>
                            <Link href='/'>+01234567890</Link>
                            <Link href='/'>piaic@contact.com</Link>
                            <Link href='/'>Karachi, Pakistan</Link>
                        </Grid>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    )
}
