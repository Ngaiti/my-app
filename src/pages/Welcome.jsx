import { useEffect, useState } from "react";
import { Button } from "react-bootstrap"

function Welcome() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="welcome">
            <div>
                <div className='text-center'>
                    <h1 className="h1-custom"> Hello Sluts! It is now {currentTime.toString()}</h1>

                    <br />
                    <Button size="lg" className="m-5" variant="btn btn-outline-dark" href="/login">Login</Button>
                </div>
            </div>
        </div>
    )
}

export default Welcome