import { HStack, Icon, Text, Box, Stack } from "@chakra-ui/react";
import { MoneyBackGuaranteeIcon, HassleFreeIcon, MonthlySubscriptionIcon } from '../icons/Icon'

function FeatureIcons(props) {
    const { icon, children, ...rest } = props;
    return (
        <HStack {...rest} spacing='6' align='start'>
            <Icon as={icon} boxSize={['8', '8', '12']} />
            <Text fontSize='lg  ' fontWeight='bold' textAlign='left'>{children}</Text>
        </HStack>
    )
}

function Features() {
    return (
        <Box maxW='1024px' m='auto' pt='12' pb='8' as="section">
            <Stack spacing={['6', '6', '5']} direction={['column', 'column', 'row']} px='12'>
                <FeatureIcons icon={MoneyBackGuaranteeIcon}>
                    30 days money back Guarantee
                </FeatureIcons>
                <FeatureIcons icon={HassleFreeIcon}>
                    No setup fees 100% hassle-free
                </FeatureIcons>
                <FeatureIcons icon={MonthlySubscriptionIcon}>
                    No monthly subscription Pay once and for all
                </FeatureIcons>
            </Stack>
        </Box>
    )
}

export default Features