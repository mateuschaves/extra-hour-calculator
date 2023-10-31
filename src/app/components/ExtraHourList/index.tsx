import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import ExtraHourItem from './ExtraHourItem'
import { ExtraHour } from '@/app/(site)/page'

type Props = {
    extraHours: ExtraHour[]
}

export default function ExtraHourList({ extraHours }: Props) {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>
                    Horas extras adicionadas
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Início</Th>
                        <Th>Fim</Th>
                        <Th>Descrição</Th>
                        <Th isNumeric>Horas</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {extraHours.map(extraHour => (
                        <ExtraHourItem key={extraHour.id} extraHour={extraHour} />
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
