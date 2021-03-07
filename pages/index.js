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

            <Nav />
            <Flex
                direction='column'
                bg='black'
                bgGradient="linear(rgba(80, 0, 110, 0.75), black 120%)"
                h='100vh'
            >
                <Box>
                    <Heading as='h1' size='4xl' color='#ccc' fontFamily='monospace' textShadow='0 0 5px #C8C8C8' mt='2%' ml='5%'>
                        $Aries Dimaranan
                    </Heading>
                    <Heading as='h2' size='2xl' color='#ccc' fontFamily='monospace' textShadow='0 0 5px #C8C8C8' ml='5%'>
                        {'>'}Full-Stack Developer
                    </Heading>
                </Box>
            </Flex>
        </>
    )
}
