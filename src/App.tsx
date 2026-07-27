
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header.tsx'
import Home from './pages/home/Home.tsx'
import AboutBrand from './pages/home/Apresentacao.tsx'
import Produtos from './pages/produtos/Produtos'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutBrand />} />
        <Route path="/produtos" element={<Produtos />} />
        
      </Routes>
    </>
  )
}

export default App
