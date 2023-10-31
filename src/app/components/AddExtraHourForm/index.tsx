import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex } from '@chakra-ui/layout';
import { AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader } from '@chakra-ui/modal';
import { FocusableElement } from '@chakra-ui/utils';
import React, { useRef } from 'react';

type onAddExtraHourFunction = (
    entryDate: string, 
    exitDate: string, 
    description:  string
) => void 

type Props = {
    cancelRef: React.RefObject<FocusableElement> | React.LegacyRef<HTMLButtonElement>
    onClose: () => void
    onAddExtraHour: onAddExtraHourFunction
    isLoading?: boolean
}

function AddExtraHourForm({ cancelRef, onClose, onAddExtraHour, isLoading = false }: Props) {
    const entryDateRef = useRef<HTMLInputElement>(null)
    const exitDateRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLInputElement>(null)

    function getValueFromRef(ref: React.RefObject<HTMLInputElement>) {
        return ref.current?.value as string
    }

    function handleAddExtraHour() {
        onAddExtraHour(
            getValueFromRef(entryDateRef), 
            getValueFromRef(exitDateRef), 
            getValueFromRef(descriptionRef)
        )
    }

    return (
        <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Registrar hora extra
            </AlertDialogHeader>

            <AlertDialogBody>

            <Flex flexDirection={'column'} gap={'8'}>
                <FormControl>
                    <FormLabel>Data de entrada</FormLabel>
                    <Input 
                        type='datetime-local' 
                        ref={entryDateRef} 
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Data de saída</FormLabel>
                    <Input 
                        type='datetime-local' 
                        ref={exitDateRef} 
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Descrição</FormLabel>
                    <Input 
                        type='text' 
                        ref={descriptionRef} 
                    />
                </FormControl>
            </Flex>

            </AlertDialogBody>

            <AlertDialogFooter>
                <Button 
                    ref={cancelRef as React.LegacyRef<HTMLButtonElement>} 
                    onClick={onClose}
                    variant={'ghost'}
                >
                    Cancelar
                </Button>
                <Button
                    onClick={handleAddExtraHour} 
                    ml={3}
                    isLoading={isLoading}
                >
                    Registrar
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>
    )
}

export default AddExtraHourForm;