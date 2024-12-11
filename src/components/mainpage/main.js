import { useState } from "react"

import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"
import react from "../../assets/react.png"
import bootstrap from "../../assets/bootstrap.png"
import tailwind from "../../assets/tailwind.png"
import typescript from "../../assets/typescript.png"
import node from "../../assets/node.png"
import saiahattap from "../../assets/saiahattap.jpg"
import audio from "../../assets/audio.jpg"
import weather from "../../assets/weather.jpg"
import todo from "../../assets/todo.jpg"
import calculator from "../../assets/calculator.png"



import {AiOutlineLink, AiFillGithub} from "react-icons/ai"

const stack = [

    {
        id: 1,
        name: "HTML",
        img: html,
    },

    {
        id: 2,
        name: "CSS",
        img: css,
    },

    {
        id: 3,
        name: "JavaScript",
        img: javascript,
    },

    {
        id: 4,
        name: "React",
        img: react,
    },

    {
        id: 5,
        name: "Bootstarp",
        img: bootstrap,
    },

    {
        id: 6,
        name: "Tailwind",
        img: tailwind,
    },

    {
        id: 7,
        name: "TypeScript",
        img: typescript,
    }
    ,

    {
        id: 8,
        name: "Node JS",
        img: node,
    }

]



const projects = [
    {
        id:1,
        name:"SaiahatTap",
        link: "https://saiahat-tap.vercel.app/",
        github: "https://github.com/temirlantlekeyev/SaiahatTap",
        title: "Geoguessr web application with interesting places in Kazakhstan",
        features: "Educational game with using Leaflet library map and pictures of famous places, where users can find and explore various places of interest throughout Kazakhstan",
        features2: "3 levels in the city Almaty, Astana and throughout Kazakhstan",
        features3: "30 attractions for each level and a timer of 20 seconds for each correct answer",
        features4: "Localization in 3 languages: Kazakh, Russian and English",
        img: saiahattap
    },
    {
        id:2,
        name:"Audio Player",
        link: "https://audio-player-black-gamma.vercel.app",
        github: "https://github.com/temirlantlekeyev/audio_player",
        title: "Web audio player with several musics",
        features: "Mini audio player with 5 songs",
        features2: "Responsive design",
        features3: "Tech Stack: HTML, CSS, JavaScript",
        img: audio
        
    },
    {
        id:3,
        name:"Weather App",
        link: "https://weather-app-fy8d.onrender.com/",
        github: "https://github.com/temirlantlekeyev/weather-app",
        title: "Web Weather App with current weather",
        features: "Weather App with using OpenWeatherMap API",
        features2 : "Responsive design",
        features3: "Tech Stack: HTML, CSS, JavaScript, React",
        img: weather
    },
    {
        id:4,
        name:"To-Do-List",
        link: "https://to-do-list-dun-gamma.vercel.app",
        github: "https://github.com/temirlantlekeyev/to-do-list",
        title: "To-do-list App for daily use and purpose",
        features: "Responsive design",
        features2: "Tech Stack: HTML, CSS, JavaScript, React, Tailwind",
        img: todo
    },
    {
        id:5,
        name:"Calculator",
        link: "https://calculator-six-beryl.vercel.app",
        github: "https://github.com/temirlantlekeyev/calculator",
        title: "IOS Calculator",
        features: "Simple IOS calculator",
        features2: "Responsive design",
        features3: "Tech Stack: HTML, CSS, JavaScript, React",
        img: calculator
    }
]


