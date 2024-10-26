import Loacalization from "./localization";
import Theme from "./theme";


const scroll = ()=> {
    return window.scrollTo(250,250)
}
const scroll2 = ()=>{
    return window.scrollTo(1250,1250)
}
const scroll3 = ()=>{
    return window.scrollTo(6000,6000)
}

const NavBar = ()=> {
    return (
        <div className="flex flex-row justify-center items-center bg-black pt-12 pb-10 border-b-2 border-white shadow-lg">
           <div className="text-white text-3xl pl-8">
            Portfolio Website
           </div>
            {/* <div className="">
            <ul className="flex flex-row  justify-center text-2xl text-white">
                <li className="cursor-pointer ml-52 hover:text-indigo-400">
                    Home
                </li>
                <li onClick={scroll} className="cursor-pointer ml-6 hover:text-indigo-400">
                    About
                </li>
                <li onClick={scroll2} className="cursor-pointer ml-6 hover:text-indigo-400">
                    Projects
                </li>
                <li onClick={scroll3} className="cursor-pointer ml-6 hover:text-indigo-400 ">
                    Contact
                </li>
            </ul>
            </div> */}
            {/* <div className="flex flex-col ml-80">
                <div>
                <Loacalization/>
                </div>
                <div className="mt-6 ml-16">
                <Theme/>
                </div>
            </div> */}
        </div>
    )
}


export default NavBar;