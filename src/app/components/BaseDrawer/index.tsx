import React from 'react';
import { 
  Drawer, 
  } from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function BaseDrawer({ isOpen, onClose, children }: Props) {

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      size={'sm'}
    >
      {children}
    </Drawer>
  );
}
