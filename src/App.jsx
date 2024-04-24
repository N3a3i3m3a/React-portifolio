import React from 'react'
import Home from './components/Home'
// import Socialinks from './components/Socialinks'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Layouts from './components/Layouts'
// import Skills from './components/Skills'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path ='/' element={<Layouts/>}>
        <Route path ='/Home' element={<Home/>}></Route>
        <Route path ='/About' element={<About/>}></Route>
        <Route path ='/Experience' element={<Experience/>}></Route>
        <Route path ='/Contact' element={<Contact/>}></Route>
        {/* <Route path ='/Socialinks' element={<Socialinks/>}></Route> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App