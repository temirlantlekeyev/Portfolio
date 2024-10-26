import kz from "../../assets/kz.png"
import ru from "../../assets/russia.png"
import eng from "../../assets/england.png"


const Loacalization = ()=> {
    return (
        <div>
            <div className="flex row ">
            <img className="h-14 ml-2" src={kz}/>
            <img className="h-14 ml-2" src={ru}/>
            <img  className="h-14 ml-2 mr-6" src={eng}/>
            </div>
        </div>
    )
}

export default Loacalization;