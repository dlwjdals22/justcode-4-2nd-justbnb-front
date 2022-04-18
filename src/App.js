import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import WishList from './pages/WishList/WishList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
