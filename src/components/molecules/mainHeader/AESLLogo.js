import logo from '../../../images/_partials/logos/aesl_logo.png'

const AESLLogo = () => {
    
    return (
    
        <figure id="m__logo"
            className="flex justify-center items-center flex-column-l tc white-90"
        >
            <img src={logo}
                alt="AESL Company Logo"
                className="w3-00 h3-00 br5-00 mb0-50"
            />

            <figcaption 
                className="db-l white-90 ml0-50"
            >   
                <h4 className="f1-50 mb0-50"
                >
                    {/* Architectural & Engineering Services Limited */}
                    A E S L
                </h4>
                <hgroup className="flex flex-column flex-row-s flex-column-l">
                    <h5 className="mb0-50 mr0-25"
                    >
                        Consulting Architects,
                    </h5> 
                    <h5>
                        Engineers and Surveyors
                    </h5>
                
                </hgroup>
                
                <div className="flex items-center justify-center
                    w-100  
                    f0-75 ttu"
                >
                    <div className="w-10 h0-25 bb bt mr1-00"></div> 
                        since 1973 
                    <div className=" w-10 h0-25 bb bt ml1-00"></div>
                </div>
            </figcaption> 
        </figure>
    )
}

export default AESLLogo
