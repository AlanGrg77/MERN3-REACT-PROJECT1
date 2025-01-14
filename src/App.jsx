import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SingleBlogPage from './pages/SingleBlogPage'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog/:id' element={<SingleBlogPage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/edit/:id' element={<EditPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
