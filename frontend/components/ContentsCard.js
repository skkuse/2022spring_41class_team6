import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

export default function ContentsCard({chapter,subChapter})
{

    return(<Card style={{ width: '100%'}}>
        <Card.Body>
            <Card.Title> Chapter {chapter}-{subChapter} 소챕터 제목 </Card.Title>
        </Card.Body>

        <Card.Body>
            <Card.Text>
                Chapter {chapter}-{subChapter}의  내용입니다.
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            {/*이전 챕터 다음 챕터는 챕터 구성을 어떻게 했는지에 따라 달라져야함.*/}
            <ListGroupItem><Card.Link href="#">이전 소챕터</Card.Link> <Card.Text>이전 소챕터 이름</Card.Text></ListGroupItem>
            <ListGroupItem><Card.Link href="#">다음 소챕터</Card.Link> <Card.Text>다음 소챕터 이름</Card.Text></ListGroupItem>
        </ListGroup>
    </Card>);
}