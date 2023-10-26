import { formatMoneyBRL } from '@/app/utils/format.util';
import { Button } from '@chakra-ui/button';
import { AddIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';

type Props = {
    buttonTitle: string
    totalMoneyValue: number
}

function Footer({ buttonTitle, totalMoneyValue }: Props) {
    return (
        <Flex 
            flex={1} 
            width={'inherit'} 
            flexDirection={'row'} 
            alignItems={'center'} 
            justifyContent={'space-between'}
        >
            <Flex>
                <Text>{formatMoneyBRL(totalMoneyValue)}</Text>
            </Flex>
            <Button
                leftIcon={<AddIcon />}
                type='button'
                variant={'ghost'}
            >
                {buttonTitle}
            </Button>
        </Flex>
    );
}

export default Footer;
