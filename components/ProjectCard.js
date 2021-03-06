import Image from 'next/image';
import styles from '../styles/Card.module.css';
import { Box, Button, Link } from '@chakra-ui/react';

export default function ProjectCard({img, url}) {
    console.log('url: ', url)
    return (
        <Link href={url} isExternal='true'>
                <Image src={img} width={1440} height={702} className={styles.container} data-aos='fade-up' data-aos-duration='2300' data-aos-delay='300' />
        </Link>
    )
}
