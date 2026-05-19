import { useContext } from "react";
import logo from "../assets/GlobomanticsLogo.png"
import {logo as logoClass} from "./Banner.module.css"
import navValues from "../navigation/navValues";

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral"
};


const Banner = ({headerText}) =>{
    const {navigate} = useContext(navigationContext);
    return(
        <header>
            <div>
                <img src={logo} className={logoCLass } alt="logo" onClick={() => navigate(navValues.home)} />
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>
                {headerText}
            </div>
        </header>
    )
}
export default Banner;