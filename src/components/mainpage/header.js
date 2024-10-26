import photo3 from "../../assets/photo3.png"
import img from "../../assets/img.png"
import yellow2 from "../../assets/yellow2.png"
import CV from "../../assets/CV.pdf"

const Header = ()=> {
    return (
        <div>
            <div className="flex flex-row mb-24 ">
            <div className="inline-block w-6/12 bg-blue-950 rounded-3xl shadow-2xl shadow-sky-400/100 mt-36 ml-36 p-10">
            <div className="text-2xl">
            Hello! I'm Temirlan! A Frontend Developer based in Almaty, Kazakhstan.
            This is my portfolio website. Here you can see my pet-projects and more about my tech stack and skills.
            </div>
            <div className="flex flex-row justify-center m-10 mt-28">
            <a href={CV} download target="_blank" className=" text-xl text-black border-2-white bg-white p-4 rounded-full hover:bg-gray-300 py-4 px-6">
                Download CV
            </a>
            </div>
            </div>

            <div className="w-2/3 relative ml-44 mb-12 bottom-0 top-10"> 
            <img className="absolute z-0 h-full pt-11" src={yellow2}/>
            <img className="relative z-10  ml-24" src={photo3}/>
            </div> 
            {/* 
            <div className="w-3/4 h-3/4 absolute  ml-44"> 
            <img className="h-full absolute top-0 right-0 " src={yellow2}/>
            <img className="h-full absolute top-0 right-10 " src={photo3}/>
            </div> */}
            
            {/* <div className="w-2/4 h-4/5 absolute "> 
            <img className="h-full absolute left-2/4 -translate-x-2/4 " src={yellow2}/>
            <img className="h-full absolute left-2/4 -translate-x-2/4 " src={photo3}/>
            </div> */}
            </div>
         
        </div>
    )
}


export default Header