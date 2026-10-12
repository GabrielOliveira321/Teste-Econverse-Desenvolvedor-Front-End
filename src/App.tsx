import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import { ProductsProvider } from './Context/ProviderContext'

function App() {

  return (
    <BrowserRouter>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ProductsProvider>
    </BrowserRouter >
  )
}

export default App
