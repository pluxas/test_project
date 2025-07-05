import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

import { api } from "./entities/user/model/weatherApiSlice"
import WeatherStatus from "./widgets/WeatherStatus"
import Header from "./widgets/Header"
import Loader from "./shared/ui/Loader"

function App() {
  const dispatch = useDispatch()

  const city = useSelector((state) => state.api.city)
  const status = useSelector((state) => state.api.status)

  useEffect(() => {
    dispatch(api(city))
  }, [city])

  return (
    <>
      {status === 'loading'
        ?
        <Loader />
        :
        <div className="dark:bg-backgraund h-[100vh]">
          <div className="container">
            <Header />
            <div>
              <WeatherStatus status={status} city={city} />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default App
