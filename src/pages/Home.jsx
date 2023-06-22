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
                <h1 className="my-3">Todos</h1>
                <Row>
                    <CardGroup todos={todos} />
                </Row>
            </Container>
            <Button variant="outline-dark" onClick={GoToAddTodoPage}> Add Todo</Button>
        </>
    );
}

function CardGroup({ todos }) {
    return todos.map((todo) => {
        return (
            <Col md={4} key={todo.id}>
                <TodoCard todo={todo} />
            </Col>
        );
    });
}