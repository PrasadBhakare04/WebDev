import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreatePage />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;