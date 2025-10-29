// import { useState } from "react"


// const {} = useState()

const PoweredBy = () => {
    
    return (
        <div id="m__poweredby" 
            className="flex items-center justify-center flex-column 
                gray bg-white-90 pv0-75 
                f0-75"
        >
            <small className="mb0-25"
            >
                powered by:
            </small>
            <a href="https://www.kdadesign.tech" target="_blank"
            rel="noreferrer"
                className="black-90"
            >
                <div className="flex">
                    <small className="">
                        kda design technologies
                    </small>
                    <small className="ml0-50">
                        © {new Date().getFullYear()}
                    </small>
                </div>
            </a>
        </div>
    )
}

export default PoweredBy
