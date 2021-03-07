import { Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCoffee)

export default function SocialBar() {
    return (
        <Flex direction='column' bg='tomato'>
            <FontAwesomeIcon icon={['fab', 'github']} size='4x' mb='5%' />
            <FontAwesomeIcon icon={['fab', 'linkedin']} size='4x' />
        </Flex>
    );
}