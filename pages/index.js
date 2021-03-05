import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Aries Dimaranan</title>
            </Head>

            <Flex
                direction='column'
                bg='black'
                bgGradient="radial(rgba(80, 0, 110, 0.75), black 120%)"
                h='100vh'
                className={styles.main}
            >
                <Heading as='h1' size='4xl' color='#ccc' fontFamily='monospace' textShadow='0 0 5px #C8C8C8' mt='2%' ml='5%'>
                    $Aries Dimaranan
                </Heading>
                <Heading as='h2' size='2xl' color='#ccc' fontFamily='monospace' textShadow='0 0 5px #C8C8C8' ml='5%'>
                    {'>'}Full-Stack Developer
                </Heading>
            </Flex>
        </div>
    )
}
