import Head from 'next/head';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import SkillList from '../components/SkillList';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Aries Dev</title>
            </Head>
            <Flex
                className={styles.main}
                direction='column'
                h='350vh'
                alignContent='center'
            >
                <Box textAlign="center" mt='20%'>
                    <Heading as='h1' size='4xl' color='#ccc' fontSize='96px'>
                        Aries Dimaranan
                    </Heading>
                    <Heading as='h2' size='2xl' color='#ccc' fontSize='96px'>
                        Full-Stack Developer
                    </Heading>
                </Box>
                <Flex direction='column' mt='25%' ml='5%'>
                    <Heading as='h3' size='xl' color='#ccc' fontSize='54px'>
                        Hi There
                    </Heading>
                    <Flex direction='row' w='100%' justify='space-between'>
                        <Text w='40%' color='#ccc' fontSize='32px' mt='2%'>
                            I'm a fullstack developer and computer science student at the University of Calgary. 
                            <br />
                            <br />
                            I make web apps.
                        </Text>
                        <SkillList />
                    </Flex>
                    
                </Flex>
            </Flex>
        </>
    )
}
