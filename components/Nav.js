import { Flex } from "@chakra-ui/react"
import Link from 'next/link';

export default function Nav() {
    return (
        <Flex w='100%' bg='#037ef3' justify='flex-end'>
            <Flex w='20%' justify='space-around'>
                <Link href='/'>Home</Link>
                <Link href='/socials'>Socials</Link>
            </Flex>
        </Flex>
    )
}
