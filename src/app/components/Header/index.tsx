import React from 'react'
import { Heading } from '@chakra-ui/layout'
import { Flex, Text } from '@chakra-ui/react'
import { formatHours } from '@/app/utils/format.util'

type Props = {
    title: string
    totalExtraHours: number
}

function Header({ title, totalExtraHours }: Props) {

    const hasExtraHours = totalExtraHours > 0

    const extraHourDescription = `Você fez ${formatHours(totalExtraHours)} esse mês`

    return (
        <Flex alignItems={'center'} justifyContent={'space-between'} marginBottom={8}>
            <Heading
                fontWeight={'bold'}
                size={'lg'}
            >
                {title}
            </Heading>
            {hasExtraHours && <Text>
                {extraHourDescription}
            </Text>}
        </Flex>
    )
}

export default Header