import React from "react"
import Loading from "./components/Loading"
import Tours from "./components/Tours"
import { useState, useEffect } from "react"

const url = "https://course-api.com/react-tours-project"

function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchTours()
  }, [])

  // fetchs tours from api
  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(url)
      const tours = await res.json()
      setTours(tours)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      console.log(e)
    }
  }
  // removes tour
  const removeTour = (id) => {
    const availableTours = tours.filter((tour) => tour.id !== id)
    setTours(availableTours)
  }

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No more tours remaining</h2>
          <button type="button" className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
