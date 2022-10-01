import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Components from './Components';
import { HeaderProvider } from './Hooks/Header';
import { RoutesProvider } from './Hooks/Routes';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <HeaderProvider>
        <RoutesProvider>
          <Components />
        </RoutesProvider>
      </HeaderProvider>
    </ChakraProvider>
  )
}

export default App;
