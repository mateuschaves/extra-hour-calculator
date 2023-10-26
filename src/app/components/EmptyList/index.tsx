import React from 'react'
import { Text } from '@chakra-ui/layout'

type Props = {
  title: string
}

function EmptyList({ title }: Props) {
  return (
    <Text align={'center'} color='GrayText'>
      {title}
    </Text>
  )
}

export default EmptyList