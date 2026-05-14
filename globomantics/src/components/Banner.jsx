import logo from "../assets/GlobomanticsLogo.png"

const Banner = () =>{
    return(
        <header>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>Providing houses all over the world</div>
        </header>
    )
}

export default Banner;