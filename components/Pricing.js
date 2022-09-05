import React from 'react';
import { Box, Flex, Text, Heading, Button, VStack, HStack, Icon, Stack } from '@chakra-ui/react';
import MyIcon from '/icons/MyIcon.js';

export const ListItem = (props) => {
    const { children, ...rest } = props;
    return (
        <HStack as='li' spacing='20px' {...rest}>
            <Icon as={MyIcon} w='22px' h='22px' />
            <Text>{children}</Text>
        </HStack>
    )
}

function Pricing() {
    return (
        <Box maxW='1400px' margin='auto' mt='-300px' bg='white' boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' borderRadius='12px'
            overflow='hidden' textAlign='center'>
            <Flex>
                <Box bg='#F0EAFB' p='120px'>
                    <VStack>
                        <Text fontWeight='800px' fontSize='24px'>Premium PRO</Text>
                        <Heading as='h3' fontSize='60px' mt='16px'>$329</Heading>
                        <Text color='#171923' fontSize='18px' mt='8px'>billed just once</Text>
                        <Button colorScheme='purple' size='lg' w='282px' mt='24px'>Get Started</Button>
                    </VStack>
                </Box>
                <Box p='120px' fontSize='18px'>
                    <Text>Access these features when you get this pricing package business.</Text>
                    <Stack as='ul' spacing='20px' pt='24px'>
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>International calling and messaging API</ListItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}

export default Pricing;