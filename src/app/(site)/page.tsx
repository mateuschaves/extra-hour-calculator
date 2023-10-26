'use client'
import React from 'react'
import { Container, Divider} from '@chakra-ui/react'

import EmptyList from '@/app/components/EmptyList'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <Container
      maxWidth={'container.md'}
      backgroundColor={'Background'}
      borderRadius={'md'}
      paddingX={'4'}
      paddingY={4}
      marginY={'20'}
      borderTopColor={'blackAlpha.900'}
      borderTopWidth={'6px'}
    >
      <Header title='Horas extras' />
      <Divider marginY={4} />
      <EmptyList title='Sem horas extras 🥲' />
      <Divider marginY={4} />
      <Footer buttonTitle='Adicionar' totalMoneyValue={9000} />
    </Container>
  )
}
