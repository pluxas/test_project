import { useEffect } from 'react'
import GlobalSvgIcons from '../../shared/assets/icons/GlobalSvgIcons'

const Header = () => {
    const themeChange = () => {
        const theme = document.documentElement
        const isDark = theme.classList.toggle('dark')
        localStorage.setItem('theme', isDark ? 'dark' : '')
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if(localTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } 
    }, [])

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <GlobalSvgIcons id='logo' />
                <h1 className='font-bold text-3xl text-text-logo'>Weather</h1>
            </div>
            <div className='flex items-center gap-5'>
                <div onClick={themeChange} className='cursor-pointer'>
                    <GlobalSvgIcons id='theme' />
                </div>
                <input type="text" placeholder='Выбрать город' className='bg-[#4793FF33] h-9 rounded-xl placeholder:text-black font-medium text-lg dark:bg-input dark:text-white dark:placeholder:text-white'/>          
           </div>
        </div>
    )
}

export default Header