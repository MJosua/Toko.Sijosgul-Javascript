import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.css';
import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Theme/theme';
function App() {

  

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
