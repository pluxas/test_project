import Today from "../Today"
import Weekly from "../Weekly"

const WeatherStatus = ({ status, city }) => {
    switch (status) {
        case 'succeeded':
            return (
                <>
                    <Today />
                    <Weekly />
                </>
            )
        case 'error':
            return (
               <>
                    {city === '' ? <h1 className="dark:text-white text-center mt-50 text-7xl">Пожалуйста укажите ваш город</h1> : <h1 className="dark:text-white text-center mt-50 text-7xl">Проблемы с сервиром либо проверте интернет</h1>}
               </> 
            )
        default:
            break;
    }
}

export default WeatherStatus