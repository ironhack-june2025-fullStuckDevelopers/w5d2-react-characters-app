import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CharacterDetails from "./pages/CharacterDetails"

function App() {

  return (
    <>
      <h1>React Characters App</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
      </Routes>

      

    </>
  )
}

export default App
