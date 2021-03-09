import Head from 'next/head';
import { Flex, Box, Heading, Text, Link } from '@chakra-ui/react';
import SkillList from '../components/SkillList';
import styles from '../styles/Home.module.css';
import ProjectCard from '../components/ProjectCard';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
    const icon = {
        hidden: {
             pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    }

    return (
        <>
            <Head>
                <title>Aries Dev</title>
            </Head>
            <Flex
                className={styles.main}
                direction='column'
                h='610vh'
                alignContent='center'
            >
                <Box textAlign="center" mt='15%' ml='auto' mr='auto'>
                    <Box>
                        <Heading as='h1' size='4xl' color='#ccc' fontSize='96px' className={styles.loadslide}>
                            Aries Dimaranan
                        </Heading>
                    </Box>
                    <Box h='10px' w='100%' bg='#ccc' ml='auto' mr='auto' borderRadius='5px' mt='1%' mb='1%' />
                    <Box>
                        <Heading as='h2' size='2xl' color='#ccc' fontSize='96px' className={styles.delayedslide}>
                            Full-Stack Developer
                        </Heading>
                    </Box>
                </Box>
                <a href='#section' className={styles.temp}>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="64px"
                        height="64px"
                        className={styles.item}
                    >
                        <motion.path
                            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut" },
                                fill: { duration: 1, ease: [1, 0, 0.8, 1] }
                              }}
                        />
                    </motion.svg>
                </a>
                <Flex direction='column' mt='14%' ml='5%' id='section' className={styles.section} pt='1%'>
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
                    <Flex align='center' direction='column' mr='5%'>
                        <Heading as='h4' size='lg' color='#ccc' mb='2%'>Coffee Till Point-of-Sale</Heading>
                        <ProjectCard img="/images/coffeetill.PNG" url="https://coffee-till.netlify.app/" />
                        <Heading as='h4' size='lg' color='#ccc' mb='2%' mt='5%'>Cookbook</Heading>
                        <ProjectCard img="/images/cookbook.PNG" url="https://aa-cookbook.herokuapp.com/" />
                        <Heading as='h4' size='lg' color='#ccc' mb='2%' mt='5%'>Zapr Blogs</Heading>
                        <ProjectCard img="/images/zapr.PNG" url="https://zapr.netlify.app/" />
                    </Flex>

                    <Heading as='h3' size='xl' fontSize='54px' color='#ccc' mt='7%' mb='5%'>
                        Know What You Want to Make? Let's Talk
                    </Heading>
                    <Flex direction='row' w='100%'>
                        <Flex direction='row' justify='space-between' alignItems='center' w='300px'>
                            <Link href='https://www.github.com/AD-Blue' isExternal='true'>
                                <Image src='/images/github.png' height={120} width={120} />
                            </Link>
                            <Link href='https://www.linkedin.com/in/aries-dimaranan-5664b91a1/' isExternal='true'>
                                <Image src='/images/linkedin.png' height={100} width={120} />
                            </Link>
                        </Flex>
                        <Text ml='7%' color='#ccc' fontSize='32px'>
                            Email
                            <br />
                            aasdimaranan@gmail.com
                        </Text>
                    </Flex>

                </Flex>
            </Flex>
        </>
    )
}
