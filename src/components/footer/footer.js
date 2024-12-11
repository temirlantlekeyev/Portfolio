import {BsGithub, BsLinkedin, BsTelegram, BsInstagram} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import { useEffect } from "react"
const links = [
 
    {
        id:1,
        name:"Github",
        link:"https://github.com/temirlantlekeyev",
        icon: <BsGithub/>
    },
    {
        id:2,
        name:"Linkedin",
        link:"https://www.linkedin.com/in/temirlan-tlekeyev-735691218/",
        icon: <BsLinkedin/>
    },
    {
        id:3,
        name:"Telegram",
        link:"https://t.me/temirlan_tlk",
        icon: <BsTelegram/>
    },
    {
        id:4,
        name:"Instagram",
        link:"https://www.instagram.com/temirlan_tlk/",
        icon: <BsInstagram/>
    },

]

const scroll = ()=> {
    return window.scrollTo(0,0)
}

const scroll2 = ()=> {
    return window.scrollTo(200,200)
}

const scroll3 = ()=> {
    return window.scrollTo(1200,1200)
}
const Footer = ()=> {
    return (
        <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row justify-center text-3xl pb-16 border-t-2 pt-10">
        {/* Contact Section */}
        <div className="flex flex-col items-center lg:items-start lg:pl-10 text-center text-2xl mb-8 lg:mb-0">
            <div className="mb-3 mt-6">Contact me:</div>
            <a
                href="https://t.me/temirlan_tlk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center hover:bg-sky-600 mb-4 border-2 border-sky-500 py-3 px-8 rounded-full bg-sky-500"
            >
                <BsTelegram />
                <span className="ml-2 text-2xl">Telegram</span>
            </a>
            <a
                href="mailto:tlekeyev.temirlan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center hover:bg-slate-600 border-2 border-slate-500 py-3 px-11 rounded-full bg-slate-500"
            >
                <MdEmail />
                <span className="ml-2 text-2xl">Email</span>
            </a>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col items-center lg:mt-0 lg:mx-20 text-center text-2xl pt-16">
            <div
                className="cursor-pointer mb-5 hover:text-indigo-400"
                onClick={scroll}
            >
                Home
            </div>
            <div
                className="cursor-pointer mb-5 hover:text-indigo-400"
                onClick={scroll2}
            >
                About
            </div>
            <div
                className="cursor-pointer mb-5 hover:text-indigo-400"
                onClick={scroll3}
            >
                Projects
            </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-center lg:items-end mt-8 lg:mt-0 text-2xl pt-16">
            {links.map((link) => (
                <div key={link.id} className="mb-3">
                    <a
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center hover:scale-110 hover:text-slate-400"
                    >
                        {link.icon}
                        <span className="ml-3">{link.name}</span>
                    </a>
                </div>
            ))}
        </div>
    </div>
</div>

        // <div className="">
        // <div className="flex justify-center text-3xl pb-16 border-t-2 pt-10"> 
        // <div className="flex-col pl-10 text-center text-2xl">
        // <div className="mb-3 mt-6">Contact me:</div>
        // <a href="https://t.me/temirlan_tlk" target="_blank" className="flex flex-row hover:bg-sky-600 mb-4 border-2-sky-500  py-3 px-8 rounded-full bg-sky-500"> <BsTelegram/><span className="ml-2 text-2xl">Telegram</span></a>
        // <a href="mailto:tlekeyev.temirlan@gmail.com" target="_blank" className="flex flex-row hover:bg-slate-600 border-2-slate-500  py-3 px-11 rounded-full bg-slate-500"> <MdEmail/><span className="ml-2 text-2xl ">Email</span></a>
        // </div>

        // <div className="flex flex-col mt-16 ml-96 mr-96 text-center text-2xl">
        // <div className="cursor-pointer mb-5 hover:text-indigo-400" onClick={scroll}>Home</div>
        // <div className="cursor-pointer mb-5 hover:text-indigo-400" onClick={scroll2}>About</div>
        // <div className="cursor-pointer mb-5 hover:text-indigo-400" onClick={scroll3}>Projects</div>
        // </div>

        // <div className="flex flex-col mt-16 mr-12"> 
        // {links.map((link)=>{
        //     return (
        //         <div className="text-2xl">
        //         <div key={link.id} className="ml-6 hover:scale-110">
        //         <a href={link.link} target="_blank" className="flex flex-row hover:text-slate-400">{link.icon}<span className="ml-3 mb-3 hover:text-slate-400">{link.name}</span></a>
        //         </div>
        //         </div>
        //     )
        // })}
        // </div>
          
        // </div>
        // </div>
    )
}


export default Footer;