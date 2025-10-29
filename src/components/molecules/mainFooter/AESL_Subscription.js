import React from 'react'

const AESL_Subscription = () => {
    return (
    <form className="h-100" 
        action=""
    >
        <fieldset className="flex flex-column justify-between 
            h-100 pv1-00"
        >
            <legend className="ph0-50">
                AESL NEWSLETTER
            </legend>
            <p>
                Kindly subscribe to our <span className="gold">quarterly</span> newsletter and be the first to know about the latest updates on infrastructure projects, designs, innovations, engineering solutions and industry news direct to your inbox.
            </p>
            <label htmlFor="email"
                className="dib mb1-00 w-100">Email:
                <input id="email" 
                    className="w-100 pa0-50 mt1-00" 
                    name="email"
                    type="text"
                    placeholder="Enter Your Email"
                    autoComplete="true"
                />
            </label>
            <label htmlFor="submit"
                className=""
            >
                <input id="submit"
                    name="submit"
                    className="pa0-50 br0-25 b--none"
                    type="submit"
                    value="SUBSCRIBE"
                />
            </label>
        </fieldset>
    </form>
  )
}

export default AESL_Subscription