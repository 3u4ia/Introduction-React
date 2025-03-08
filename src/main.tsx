import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import { AboutMe } from './pages/AboutMe.tsx'
import { Layout } from './Layout/Layout.tsx'
import { Hobbies } from './pages/Hobbies.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/hobbies' element={<Hobbies/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
