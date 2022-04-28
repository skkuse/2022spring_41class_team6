import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

export default function ContentsCard()
{

    return(<Card style={{ width: '100%'}}>
        <Card.Body>
            <Card.Title> 소챕터 제목 </Card.Title>
        </Card.Body>

        <Card.Body>
            <Card.Text>
                소챕터 내용입니다.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><Card.Link href="#">이전 소챕터</Card.Link> <Card.Text>이전 소챕터 이름</Card.Text></ListGroupItem>
            <ListGroupItem><Card.Link href="#">다음 소챕터</Card.Link> <Card.Text>다음 소챕터 이름</Card.Text></ListGroupItem>
        </ListGroup>
    </Card>);
}