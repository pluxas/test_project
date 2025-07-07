import { useSelector } from 'react-redux'

import Day from './Day'

const Weekly = () => {
  const weather = useSelector((state) => state.api.weather)
  const todaysWeather = weather.data.forecast.forecastday
  console.log(todaysWeather)

  return (
    <div className='sm:p-5 flex flex-col sm:flex-row items-center sm:gap-5 sm:justify-between sm:shadow-today rounded-br-3xl rounded-bl-3xl dark:bg-black sm:bg-white sm:dark:bg-input mt-5 sm:mt-20 -mb-5'>
      {todaysWeather.map(data => (
        <Day data={data}/>
      ))}
    </div>
  )
}

export default Weekly