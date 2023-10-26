import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Flex } from '@chakra-ui/layout';
import { AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader } from '@chakra-ui/modal';
import { FocusableElement } from '@chakra-ui/utils';
import { on } from 'process';
import React from 'react';

type Props = {
    cancelRef: React.RefObject<FocusableElement> | React.LegacyRef<HTMLButtonElement>
    onClose: () => void
    onAddExtraHour: () => void
    isLoading?: boolean
}

function AddExtraHourForm({ cancelRef, onClose, onAddExtraHour, isLoading = false }: Props) {
    return (
        <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Registrar hora extra
            </AlertDialogHeader>

            <AlertDialogBody>

            <Flex flexDirection={'column'} gap={'8'}>
                <FormControl>
                    <FormLabel>Data de entrada</FormLabel>
                    <Input type='datetime-local' />
                </FormControl>

                <FormControl>
                    <FormLabel>Data de saída</FormLabel>
                    <Input type='datetime-local' />
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
                    onClick={onAddExtraHour} 
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