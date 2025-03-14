'use client';

import React, {useEffect, useMemo, useRef, useState} from 'react'
import { Container, Flex, Text, useDisclosure, useToast } from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons';

import { v4 } from 'uuid';

import EmptyList from '@/app/components/EmptyList'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import BaseModal from '@/app/components/BaseModal'
import AddExtraHourForm from '@/app/components/AddExtraHourForm'
import ExtraHourList from '@/app/components/ExtraHourList';

import { delay } from '@/app/utils/async.util'
import { calculateExtraHoursV2, convertTaxToPercentage, getDifferenceInHours } from '@/app/utils/extraHour.util';
import { FocusableElement } from '@chakra-ui/utils'
import ExtraHourConfigDrawer from './components/ExtraHourConfigDrawer';
import { useInfoContext } from '@/app/contexts/info.context';
import { formatMoneyBRL } from '@/app/utils/format.util';
import StorageClient, { StorageKeys } from "@/lib/storage";

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
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure()
  const infoContext = useInfoContext()
  const cancelRef = useRef<FocusableElement>()
  const [isLoading, setIsLoading] = useState(false)
  const [extraHours, setExtraHours] = useState<ExtraHour[]>([])
  const isExtraHoursEmpty = useMemo(() => extraHours.length === 0, [extraHours])
  const toast = useToast()

  const storageService = new StorageClient();

  useEffect(() => {
    const extraHours = storageService?.get<ExtraHour[]>(StorageKeys.EXTRA_HOURS)

    setExtraHours(extraHours ?? [])
  }, [])

  const totalExtraHours = useMemo(() => {
    return extraHours.reduce((acc, extraHour) => {
      return acc + (extraHour?.totalHours ?? 0)
    }
    , 0)
  }, [extraHours])

  const totalExtraMoney = useMemo(() => {
    return extraHours.reduce((acc, extraHour) => {
      return acc + (extraHour?.totalMoney ?? 0)
    }
    , 0)
  }, [extraHours])

  async function handleAddExtraHour(entryDate: string, exitDate: string, description: string) {
    try {
      const id = v4()
      setIsLoading(true)

      const differenceInHours = getDifferenceInHours(entryDate, exitDate)

      const taxConfig = {
        normalTax: convertTaxToPercentage(infoContext.normalTax),
        nightTax: convertTaxToPercentage(infoContext.nightTax),
        holidayTax: convertTaxToPercentage(infoContext.holidayTax)
      }

      const totalMoney = await calculateExtraHoursV2(
        new Date(entryDate),
        new Date(exitDate),
        +infoContext.valueHour,
        taxConfig
      )

      const newExtraHour: ExtraHour = {
        id,
        entryDate,
        exitDate,
        description,
        totalHours: differenceInHours,
        totalMoney,
      }

      const newExtraHours = [...extraHours, newExtraHour]

      setExtraHours(newExtraHours)
      storageService?.save<ExtraHour[]>(StorageKeys.EXTRA_HOURS, newExtraHours);

      await delay(1000)

      setIsLoading(false)
      onClose()
      toast({
        title: 'Hora adicionada com sucesso 🎉',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } catch (error) {
      console.log(error)
      toast({
        title: 'Erro ao registrar hora extra 🥲',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  function handleOpenModal() {
    onOpen()
  }

  function handleOpenDrawer() {
    onDrawerOpen()
  }

  function renderExtraHours() {
    return isExtraHoursEmpty ? <EmptyList title='Sem horas extras 🥲'/> : <ExtraHourList extraHours={extraHours}/>
  }

  function handleConfigExtraHour() {
    onDrawerClose()
  }
  
  return (
    <Flex flex={1} direction={'column'} padding='10'>
      <ExtraHourConfigDrawer
        isOpen={isDrawerOpen}
        onClose={onDrawerClose}
        onConfirm={handleConfigExtraHour}
      />
      <HamburgerIcon 
        alignSelf={'flex-end'}
        boxSize={6}
        _hover={{
          cursor: 'pointer'
        }}
        onClick={handleOpenDrawer}
      />
      <Container
        maxWidth={'container.md'}
        backgroundColor={'Background'}
        borderRadius={'md'}
        paddingX={'4'}
        paddingY={4}
        marginTop={'20'}
        marginBottom={'4'}
        borderTopColor={'blackAlpha.900'}
        borderTopWidth={'6px'}
      >
        <Header title='Horas extras' totalExtraHours={totalExtraHours} />
        {renderExtraHours()}
        <Footer 
          buttonTitle='Adicionar' 
          handleOpenModal={handleOpenModal} 
          totalMoneyValue={totalExtraMoney}
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
      <Text size='sm' marginX='auto'>
        Seu valor hora é de {formatMoneyBRL(infoContext.valueHour)}
      </Text>
    </Flex>
  )
}
