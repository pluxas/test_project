import GlobalSvgIcons from '../../../shared/assets/icons/GlobalSvgIcons'

const Day = ({ data }) => {

  const getUnix = (option) => {
    const now = new Date(data.date_epoch * 1000)
    let res = option === 'month' ? now.toLocaleString('ru-RU', { month: 'long' }) :
      option === 'weekday' ? now.toLocaleString('ru-RU', { weekday: 'long' }) :
        option === 'day' ? now.toLocaleString('ru-Ru', { day: 'numeric' }) : ''
    return res
  }

  return (
    <div className='p-3 bg-[#4793FF33] rounded-xl dark:bg-days sm:w-37 mt-5 flex sm:block items-center justify-between w-full'>
      <div>
        <h1 className='font-medium text-lg text-black dark:text-white mb-1.5'>{getUnix('weekday')}</h1>
        <p className='font-normal text-sm text-text-weather'>{getUnix('day')} {getUnix('month')}</p>
      </div>
      <div>
        <div>
          <GlobalSvgIcons id={data.day.condition.text} />
        </div>
        <div className='flex flex-col '>
          <h2 className='font-medium text-lg text-black dark:text-white'>{data.day.maxtemp_c}°</h2>
          <h2 className='font-normal text-sm text-text-weather'>{data.day.mintemp_c}°</h2>
        </div>
      </div>
    </div>
  )
}

export default Day