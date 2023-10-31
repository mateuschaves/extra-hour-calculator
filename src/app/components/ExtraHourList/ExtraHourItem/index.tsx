import { ExtraHour } from '@/app/(site)/page'
import { formatDayAndMonth as formatDateTime, getDifferenceInHours } from '@/app/utils/format.util'
import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

type Props = {
    extraHour: ExtraHour
}

export default function ExtraHourItem({ extraHour }: Props) {
    return (
        <Tr _hover={{
            cursor: 'pointer',
            backgroundColor: 'gray.100'
        }}>
            <Td>{formatDateTime(extraHour.entryDate)}</Td>
            <Td>{formatDateTime(extraHour.exitDate)}</Td>
            <Td>{extraHour.description}</Td>
            <Td isNumeric>{getDifferenceInHours(extraHour.entryDate, extraHour.exitDate)}</Td>
        </Tr>
    )
}
