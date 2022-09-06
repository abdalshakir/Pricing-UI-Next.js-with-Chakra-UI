import React from 'react';
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function Header() {
    return (
        <Box as='section' pb='80px'>
            <Box color='#F7FAFC' bg='#6B46C1' pt='90px' pb='230px'>
                <VStack>
                    <Heading fontWeight='800' fontSize='48px'>Simple pricing for your business</Heading>
                    <Text fontWeight='500' fontSize='24px'>Plans that are carefully crafted to suit your business.</Text>
                </VStack>
            </Box>
        </Box>
    )
}

export default Header;