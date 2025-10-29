import { Link } from 'react-router-dom'

const AESLOverview = () => {
    return (
        <hgroup className="w-100
            pr1-00-m 
            lh-copy"
        >
            <p>
                Architectural and Engineering Services Limited (AESL) is a practicing and a multidisciplinary firm that provides comprehensive Architectural and Engineering solutions for public and sector clients in the construction industry.
            </p>
            <p>
                AESL offers a wide range of services combining the fields of Architecture and Engineering to create innovative and sustainable designs that are not only visually appealing but also structurally sound and efficient.
            </p>
            <p>
                AESL operates from its head office in the capital of Ghana-Accra, with other offices located in the 16 regions of Ghana.
            </p>

            <div className="flex justify-start items-end mt4-00">
                <Link to ="/practice"
                    className="dib 
                        pa0-50 mr4-00
                        bg-blue0 white-90 f1-00
                        ba b--blue0 br0-25"
                >Read More</Link> 
                <Link to ="/practice"
                    className="dib 
                        pa0-50 
                        blue0 white-90 f1-00
                        ba br0-25"
                >Contact Us</Link> 
            </div> 

        </hgroup>
    )
}

export default AESLOverview
