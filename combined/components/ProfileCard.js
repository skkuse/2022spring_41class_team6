import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

export default function ProfileCard()
{

    return(<Card style={{ width: '18rem', marginBottom:'2.5rem', marginLeft:'2rem'}}>
        <Card.Img style={{width:'9rem',marginLeft:'4.5rem'}} variant="top" alt="프로필 이미지" src="/profileimage.png" />
        <Card.Body>
            <Card.Title>계정 이름</Card.Title>
            <Card.Text>
                한 줄 자기소개
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><Card.Text>Email</Card.Text></ListGroupItem>
            <ListGroupItem><Card.Link href="#">Github</Card.Link></ListGroupItem>
        </ListGroup>
    </Card>);
}