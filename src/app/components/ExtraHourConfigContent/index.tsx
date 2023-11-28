import React from 'react'
import { CloseIcon, InfoIcon } from '@chakra-ui/icons'
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
  InputLeftElement,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger
} from '@chakra-ui/react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { useInfoContext } from '@/app/contexts/info.context'

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

const percentMask = createNumberMask({
  prefix: '',
  suffix: '',
  includeThousandsSeparator: false,
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 1,
  integerLimit: 3,
  allowNegative: false,
  allowLeadingZeroes: false,
})

type Props = {
  onClose: () => void;
  onConfirm: () => void;
}

export default function ExtraHourConfigContent({ onClose, onConfirm }: Props) {
  const infoContext = useInfoContext()

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

      <DrawerBody flex={1} gap={'8'} display={'flex'} flexDirection={'column'}>
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
              value={infoContext.valueHour}
              onChange={(event) => infoContext.setValueHour(event.target.value)}
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <FormLabel>Taxa noturna</FormLabel>
            <Popover placement='top'>
              <PopoverTrigger>
                <InfoIcon
                  boxSize={4}
                  _hover={{ cursor: 'pointer' }}
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader fontWeight={'semibold'}>Taxa noturna</PopoverHeader>
                <PopoverBody>
                  Essa é a taxa cobrada ao registrar horas extras entre 22:00 e 06:00.
                  <br /><br />Ex. Se o valor da hora é R$ 10,00 e a taxa é 20%, o valor da hora extra noturna será R$ 12,00.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          <InputGroup>
            <Input
              as={MaskedInput}
              mask={percentMask}
              value={infoContext.nightTax}
              onChange={(event) => infoContext.setNightTax(event.target.value)}
            />
            <InputRightElement
              pointerEvents='none'
              color='gray.300'
            >
              %
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <FormLabel>Taxa domingo/feriados</FormLabel>
            <Popover placement='top'>
              <PopoverTrigger>
                <InfoIcon
                  boxSize={4}
                  _hover={{ cursor: 'pointer' }}
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader fontWeight={'semibold'}>Taxa domingos ou feriados</PopoverHeader>
                <PopoverBody>Essa é a taxa cobrada ao registrar horas extras em domingos ou feriados
                  <br /><br />Ex. Se o valor da hora é R$ 10,00 e a taxa é 100%, o valor da hora extra em domingos ou feriados será R$ 20,00.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          <InputGroup>
            <Input
              as={MaskedInput}
              mask={percentMask}
              value={infoContext.holidayTax}
              onChange={(event) => infoContext.setHolidayTax(event.target.value)}
            />
            <InputRightElement
              pointerEvents='none'
              color='gray.300'
            >
              %
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
            <FormLabel>Taxa hora extra</FormLabel>
            <Popover placement='top'>
              <PopoverTrigger>
                <InfoIcon
                  boxSize={4}
                  _hover={{ cursor: 'pointer' }}
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader fontWeight={'semibold'}>Taxa hora extra</PopoverHeader>
                <PopoverBody>
                  Essa é a taxa cobrada ao registrar horas extras.
                  <br /><br />Ex. Se o valor da hora é R$ 10,00 e a taxa é 50%, o valor da hora extra será R$ 15,00.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          <InputGroup>
            <Input
              as={MaskedInput}
              mask={percentMask}
              value={infoContext.normalTax}
              onChange={(event) => infoContext.setNormalTax(event.target.value)}
            />
            <InputRightElement
              pointerEvents='none'
              color='gray.300'
            >
              %
            </InputRightElement>
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
