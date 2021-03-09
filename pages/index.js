import Head from 'next/head';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import SkillList from '../components/SkillList';
import styles from '../styles/Home.module.css';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
    return (
        <>
            <Head>
                <title>Aries Dev</title>
            </Head>
            <Flex
                className={styles.main}
                direction='column'
                h='550vh'
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
                <Flex direction='column' mt='25%'>
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
                    
                    <Heading as='h3' size='xl' fontSize='54px' color='#ccc' mt='7%' mb='5%'>
                        The Things I've Made
                    </Heading>
                    <Flex align='center' direction='column'>
                        <Heading as='h4' size='lg' color='#ccc' mb='2%'>Coffee Till Point-of-Sale</Heading>
                        <ProjectCard img="/images/coffeetill.PNG" url="https://coffee-till.netlify.app/" />
                        <Heading as='h4' size='lg' color='#ccc' mb='2%' mt='5%'>Cookbook</Heading>
                        <ProjectCard img="/images/cookbook.PNG" url="https://aa-cookbook.herokuapp.com/" />
                        <Heading as='h4' size='lg' color='#ccc' mb='2%' mt='5%'>Zapr Blogs</Heading>
                        <ProjectCard img="/images/zapr.PNG" url="https://zapr.netlify.app/" />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
