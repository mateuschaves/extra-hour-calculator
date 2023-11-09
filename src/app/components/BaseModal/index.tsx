'use client'

import React from 'react'
import {
    AlertDialog,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
import { FocusableElement } from '@chakra-ui/utils'


  type Props = {
    isOpen: boolean
    onClose: () => void
    cancelRef: React.RefObject<FocusableElement> | React.LegacyRef<HTMLButtonElement>
    children?: React.ReactNode
  }
  
  function BaseModal({
    isOpen,
    cancelRef,
    onClose,
    children,
  }: Props) {
    
    return (
        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef as React.RefObject<FocusableElement>}
        onClose={onClose}
        size={'2xl'}
      >
        <AlertDialogOverlay>
         {children}
        </AlertDialogOverlay>
      </AlertDialog>
    )
  }

  export default BaseModal
  