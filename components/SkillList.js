import styles from '../styles/SkillStyles.module.css';
import { List, ListItem, Text, Box, Flex } from '@chakra-ui/react';

export default function SkillList() {
    return (
        <List color='#ccc' spacing={5} w='50%'>
            <ListItem fontSize='32px'>
                <Text>
                    ReactJS
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='85%'>
                        <Text pr='1%'>
                            85%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text>
                    Javascript
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='85%'>
                        <Text pr='1%'>
                            85%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text>
                    NextJS
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='50%'>
                        <Text pr='1%'>
                            50%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text>
                    Express
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='60%'>
                        <Text pr='1%'>
                            60%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text>
                    NodeJS
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='65%'>
                        <Text pr='1%'>
                            65%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text>
                    MongoDB
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='70%'>
                        <Text pr='1%'>
                            70%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text>
                    Java
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='80%'>
                        <Text pr='1%'>
                            80%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
            <ListItem fontSize='32px'>
                <Text>
                    Python
                </Text>
                <Box className={styles.container}>
                    <Flex className={styles.skills} justify='flex-end' align='center' w='70%'>
                        <Text pr='1%'>
                            70%
                        </Text>
                    </Flex>
                </Box>
            </ListItem>
        </List>
    )
}
