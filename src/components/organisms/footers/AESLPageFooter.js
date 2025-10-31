import React from 'react'
import PropTypes from 'prop-types'
import AESLLogo from '../../../images/_partials/logos/aesl_logo.png'

const AESLPageFooter = (
        {
            pageTitle, 
            textClass = 'gold', 
            bgClass = 'bg-blue0'
        }
) => {
        return (
            <div className={`flex-m justify-between items-center pa1-00 mb1-00 ${bgClass} ${textClass}`}>
                <div className="flex justify-center items-center f1-50">
                    <img src={AESLLogo} 
                        alt="AESL Logo" 
                        className="w2-00 mr0-50"
                    />
                    <div>AESL - {pageTitle}</div>
                </div>
                <div className="tc">
                    Consulting Architects, Engineers and Surveyors
                </div>
            </div> 
        )
    }

// PropTypes validation
AESLPageFooter.propTypes = {
    pageTitle: PropTypes.string,
    textClass: PropTypes.string,
    bgClass: PropTypes.string
}

AESLPageFooter.defaultProps = {
    pageTitle: '',
    textClass: 'gold',
    bgClass: 'bg-blue0'
}

export default AESLPageFooter