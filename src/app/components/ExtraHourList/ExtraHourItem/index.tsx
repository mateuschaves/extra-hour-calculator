import React from 'react'
import { ExtraHour } from '@/app/(site)/page'
import { getDifferenceInHours } from '@/app/utils/extraHour.util'
import { formatDayAndMonth as formatDateTime } from '@/app/utils/format.util'
import { Td, Tr } from '@chakra-ui/react'

type Props = {
    extraHour: ExtraHour
}

export default function ExtraHourItem({ extraHour }: Props) {
    return (
        <Tr 
        _hover={{
            fontSize: 'sm',
            cursor: 'pointer',
            backgroundColor: 'gray.100',
        }}>
            <Td fontSize={'sm'}>{formatDateTime(extraHour.entryDate)}</Td>
            <Td fontSize={'sm'}>{formatDateTime(extraHour.exitDate)}</Td>
            <Td fontSize={'sm'}>{extraHour.description}</Td>
            <Td fontSize={'sm'} isNumeric>
                {getDifferenceInHours(extraHour.entryDate, extraHour.exitDate).toFixed(2)}
            </Td>
        </Tr>
    )
}
