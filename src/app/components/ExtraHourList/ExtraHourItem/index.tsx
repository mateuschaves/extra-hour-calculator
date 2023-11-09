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
