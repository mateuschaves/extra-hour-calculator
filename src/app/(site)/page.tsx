'use client'
import React, { useEffect, useRef } from 'react'
import { Container, Divider, useDisclosure} from '@chakra-ui/react'

import EmptyList from '@/app/components/EmptyList'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import BaseModal from '../components/BaseModal'
import AddExtraHourForm from '../components/AddExtraHourForm'
import { FocusableElement } from '@chakra-ui/utils'

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<FocusableElement>()

  useEffect(() => {
    onOpen()
  }, [])
  
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


      <BaseModal 
        cancelRef={cancelRef as unknown as React.RefObject<FocusableElement>}
        onClose={onClose}
        isOpen={isOpen}
      >
        <AddExtraHourForm 
          cancelRef={cancelRef as unknown as React.RefObject<FocusableElement>}
          onClose={onClose}
          isLoading={true}
        />
      </BaseModal>
    </Container>
  )
}
