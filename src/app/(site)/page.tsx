'use client'
import React, { useRef, useState } from 'react'
import { Container, Divider, useDisclosure} from '@chakra-ui/react'

import { uuid } from 'uuidv4';

import EmptyList from '@/app/components/EmptyList'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import BaseModal from '@/app/components/BaseModal'
import AddExtraHourForm from '@/app/components/AddExtraHourForm'
import ExtraHourList from '@/app/components/ExtraHourList';

import { delay } from '@/app/utils/async.util'

import { FocusableElement } from '@chakra-ui/utils'
import { getDifferenceInHours } from '../utils/extraHour.util';

export type ExtraHour = {
  id: string
  entryDate: string
  exitDate: string
  description?: string
  totalHours?: number
  totalMoney?: number
}

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef<FocusableElement>()

  const [isLoading, setIsLoading] = useState(false)
  const [extraHours, setExtraHours] = useState<ExtraHour[]>([])

  const isExtraHoursEmpty = extraHours.length === 0

  const totalExtraHours = extraHours.reduce((acc, extraHour) => {
    return acc + (extraHour?.totalHours ?? 0)
  }, 0)

  async function handleAddExtraHour(entryDate: string, exitDate: string, description: string) {
    const id = uuid()
    setIsLoading(true)

    const differenceInHours = getDifferenceInHours(entryDate, exitDate)

    const newExtraHour: ExtraHour = {
      id,
      entryDate,
      exitDate,
      description,
      totalHours: differenceInHours
    }

    setExtraHours([...extraHours, newExtraHour])

    await delay(1000)

    setIsLoading(false)
    onClose()
  }

  function handleOpenModal() {
    onOpen()
  }

  function renderExtraHours() {
    return isExtraHoursEmpty ? <EmptyList title='Sem horas extras 🥲'/> : <ExtraHourList extraHours={extraHours}/>
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
      <Header title='Horas extras' totalExtraHours={totalExtraHours} />
      {renderExtraHours()}
      <Footer 
        buttonTitle='Adicionar' 
        handleOpenModal={handleOpenModal} 
        totalMoneyValue={9}
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
