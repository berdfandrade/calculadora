import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Calculadora from './componentes/Calculadora/Calculadora';

function App() {
  return ( 
    <ChakraProvider>
<Calculadora/> 
    </ChakraProvider>
    
    
  );
}

export default App;
