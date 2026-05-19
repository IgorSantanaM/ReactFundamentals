import { useContext } from "react"
import navigationContext from "../navigation/navigationContext"

const House = ({house}) => 
{
    const {param: house} = useContext(navigationContext);
    return(
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img className="img-fluid" src={house.photo} alt="House" />
                </div>
                <div className="row">
                    <div className="col-6">
                        <img className="img-fluid" src={house.photo} alt="House" />
                    </div>
                </div>
            </div>
        </div>
    )
}