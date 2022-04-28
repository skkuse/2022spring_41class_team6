import {Badge, ListGroup} from "react-bootstrap";
import Router from "next/router";

export default function ProblemItem({chapter,title,pid,Solved})
{
    const moveProblem = () => {
      Router.push(`/problems/problem/?pid=${pid}&chapter=${chapter}&title=${title}`)
    }
    return (
            <ListGroup.Item onClick={moveProblem}
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto fw-bold">
                    {chapter}-{title}-{pid}
                </div>
                <Badge bg="primary" pill>
                    {Solved}
                </Badge>
            </ListGroup.Item>


    );
}