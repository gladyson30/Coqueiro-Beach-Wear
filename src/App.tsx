import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './pages/home/Home'
import AboutBrand from './pages/home/Apresentacao'
import Produtos from './pages/produtos/Produtos'
import WhatsAppButton from './components/layout/WhatsAppButton'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutBrand />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
      <WhatsAppButton />
    </>
  )
}

export default App