import React, { useState } from 'react'
const FAQsCard = (props) => {
    
    const {question, answer} = props
    const [showAnswer, setShowAnswer] = useState(false)
    return (
        <figure className="grid gtc4 
            ba br0-25 b--white-20
            of-hidden h-100"
        >
            <figcaption className="gc1s4 gr1s1
                f1-00 flex flex-column justify-between h-100
                "
            >
                <header className="pa0-50 flex justify-between"
                >
                    <div className="ttu f1-00">         
                        {question}
                    </div> 
                    <div >
                        <button className="flex items-center justify-center h2-00 w2-00 
                            f2-00 pb0-50
                            b ba br5-00"
                            onClick={() => setShowAnswer(!showAnswer)}
                        >
                            {showAnswer ? '-' : '+'}
                        </button>
                    </div>
                        
                </header>
                {showAnswer && <main className="flex flex-column justify-between 
                                    ba h-100"
                                > 
                                    <p className='pa0-25'
                                    >
                                        {answer}
                                    </p>
                                    <footer className={`flex justify-between
                                        pv1-00 ph0-50
                                        bg-red`}
                                    >
                                        <div className="mr1-00 ">
                                            LINK(s)
                                        </div>
                                       
                                        <div>
                                            CTA(s)
                                        </div>
                                    </footer>

                                </main>
                }
                
                
            </figcaption>
        </figure>
    )
}

export default FAQsCard
