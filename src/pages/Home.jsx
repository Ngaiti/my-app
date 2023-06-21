import { Container } from "react-bootstrap"
import Likecount from "../components/Likecount"

function Home() {
    return (
        <Container className="my-3">
            <h1> Howdy Yall!</h1>
            <Likecount />
        </Container>
    )
}

export default Home