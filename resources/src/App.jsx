import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import CharachterList from './pages/CharachterList'
import CharacterDetails from './pages/CharacterDetails'
import Home from './pages/Home'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/characters' element={<CharachterList />}></Route>
          <Route path='/:url' element={<CharacterDetails />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
