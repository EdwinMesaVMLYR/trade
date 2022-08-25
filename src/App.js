import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Layout from './Layout/Layout'
import Login from './pages/Login/Login'
import Trade from './pages/Trade/Trade'

function App () {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/trade" element={<Trade />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}

export default App
