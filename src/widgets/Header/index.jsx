import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import { cityWhereTheyLive } from '../../entities/user/model/weatherApiSlice'
import GlobalSvgIcons from '../../shared/assets/icons/GlobalSvgIcons'

const Header = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(cityWhereTheyLive(input))
        setInput('')
        localStorage.setItem('city', input)
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const themeChange = () => {
        const theme = document.documentElement
        const isDark = theme.classList.toggle('dark')
        localStorage.setItem('theme', isDark ? 'dark' : '')
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if (localTheme === 'dark') {
            document.documentElement.classList.add('dark')
        }
    }, [])

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <GlobalSvgIcons id='logo' />
                <h1 className='font-bold text-3xl text-text-logo hidden sm:block'>Weather</h1>
            </div>
            <div className='flex items-center gap-5'>
                <div onClick={themeChange} className='cursor-pointer'>
                    <GlobalSvgIcons id='theme' />
                </div>
                <div className='flex items-center relative'>
                    <input onChange={handleChange} value={input} type="text" placeholder='Ваш город' className='bg-[#4793FF33] px-5 py-3 rounded-xl placeholder:text-black font-medium text-lg dark:bg-input dark:text-white dark:placeholder:text-white' />
                    <div onClick={handleClick} className='absolute right-0 cursor-pointer'><GlobalSvgIcons id='search'/></div>
                </div>
            </div>
        </div>
    )
}

export default Header