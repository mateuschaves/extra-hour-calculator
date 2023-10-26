'use client'
import React, { useEffect, useRef, useState, useId } from 'react'
import { Container, Divider, useDisclosure} from '@chakra-ui/react'

import { uuid } from 'uuidv4';

import EmptyList from '@/app/components/EmptyList'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import BaseModal from '@/app/components/BaseModal'
import AddExtraHourForm from '@/app/components/AddExtraHourForm'
import { delay } from '@/app/utils/async.util'

import { FocusableElement } from '@chakra-ui/utils'

type ExtraHour = {
  id: string
  entryDate: string
  exitDate: string
  totalHours?: number
  totalMoney?: number
}

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<FocusableElement>()

  const [isLoading, setIsLoading] = useState(false)
  const [extraHours, setExtraHours] = useState<ExtraHour[]>([])

  useEffect(() => {
    onOpen()
  }, [])

  async function handleAddExtraHour() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const id = uuid()
    setIsLoading(true)

    const newExtraHour: ExtraHour = {
      id,
      entryDate: '2021-10-10T10:00',
      exitDate: '2021-10-10T18:00',
    }

    setExtraHours([...extraHours, newExtraHour])

    await delay(1000)

    setIsLoading(false)
    onClose()
  }

  async function handleOpenModal() {
    onOpen()
  }
  
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
      <Footer 
        buttonTitle='Adicionar' 
        handleOpenModal={handleOpenModal} 
        totalMoneyValue={9000} 
      />


      <BaseModal 
        cancelRef={cancelRef as unknown as React.RefObject<FocusableElement>}
        onClose={onClose}
        isOpen={isOpen}
      >
        <AddExtraHourForm 
          cancelRef={cancelRef as unknown as React.RefObject<FocusableElement>}
          onClose={onClose}
          isLoading={isLoading}
          onAddExtraHour={handleAddExtraHour}
        />
      </BaseModal>
    </Container>
  )
}
