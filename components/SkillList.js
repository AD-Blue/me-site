import styles from '../styles/SkillStyles.module.css';
import { List, ListItem, Text, Box, Flex } from '@chakra-ui/react';

export default function SkillList() {
    return (
        <List color='#ccc' spacing={5} w={['100%', '50%']} mt={['20%', '0']} ml={['auto', '0']} mr={['auto', '0']} data-aos='fade-left'>
            <ListItem fontSize='32px'>
                <Text fontSize={['24px', '28px', '32px']}>
                    ReactJS
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='85%'>
                        <Text pr='2%' fontSize={['21px', '24px']}>
                            85%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text fontSize={['24px', '28px', '32px']}>
                    Javascript
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='85%'>
                        <Text pr='2%' fontSize={['21px', '24px']}>
                            85%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text fontSize={['24px', '28px', '32px']}>
                    NextJS
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='50%'>
                        <Text pr='2%' fontSize={['21px', '24px']}>
                            50%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text fontSize={['24px', '28px', '32px']}>
                    Express
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='60%'>
                        <Text pr='2%' fontSize={['21px', '24px']}>
                            60%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text fontSize={['24px', '28px', '32px']}>
                    NodeJS
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='65%'>
                        <Text pr='2%' fontSize={['21px', '24px']}>
                            65%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text fontSize={['24px', '28px', '32px']}>
                    MongoDB
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='70%'>
                        <Text pr='2%' fontSize={['21px', '24px']}>
                            70%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text fontSize={['24px', '28px', '32px']}>
                    Java
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='80%'>
                        <Text pr='2%' fontSize={['21px', '24px']}>
                            80%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text fontSize={['24px', '28px', '32px']}>
                    Python
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='70%'>
                        <Text pr='2%' fontSize={['21px', '24px']}>
                            70%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
        </List>
    )
}
