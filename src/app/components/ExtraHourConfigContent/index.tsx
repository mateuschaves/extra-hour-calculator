import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import { 
  Button, 
  Divider, 
  DrawerBody, 
  DrawerContent, 
  DrawerFooter, 
  DrawerHeader, 
  Flex, 
  FormControl, 
  FormLabel, 
  Heading, 
  Input, 
  InputGroup, 
  InputLeftElement 
} from '@chakra-ui/react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
 
const numberMask = createNumberMask({
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 5,
  allowNegative: false,
  allowLeadingZeroes: false,
})

type Props = {
  onClose: () => void;
  onConfirm: () => void;
  hourValue: string;
  setHourValue: (value: string) => void;
}

export default function ExtraHourConfigContent({ onClose, onConfirm, hourValue, setHourValue }: Props) {
  return (
    <DrawerContent>
        <DrawerHeader>
          <Flex
            flex={1}
            justifyContent={'space-between'}
            flexDirection={'row'}
            alignItems={'center'}
          >
            <Heading size={'md'}>
              Configurações
            </Heading>
            <CloseIcon 
              boxSize={4} 
              _hover={{ cursor: 'pointer' }} 
              onClick={onClose} 
            />
          </Flex>

          <Divider marginY={'4'} />
        </DrawerHeader>

        <DrawerBody>
          <FormControl>
            <FormLabel>Valor hora</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
              >
                R$
              </InputLeftElement>
              <Input 
                as={MaskedInput} 
                mask={numberMask} 
                value={hourValue} 
                onChange={(event) => setHourValue(event.target.value) }
              />
            </InputGroup>
          </FormControl>
        </DrawerBody>

        <DrawerFooter>
        <Flex 
          flex={1} 
          direction='row' 
          justifyContent='space-between' 
          alignItems='center'
        >
            <Button
              variant='outline'
              title='Cancelar'
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button
              variant={'solid'}
              title='Salvar'
              onClick={onConfirm}
            >
              Salvar
            </Button>
          </Flex>
        </DrawerFooter>

      </DrawerContent>
  )
}
