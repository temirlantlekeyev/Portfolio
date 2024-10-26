import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';


const Theme = ()=> {

    
const [theme, setTheme] = useState("")


const themeClick = ()=> {
    setTheme(<FontAwesomeIcon className='text-4xl' icon={faToggleOn} />)
    console.log("click")

}

    return (
        <div>
             <div className='flex flex-row text-white text-3xl'>
                <BsMoonFill className='mr-2 hover:text-indigo-400'/>
                <FontAwesomeIcon className='text-4xl' icon={faToggleOff} />
                <BsSunFill className='ml-2 hover:text-yellow-300'/>
            </div>
            <FontAwesomeIcon className='text-4xl' icon={faToggleOn} />
        </div>
    )
}

export default Theme;