import { HStack, Icon, Text, Box } from "@chakra-ui/react";
import { MoneyBackGuaranteeIcon, HassleFreeIcon, MonthlySubscriptionIcon } from '../icons/Icon'

function FeatureIcons(props) {
    const { icon, children, ...rest } = props;
    return (
        <HStack {...rest} spacing='24px'>
            <Icon as={icon} boxSize='48px' />
            <Text fontSize='18px' fontWeight='700'>{children}</Text>
        </HStack>
    )
}

function Features() {
    return (
        <Box maxW='1024px' m='auto' pt='48px' pb='32px' as="section">
            <HStack spacing='20px'>
                <FeatureIcons icon={MoneyBackGuaranteeIcon}>
                    30 days money back Guarantee
                </FeatureIcons>
                <FeatureIcons icon={HassleFreeIcon}>
                    No setup fees 100% hassle-free
                </FeatureIcons>
                <FeatureIcons icon={MonthlySubscriptionIcon}>
                    No monthly subscription Pay once and for all
                </FeatureIcons>
            </HStack>
        </Box>
    )
}

export default Features