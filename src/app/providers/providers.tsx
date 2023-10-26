'use client'

import StyledComponentsRegistry from '@/lib/styledComponentRegistry'
import GlobalStyle from '@/style/global'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyle />
        </StyledComponentsRegistry>
      </ChakraProvider>
    </CacheProvider>
  )
}