const Main = ()=> {

    
const [link, setLink] = useState('')

    return (
//         <div>
//         <div>
//         <div className="text-center text-3xl sm:text-4xl lg:text-5xl mb-8 lg:mb-12">
//             Tech Stack
//         </div>
//         <div className="flex flex-wrap justify-center">
//             {stack.map((stacks) => (
//                 <div key={stacks.id} className="m-4 sm:mx-6">
//                     <img
//                         className="h-16 sm:h-20 bg-slate-800 hover:bg-orange-400 p-3 rounded-full"
//                         src={stacks.img}
//                         alt={stacks.name}
//                     />
//                     <p className="text-center text-sm sm:text-base mt-2">{stacks.name}</p>
//                 </div>
//             ))}
//         </div>
//     </div>

//     {/* Projects Section */}
//     <div className="text-center text-3xl sm:text-4xl lg:text-5xl my-12 lg:my-36">
//         Projects
//     </div>

//     <div>
//         {projects.map((project) => (
//             <div
//                 key={project.id}
//                 className="bg-slate-900 rounded-2xl m-6 sm:m-10 lg:m-12 border-4 p-4 sm:p-6"
//             >
//                 <div>
//                     <p className="text-2xl sm:text-3xl lg:text-4xl p-2 sm:p-4">{project.name}</p>
//                     <p className="text-lg sm:text-xl p-2 sm:p-3">{project.title}</p>
//                     <div className="flex flex-col lg:flex-row lg:space-x-6">
//                         <img
//                             className="h-48 sm:h-60 lg:h-72 m-4 sm:m-6 rounded-2xl border-slate-600 border-4"
//                             src={project.img}
//                             alt={project.name}
//                         />
//                         <ul className="text-sm sm:text-lg lg:text-2xl text-white mt-4 lg:mt-0">
//                             {project.features && <li className="mb-2 lg:mb-4">{project.features}</li>}
//                             {project.features2 && <li className="mb-2 lg:mb-4">{project.features2}</li>}
//                             {project.features3 && <li className="mb-2 lg:mb-4">{project.features3}</li>}
//                             {project.features4 && <li className="mb-2 lg:mb-4">{project.features4}</li>}
//                         </ul>
//                     </div>
//                     <div className="flex flex-col items-center text-xl sm:text-2xl lg:text-3xl m-8 lg:m-16 space-y-3">
//                         <a
//                             href={project.link}
//                             target="_blank"
//                             className="flex items-center hover:underline"
//                         >
//                             <AiOutlineLink className="mr-2" />
//                             {project.name}
//                         </a>
//                         <a
//                             href={project.github}
//                             target="_blank"
//                             className="flex items-center hover:underline"
//                         >
//                             <AiFillGithub className="mr-2" />
//                             Github link
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         ))}
//     </div>
// </div>





        <div>
        <div>
        <div className="flex justify-center text-center text-5xl mb-12">
            Tech Stack
        </div>
        <div className="flex flex-row justify-center lg:flex flex-wrap my-20">
        {stack.map((stacks)=> {
            return (
        <div key={stacks.id} className="ml-8">
        <img className="h-20 bg-slate-800 hover:bg-orange-400 p-3  rounded-full " src={stacks.img}/>
        <p className="text-center">{stacks.name}</p>
        </div>
        )})}
        </div>
        </div>
        
        <div>
        <div className=" m-10 mt-36 text-5xl flex flex-row justify-center ">Projects</div>
        

        {/* <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
    {projects.map((project) => (
        <div key={project.id} className="bg-slate-900 rounded-2xl m-4 md:m-6 p-6 border-4">
            <div>
         
                <p className="text-2xl sm:text-3xl lg:text-4xl p-4">{project.name}</p>
                <p className="text-lg sm:text-xl p-3">{project.title}</p>
                
             
                <div className="flex flex-col md:flex-row">
                    <img 
                        className="h-48 sm:h-60 md:h-72 lg:h-80 m-6 rounded-2xl border-slate-600 border-4" 
                        src={project.img} 
                        alt={`${project.name} preview`} 
                    />
                    
                    <ul className="flex flex-col md:flex-row lg:flex-col m-4 text-lg sm:text-xl lg:text-2xl text-white">
                        <li className="mb-4">{project.features}</li>
                        <li className="mb-4">{project.features2}</li>
                        <li className="mb-4">{project.features3}</li>
                        <li className="mb-4">{project.features4}</li>
                    </ul>
                </div>
                
               
                <div className="flex flex-col items-center text-lg sm:text-xl lg:text-3xl mt-8">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        className="flex flex-row items-center mb-3 hover:underline"
                    >
                        <AiOutlineLink className="mr-2" />
                        {project.name}
                    </a>
                    <a 
                        href={project.github} 
                        target="_blank" 
                        className="flex flex-row items-center hover:underline"
                    >
                        <AiFillGithub className="mr-2" />
                        Github link
                    </a>
                </div>
            </div>
        </div>
    ))}
</div> */}

<div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 ">
    {projects.map((project) => {
        return (
            <div
                key={project.id}
                className="bg-slate-900 rounded-2xl m-6 sm:m-8 lg:m-12 border-4 p-6"
            >
                {/* Project Header */}
                <div>
                    <p className="text-2xl sm:text-3xl lg:text-4xl p-4">{project.name}</p>
                    <p className="text-lg sm:text-xl lg:text-2xl p-3">{project.title}</p>
                </div>

                {/* Project Details */}
                <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <img
                        className="h-48 sm:h-64 lg:h-72 m-4 sm:m-6 rounded-2xl border-slate-600 border-4"
                        src={project.img}
                        alt={project.name}
                    />

                    {/* Features List */}
                    <ul className="ml-0 lg:ml-8 mt-6 lg:mt-0 text-sm lg:text-lg space-y-2 ">
                        <li className="mb-4">{project.features}</li>
                        <li className="mb-4">{project.features2}</li>
                        <li className="mb-4">{project.features3}</li>
                        <li className="mb-4">{project.features4}</li>
                    </ul>
                </div>

                {/* Links Section */}
                <div className="flex flex-col items-center text-xl sm:text-2xl lg:text-3xl m-8 sm:m-12 lg:m-16 space-y-4">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center hover:underline"
                    >
                        <AiOutlineLink />
                        <span className="ml-2">{project.name}</span>
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center hover:underline"
                    >
                        <AiFillGithub />
                        <span className="ml-2">Github link</span>
                    </a>
                </div>
            </div>
        );
    })}
</div>


        {/* <div className="lg:w-full max-w-screen">
        {projects.map((project)=> {
            return (
            <div key={project.id} className=" bg-slate-900 rounded-2xl m-12 border-4 p-6">
                <div className="">
                    <p className="text-4xl p-4 ">{project.name}</p>
                    <p className="text-xl p-3" >{project.title}</p>
                    <div className="flex flex-row">
                    <img className="h-72 m-6 rounded-2xl border-slate-600 border-4" src={project.img}/>
                   
                    <ul className="flex lg:flex-col  m-4 text-2xl text-white">
                        <li className="mb-4">
                        {project.features}
                        </li>
                        <li className="mb-4">
                        {project.features2}
                        </li>
                        <li className="mb-4">
                        {project.features3}
                        </li>
                        <li className="mb-4">
                        {project.features4}
                        </li>
                    </ul>
                    </div>
                    <div className="flex flex-col items-center text-3xl m-16">
                    <a href={project.link} target="_blank" className="flex flex-row self-end mb-3 hover:underline"><AiOutlineLink/>{project.name}</a>
                    <a href={project.github} target="_blank" className="flex flex-row self-end hover:underline"><AiFillGithub/>Github link</a>
                    </div>
                </div>

            </div>
        )})}
        </div> */}
        </div>
        </div>
    )
}


export default Main;