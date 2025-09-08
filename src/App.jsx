import React from 'react'
import { Firstpage } from './routing/Firstpage'
import { Secondpage } from './routing/Secondpage'
import { Thirdpage} from './routing/Thirdpage'
import { Fourthpage } from './routing/Fourthpage'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar'
const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/fp" element ={<Firstpage/>}/>
        <Route path="/sp" element ={<Secondpage/>}/>
        <Route path="/tp" element ={<Thirdpage/>}/>
        <Route path="/fr" element ={<Fourthpage/>}/>
      </Routes>
      {/* <Firstpage/>
      <Secondpage/>
      <Thirdpage/>
      <Fourthpage/> */}
    </div>
  )
}

export default App;