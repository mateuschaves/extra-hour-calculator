import React from 'react';
import { formatMoneyBRL } from '@/app/utils/format.util';
import { Button } from '@chakra-ui/button';
import { AddIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/layout';

type Props = {
    buttonTitle: string
    totalMoneyValue: number
    handleOpenModal: () => void
}

function Footer({ buttonTitle, totalMoneyValue, handleOpenModal }: Props) {
    const hasTotalMoneyValue = totalMoneyValue > 0

    return (
        <Flex 
            flex={1} 
            width={'inherit'} 
            flexDirection={'row'} 
            alignItems={'center'} 
            justifyContent={'space-between'}
            paddingTop={'8'}
        >
            <Flex>
                {hasTotalMoneyValue && <Text>{formatMoneyBRL(totalMoneyValue.toString())}</Text>}
            </Flex>
            <Button
                leftIcon={<AddIcon />}
                type='button'
                variant={'ghost'}
                onClick={handleOpenModal}
            >
                {buttonTitle}
            </Button>
        </Flex>
    );
}

export default Footer;
