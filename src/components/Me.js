
import Links from "./Links";
import aqua from "../assets/konoshuba-aqua.gif"

const Me = () =>{
    return(
        <div className="flex h-screen">
            <div className="m-auto">
                <img src={aqua} alt="aqua" />
                <h1 className="text-5xl pb-5">
                    Hey, I'm <span className="text-blue-500">Conor</span>
                </h1>
                <p className="text-2xl pb-2">Manga, Code, and Konosuba</p>
                <Links />
            </div>
        </div>
    )
}

export default Me;