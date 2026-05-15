import logo from "../assets/GlobomanticsLogo.png"
import {logo as logoClass} from "./Banner.module.css"

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral"
};


const Banner = ({headerText}) =>{
    return(
        <header>
            <div>
                <img src={logo} className={logoCLass } alt="logo" />
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>
                {headerText}
            </div>
        </header>
    )
}
export default Banner;