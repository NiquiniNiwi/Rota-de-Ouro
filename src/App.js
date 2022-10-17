import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Components from './Components';
import { HeaderProvider } from './Hooks/Header';
import { RoutesProvider } from './Hooks/Routes';
import { APIProvider } from './Hooks/API';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <APIProvider>
        <HeaderProvider>
          <RoutesProvider>
            <Components />
          </RoutesProvider>
        </HeaderProvider>
      </APIProvider>
    </ChakraProvider>
  )
}

export default App;
