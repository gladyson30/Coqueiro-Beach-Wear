import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'
import Home from './pages/home/Home'
import AboutBrand from './pages/home/Apresentacao'
import Produtos from './pages/produtos/Produtos'
import ProdutoDetalhe from './pages/produtos/ProdutoDetalhe'
import NotFound from './pages/notfound/NotFound'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutBrand />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App