import React from "react"
import Loading from "./components/Loading"
import Tours from "./components/Tours"
import { useState, useEffect } from "react"

const url = "https://course-api.com/react-tours-project"

function App() {
  const [tours, setTours] = useState([])

  return (
    <main>
      <Tours />
    </main>
  )
}

export default App
