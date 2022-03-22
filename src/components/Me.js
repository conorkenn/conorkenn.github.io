
import Links from "./Links";


const Me = () =>{
    return(
        <div className="flex h-screen">
            <div className="m-auto">
                <h1 className="text-5xl pb-5">
                &#127833; Hey, I'm <span className="text-blue-500">Conor</span>
                </h1>
                <p className="text-2xl pb-2">I like code and anime</p>
                <Links />
            </div>
        </div>
    )
}

export default Me;