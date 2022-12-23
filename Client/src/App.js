import './App.css';
import { Routes, Route } from 'react-router-dom'
import CartPage from './pages/CartPage';
import ShoppingPage from './pages/ShoppingPage';
import { DataContextProvider } from './contexts/DataContext';

function App() {
    return (
        <div className='font-link'>
            <Routes>
                <Route path="/" element={<DataContextProvider><ShoppingPage /></DataContextProvider>} />
                <Route path="/home" element={<DataContextProvider><ShoppingPage /></DataContextProvider>} />
                <Route path="/cart" element={<DataContextProvider><CartPage /></DataContextProvider>} />
            </Routes>
        </div>
    );
}

export default App;
