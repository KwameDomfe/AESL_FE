import React from 'react'

const SectionFooter = (props) => {
    
    const {sectionTitle} = props
    
    return (
        <footer id="ProjectCategories__footer"
            className="w-100 gc1s12 "
        >
            <div className="flex justify-between
                pa1-00 
                bg-blue0 i w-100"
            >
                <div className="gold ttc"
                >
                    AESL || {sectionTitle}
                </div>
                <div className="flex justify-between 
                w10-00
                gold ttc"
                >
                    <div className="ba w2-00 h2-00"></div>
                    <div className="ba w2-00 h2-00"></div>
                    <div className="ba w2-00 h2-00"></div>
                </div>
            </div> 
        </footer>
    )
}

export default SectionFooter