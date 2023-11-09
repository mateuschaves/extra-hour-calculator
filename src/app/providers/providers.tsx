'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import StyledComponentsRegistry from '@/lib/styledComponentRegistry'
import GlobalStyle from '@/style/global'
import { InfoContextProvider } from '@/app/contexts/info.context'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <StyledComponentsRegistry>
          <InfoContextProvider>
            {children}
          </InfoContextProvider>
          <GlobalStyle />
        </StyledComponentsRegistry>
      </ChakraProvider>
    </CacheProvider>
  )
}