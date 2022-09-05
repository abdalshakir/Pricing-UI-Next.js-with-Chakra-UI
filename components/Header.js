import React from 'react';
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function Header() {
    return (
        <Box as='section' pb='120px'>
            <Box color='#F7FAFC' bg='#6B46C1' pt='150px' pb='300px'>
                <VStack>
                    <Heading fontWeight='800px' fontSize='48px'>Simple pricing for your business</Heading>
                    <Text fontWeight='500px' fontSize='24px'>Plans that are carefully crafted to suit your business.</Text>
                </VStack>
            </Box>
        </Box>
    )
}

export default Header;