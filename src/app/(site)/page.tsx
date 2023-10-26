import { Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
  return (
    <Container maxWidth={'container.xl'} backgroundColor={'Background'} borderRadius={'md'} padding={'10'} marginY={'20'}>
      <Heading fontWeight={'medium'} size={'md'}>Calculadora de Horas Extras</Heading>
    </Container>
  )
}
