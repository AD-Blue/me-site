import Head from 'next/head';
import Nav from '../components/Nav';
import { Flex, Box, Heading } from '@chakra-ui/react';
import SocialBar from '../components/socialBar';

export default function Home() {
    return (
        <>
            <Head>
                <title>Aries Dimaranan</title>
            </Head>
            <Flex
                direction='column'
                bgGradient="linear(to-br, #292839, #111222)"
                h='100vh'
                justify='center'
                alignContent='center'
            >
                <Box textAlign="center">
                    <Heading as='h1' size='4xl' color='#ccc'>
                        Aries Dimaranan
                    </Heading>
                    <Heading as='h2' size='2xl' color='#ccc'>
                        Full-Stack Developer
                    </Heading>
                </Box>
            </Flex>
        </>
    )
}
