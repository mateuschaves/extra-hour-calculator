import { ExtraHour } from '@/app/(site)/page'
import { ListItem } from '@chakra-ui/react'
import React from 'react'

type Props = {
    extraHour: ExtraHour
}

export default function ExtraHourItem({extraHour}: Props) {
    return (
        <ListItem>
            {extraHour.description}
        </ListItem>
    )
}
