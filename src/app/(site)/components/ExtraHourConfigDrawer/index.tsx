import React from 'react'
import BaseDrawer from '@/app/components/BaseDrawer'
import ExtraHourConfigContent from '@/app/components/ExtraHourConfigContent';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    hourValue: string;
    setHourValue: (value: string) => void;
  }

export default function ExtraHourConfigDrawer({ isOpen, onClose, onConfirm, hourValue, setHourValue }: Props) {
  return (
    <BaseDrawer
        isOpen={isOpen}
        onClose={onClose}
      >
        <ExtraHourConfigContent
          onClose={onClose}
          onConfirm={onConfirm}
          hourValue={hourValue}
          setHourValue={setHourValue}
        />
      </BaseDrawer>
  )
}
