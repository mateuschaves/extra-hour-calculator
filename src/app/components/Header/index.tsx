import React, { useMemo } from 'react'
import { Heading } from '@chakra-ui/layout'
import { Flex, Text } from '@chakra-ui/react'
import { formatHours } from '@/app/utils/format.util'

type Props = {
    title: string
    totalExtraHours: number
}

function Header({ title, totalExtraHours }: Props) {

    const hasExtraHours = useMemo(() => totalExtraHours > 0, [totalExtraHours])
    const _formatHours = useMemo(() => formatHours(totalExtraHours), [totalExtraHours])

    const extraHourDescription = `Você fez ${_formatHours} esse mês`

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