import React from 'react'

const AESL_Subscription = () => {
    const [email, setEmail] = React.useState("");
    const [status, setStatus] = React.useState("");
    React.useEffect(() => {
        if (status && status.startsWith("Subscribed")) {
            const timer = setTimeout(() => setStatus("") , 4000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple email validation
        if (!email.match(/^\S+@\S+\.\S+$/)) {
            setStatus("Please enter a valid email address.");
            return;
        }
        // Simulate API call
        setStatus("Subscribed! You'll receive our next newsletter.");
        setEmail("");
    };
    return (
        <form className="h-100" onSubmit={handleSubmit}>
            <fieldset className="flex flex-column justify-between h-100 pv1-00">
                <legend className="ph0-50">AESL NEWSLETTER</legend>
                <p>
                    Kindly subscribe to our <span className="gold">quarterly</span> newsletter and be the first to know about the latest updates on infrastructure projects, designs, innovations, engineering solutions and industry news direct to your inbox.
                </p>
                <label htmlFor="email" className="dib mb1-00 w-100">Email:
                    <input
                        id="email"
                        className="w-100 pa0-50 mt1-00"
                        name="email"
                        type="email"
                        placeholder="Enter Your Email"
                        autoComplete="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        aria-invalid={status && status !== "Subscribed! You'll receive our next newsletter."}
                    />
                </label>
                <label htmlFor="submit" className="">
                    <input
                        id="submit"
                        name="submit"
                        className="pa0-50 br0-25 b--none"
                        type="submit"
                        value="SUBSCRIBE"
                    />
                </label>
                {status && (
                    <div className="mt1-00 f1-00" 
                        style={
                            { 
                                color: status.startsWith("Subscribed") 
                                ? "green" 
                                : "red" 
                            }
                        }
                    >
                        {status}
                    </div>
                )}
            </fieldset>
        </form>
    );
}

export default AESL_Subscription