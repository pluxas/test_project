import GlobalSvgIcons from '../../shared/assets/icons/GlobalSvgIcons'

const Today = () => {
  return (
    <div className='flex items-center justify-between mt-8'>
        <div className='p-5 dark:bg-backgraund shadow-[2px 5px 25px 0px rgba(34, 60, 80, 0.2)]'>
            <div className='flex items-center gap-20'>
                <div>
                    <h1>20°</h1>
                    <h3>Сегодня</h3>
                </div>
                <GlobalSvgIcons id='sun'/>
            </div>
            <div>
                <h3>Время: 21:54</h3>
                <h3>Город: Ташкент</h3>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default Today