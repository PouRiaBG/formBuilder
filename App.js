import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import Home from './src/screens/Home';

function App(){
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <Home />
  </ApplicationProvider>

  )
}



export default App