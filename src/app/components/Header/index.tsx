import React from 'react'
import { Heading } from '@chakra-ui/layout'

type Props = {
    title: string
}

function Header({ title }: Props) {
    return (
        <Heading
            fontWeight={'bold'}
            size={'lg'}
            marginBottom={'8'}
        >
            {title}
        </Heading>
    )
}

export default Header