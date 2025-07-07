import { useSelector } from 'react-redux'

import { useEffect, useState } from 'react'

import GlobalSvgIcons from '../../shared/assets/icons/GlobalSvgIcons'
import GlobalSvgIconsTwo from '../../shared/assets/icons/GlobalSvgIconsTwo'

const Today = () => {
    const [pressure, setPressure] = useState('')

    const weather = useSelector((state) => state.api.weather)
    const todaysWeather = weather.data
    const time = todaysWeather.current.last_updated
    const wind = todaysWeather.current.wind_kph / 3.6
    console.log(todaysWeather);

    useEffect(() => {
        if (todaysWeather.current.pressure_mb === 760) {
            setPressure('нормально')
        } else if (todaysWeather.current.pressure_mb > 760) {
            setPressure('высоко')
        } else {
            setPressure('низко')
        }
    }, [weather])
    
    return (
        <div className='sm:flex items-center justify-between mt-8 gap-13 block'>
            <div className='p-7 dark:bg-today-bg shadow-today rounded-3xl'>
                <div className='flex items-center gap-10 justify-between'>
                    <div>
                        <h1 className='font-medium text-8xl text-text-logo'>{Math.round(todaysWeather.current.temp_c)}°</h1>
                        <h3 className='text-black font-normal text-4xl dark:text-white'>Сегодня</h3>
                    </div>
                    <GlobalSvgIconsTwo id={todaysWeather.current.condition.text}/>
                </div>
                <div className='mt-8 flex flex-col gap-3'>
                    <h3 className='font-normal text-2xl text-text-weather'>Время: {time.slice(10, 16)}</h3>
                    <h3 className='font-normal text-2xl text-text-weather'>Город: {todaysWeather.location.name}</h3>
                </div>
            </div>
            <div className='py-9 px-8 flex flex-col gap-6 bg-custom shadow-today w-full bg-no-repeat dark:bg-today-bg rounded-2xl mt-5 sm:mt-0'>
                <div className='flex items-center gap-5'>
                    <div className='bg-white p-1.5 rounded-3xl'>
                        <GlobalSvgIcons id='thermometr' />
                    </div>
                    <h3 className='font-normal text-sm text-text-weather'>Температура</h3>
                    <p className='font-normal text-sm text-black dark:text-white'>{todaysWeather.current.temp_c}° - ощущается как {todaysWeather.current.feelslike_c}°</p>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='bg-white p-2.5 rounded-3xl'>
                        <GlobalSvgIcons id='humidity' />
                    </div>
                    <h3 className='font-normal text-sm text-text-weather'>Давление </h3>
                    <p className='font-normal text-sm text-black dark:text-white'>{todaysWeather.current.pressure_mb} мм ртутного столба - {pressure}</p>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='bg-white p-2.5 rounded-3xl'>
                        <GlobalSvgIcons id='evaporator' />
                    </div>
                    <h3 className='font-normal text-sm text-text-weather'>Осадки</h3>
                    <p className='font-normal text-sm text-black dark:text-white'>{todaysWeather.current.precip_mm} mm</p>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='bg-white p-2.5 rounded-3xl'>
                        <GlobalSvgIcons id='wind' />
                    </div>
                    <h3 className='font-normal text-sm text-text-weather'>Ветер</h3>
                    <p className='font-normal text-sm text-black dark:text-white'>{Math.round(wind)} м/с юго-запад - легкий ветер</p>
                </div>
            </div>
        </div>
    )
}

export default Today