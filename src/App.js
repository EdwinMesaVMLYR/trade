import './css/App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Layout from './Layout/Layout'
import Pyramid from './pages/Pyramid/Pyramid'
import Trade from './pages/Trade/Trade'
import Notfound from './pages/404/404'

function App () {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/:acronym" element={<Trade />} />
            <Route path="/koe/:acronym" element={<Trade />} />
            <Route path="/piramide-de-precios" element={<Pyramid />} />
            <Route path="/404" element={<Notfound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
