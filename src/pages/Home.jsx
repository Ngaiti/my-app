import { useContext } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";
import TodoCard from "../components/TodoCard";

export default function Home() {
    const todos = useContext(TodoContext).todos
    const navigate = useNavigate();

    function GoToAddTodoPage() {
        navigate("/add")
    }
    return (
        <>
            <Container>
                <h1 className="my-3">Reviews</h1>
                <Button variant="outline-dark" onClick={GoToAddTodoPage}> Add Review</Button>
                <Row>
                    <CardGroup todos={todos} />
                </Row>
            </Container>
        </>
    );
}

function CardGroup({ todos }) {
    return todos.map((todo) => {
        return (
            <Col md={6} key={todo.id}>
                <TodoCard todo={todo} />
            </Col>
        );
    });
}