import React from 'react'
import { Divider, Flex, List } from '@chakra-ui/react'

import ExtraHourItem from './ExtraHourItem'
import { ExtraHour } from '@/app/(site)/page'

type Props = {
    extraHours: ExtraHour[]
}

export default function ExtraHourList({extraHours}: Props) {
    return (
        <List spacing={3}>
           {
                extraHours.map((extraHour) => (
                     <Flex key={extraHour.id}>
                         <ExtraHourItem extraHour={extraHour}/>
                         <Divider/>
                     </Flex>
                ))
           }
        </List>
    )
}
