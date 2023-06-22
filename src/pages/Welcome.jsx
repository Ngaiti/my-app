import Likecount from "../components/Likecount"

function Welcome() {

    const now = new Date()

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className='text-center'>
                <h1> Hello Sluts! It is now {now.toString()}</h1>
                <Likecount />
            </div>
        </div>
    )
}

export default Welcome