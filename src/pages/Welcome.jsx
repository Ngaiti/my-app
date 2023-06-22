import { Button } from "react-bootstrap"
import Likecount from "../components/Likecount"

function Welcome() {

    const now = new Date()

    return (
        <div className="welcome">
            <div>
                <div className='text-center'>
                    <h1 className="h1-custom"> Hello Sluts! It is now {now.toString()}</h1>
                    <Likecount />
                    <br />
                    <Button size="lg" className="m-5" variant="btn btn-outline-dark" href="/login">Login</Button>
                </div>
            </div>
        </div>
    )
}

export default Welcome