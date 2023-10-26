'use client'

import { Box, Button, Container, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import React from 'react'

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
      <Heading
        fontWeight={'bold'}
        size={'lg'}
      >
        Minhas horas
      </Heading>
      <Divider marginY={4} />
      <Text align={'center'}>
        Sem horas extras 🥲
      </Text>
      <Divider marginY={4} />
      <Flex flex={1} width={'inherit'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Flex>
          <Text colorScheme='gray'>R$ 9.000,00</Text>
        </Flex>
        <Button 
          leftIcon={<AddIcon />} 
          type='button' 
          variant={'ghost'}
          >
            Adicionar horas
        </Button>
      </Flex>
    </Container>
  )
}
