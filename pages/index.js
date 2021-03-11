import Head from 'next/head';
import { useEffect } from 'react';
import { Flex, Box, Heading, Text, Link, Image } from '@chakra-ui/react';
import SkillList from '../components/SkillList';
import styles from '../styles/Home.module.css';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link as ScrollLink } from 'react-scroll';

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

    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);

    return (
        <Box w='100%'>
            <Head>
                <title>Aries Dev</title>
            </Head>
            <Flex
                direction='column'
                h='610vh'
                alignContent='center'
            >
                <Box textAlign="center" mt={['40%', '15%']} ml='auto' mr='auto'>
                    <Box>
                        <Heading as='h1' size='4xl' color='#ccc' fontSize={['49px', '96px']} className={styles.loadslide}>
                            Aries Dimaranan
                        </Heading>
                    </Box>
                    <Box h={['6px', '10px']} w={['90%', '100%']} bg='#ccc' ml='auto' mr='auto' borderRadius='5px' mt='1%' mb='1%' />
                    <Box>
                        <Heading as='h2' size='2xl' color='#ccc' fontSize={['44px', '96px']} className={styles.delayedslide}>
                            Full-Stack Developer
                        </Heading>
                    </Box>
                </Box>
                <Box cursor='pointer' bg='rgba(255, 255, 255, 0.1)'
                    ml='auto' mr='auto' mt={['50%', '15%']} borderRadius='50%' data-aos='fade' data-aos-delay='2500'
                >
                    <ScrollLink to='section' smooth={true} duration={10}>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="64px"
                            height="64px"
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
                    </ScrollLink>
                </Box>
                <Flex direction='column' mt={['30%', '14%']} ml='5%' id='section' className={styles.section} pt={['10%', '1%']}>
                    <Heading as='h3' size='xl' color='#ccc' fontSize={['38px', '54px']} data-aos='fade-right'>
                        Hi There
                    </Heading>

                    <Flex direction={['column', 'row']} w='100%' justify='space-between' overflow='hidden'>
                        <Text w={['100%', '40%']} color='#ccc' fontSize={['24px', '32px']} mt='2%' overflow='hidden' data-aos='fade-up' data-aos-duration='2500'>
                            I'm a fullstack developer and computer science student at the University of Calgary. 
                            <br />
                            <br />
                            I make web apps.
                        </Text>
                        <SkillList />
                    </Flex>
                    
                    <Heading as='h3' size='xl' fontSize={['38px', '54px']} color='#ccc' mt={['30%', '7%']} mb={['25%', '5%']} data-aos='fade-right'>
                        The Things I've Made
                    </Heading>
                    <Flex align='center' direction='column' mr='5%'>
                        <Heading as='h4' size='lg' textAlign='center' color='#ccc' mb='2%' data-aos='fade-right'>Coffee Till <br/> Point-of-Sale</Heading>
                        <ProjectCard img="/images/coffeetill.PNG" url="https://coffee-till.netlify.app/" />

                        <Heading as='h4' size='lg' color='#ccc' mb='2%' mt={['20%', '5%']} data-aos='fade-right'>Cookbook</Heading>
                        <ProjectCard img="/images/cookbook.PNG" url="https://aa-cookbook.herokuapp.com/" />
                        
                        <Heading as='h4' size='lg' color='#ccc' mb='2%' mt={['20%', '5%']} data-aos='fade-right'>Zapr Blogs</Heading>
                        <ProjectCard img="/images/zapr.PNG" url="https://zapr.netlify.app/" />
                    </Flex>

                    <Heading as='h3' size='xl' fontSize={['38px', '54px']} color='#ccc' mt={['30%', '7%']} mb='5%' data-aos='fade-right'>
                        Know What You Want to Make? Let's Talk
                    </Heading>
                    <Flex direction={['column', 'row']} w='100%' overflow='hidden'>
                        <Flex direction={['row', 'row']} justify='space-between' alignItems='center' w='300px'>
                            <Link href='https://www.github.com/AD-Blue' isExternal='true'>
                                <Image src='\images\github.png' h={[40, 120]} w={30, 120} data-aos='fade-up' />
                            </Link>
                            <Link href='https://www.linkedin.com/in/aries-dimaranan-5664b91a1/' isExternal='true'>
                                <Image src='/images/linkedin.png' h={25, 100} w={30, 120} data-aos='fade-up' data-aos-delay='350' />
                            </Link>
                        </Flex>
                        <Text ml='7%' color='#ccc' fontSize={['24px']} mt={['20%', '0%']} data-aos='fade-left'>
                            Email
                            <br />
                            aasdimaranan@gmail.com
                        </Text>
                    </Flex>

                </Flex>
            </Flex>
        </Box>
    )
}
