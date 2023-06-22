import { useContext } from "react";
import { Card, Col, Badge, Container, Row, Button } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";
import AddTodo from "./AddTodo";
import { useNavigate } from "react-router-dom";

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
            <Button onClick={GoToAddTodoPage}> Add Todo</Button>
        </>
    );
}

function CardGroup({ todos }) {
    return todos.map((todo) => {
        const completed = todo.completed
        const bg = completed ? "success" : "danger";
        return (
            <Col md={4} key={todo.id}>
                <Card className="my-3">
                    <Card.Body>
                        <Card.Title>{todo.title}</Card.Title>
                        <Card.Text>{todo.description}</Card.Text>
                        <Badge bg={bg}>{!completed && "Not"} Completed</Badge>
                    </Card.Body>
                </Card>
            </Col>
        );
    });
}
