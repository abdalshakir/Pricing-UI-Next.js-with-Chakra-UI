import React from 'react';
import { Box, Flex, Text, Heading, Button, VStack, HStack, Icon, Stack } from '@chakra-ui/react';
import { MyIcon } from '../icons/Icon';

export const ListItem = (props) => {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='5' {...rest} alignItems='start'>
            <Icon as={MyIcon} w='22px' h='22px' />
            <Text textAlign={['left', 'left', 'center']}>{children}</Text>
        </HStack>
    )
}

function Pricing() {
    return (
        <Box mx='6'>
            <Box maxW='1100px' margin='auto' mt='-60' bg='white' boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' borderRadius='12px'
                overflow='hidden'>
                <Flex direction={['column', 'column', 'row']}>
                    <Box bg='#F0EAFB' p={['10', '16', '20']}>
                        <VStack>
                            <Text fontWeight='extrabold' fontSize='2xl'>Premium PRO</Text>
                            <Heading as='h3' fontSize={['5xl', '5xl', '6xl']} mt='4'>$329</Heading>
                            <Text color='#171923' fontSize='md' mt='2'>billed just once</Text>
                            <Button colorScheme='purple' size='lg' w='282px' mt='6'>Get Started</Button>
                        </VStack>
                    </Box>
                    <Box p={['32px', '32px', '60px']}  fontSize='md'>
                        <Text>Access these features when you get this pricing package business.</Text>
                        <Stack as='ul' spacing='7' pt='6'>
                            <ListItem>International calling and messaging API</ListItem>
                            <ListItem>Additional phone numbers</ListItem>
                            <ListItem>Automated messages via Zapier</ListItem>
                            <ListItem>24/7 support and consulting</ListItem>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Pricing;