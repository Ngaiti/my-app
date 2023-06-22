import { useContext, useEffect, useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";
import Rating from "react-rating";

export default function TodoCard({ todo }) {
    const completed = todo.completed;
    const border = completed ? "success" : "danger";
    const [timer, setTimer] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);
    const setTodos = useContext(TodoContext).setTodos;

    const startTimer = () => {
        if (timerInterval === null) {
            const intervalID = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
            setTimerInterval(intervalID);
        }
    };

    const pauseTimer = () => {
        clearInterval(timerInterval);
        setTimerInterval(null);
    };

    const resetTimer = () => {
        clearInterval(timerInterval);
        setTimerInterval(null);
        setTimer(0);
    };

    const deleteTodo = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this?");
        if (confirmDelete) {
            setTodos((prevTodos) =>
                prevTodos.filter((prevTodo) => prevTodo.id !== todo.id)
            );
        }
    };

    useEffect(() => {
        return () => {
            clearInterval(timerInterval);
        };
    }, [timerInterval]);


    return (
        <>
            <Card border={border} className="my-3 border-2">
                <Card.Header as="h6">{!completed && "Not"} Completed</Card.Header>
                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                    <Rating initialRating={0} emptySymbol="bi bi-star" fullSymbol="bi bi-star-fill" onChange={(rating) => console.log(rating)} />
                    <p>Timer: {timer} seconds</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" onClick={startTimer}>
                                <i className="bi bi-play-circle"></i>
                            </Button>
                            <Button variant="secondary" onClick={pauseTimer} >
                                <i className="bi bi-pause-fill"></i>
                            </Button>
                            <Button variant="secondary" onClick={resetTimer} >
                                <i className="bi bi-arrow-clockwise"></i>
                            </Button>
                            <Button variant="secondary" href={`todo/${todo.id}`} >
                                <i className="bi bi-pencil"></i>
                            </Button>
                            <Button variant="secondary" onClick={deleteTodo} >
                                <i className="bi bi-trash3"></i>
                            </Button>
                        </ButtonGroup>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}