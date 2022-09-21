import React from 'react';
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function Header() {
    return (
        <Box as='section' pb='80px'>
            <Box color='gray.50' bg='purple.600' pt='90px' pb='230px' px='8' textAlign={['left', 'left', 'center']}>
                <VStack>
                    <Heading fontWeight='extrabold' fontSize={['3xl', '3xl', '5xl']}>Simple pricing for your business</Heading>
                    <Text fontWeight='medium' fontSize={['lg', 'lg', '2xl']}>Plans that are carefully crafted to suit your business.</Text>
                </VStack>
            </Box>
        </Box>
    )
}

export default Header;