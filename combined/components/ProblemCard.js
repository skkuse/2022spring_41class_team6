import {Card} from "react-bootstrap";

export default function ProblemCard({pid,chapter,title})
{


    return (<Card style={{height :"fit-content", marginTop:"2rem"}} >
        <Card.Body>
            <Card.Title>챕터 {chapter} {pid}번 문제</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
            <Card.Text>
                <Card.Text>문제설명</Card.Text>
                <Card.Text>문제설명</Card.Text>
                <Card.Text>문제설명</Card.Text>
                <Card.Text>문제설명</Card.Text>
                <Card.Text>문제설명</Card.Text>
                <Card.Text>문제설명</Card.Text>
                <Card.Text>문제설명</Card.Text>
                <Card.Text>문제설명</Card.Text>
                <Card.Text>문제설명</Card.Text>
                <Card.Text>문제설명</Card.Text>
                <Card.Text>문제설명</Card.Text>
            </Card.Text>
        </Card.Body>
    </Card>);
}