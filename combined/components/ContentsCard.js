import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import {useEffect} from "react";

export default function ContentsCard({chapter})
{
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (!chapter)
      return
    axios.post("/api/content", {
      chapter: chapter
    }).then(function(res) {
      let content = res["data"]["content"];
      let title = res["data"]["title"];
      setContent(content);
      setTitle(title);
    }).catch(function (error){
      console.log(error);
    });
  }, [chapter]);


  return(<Card style={{ width: '100%'}}>
    <Card.Body>
      <Card.Title> Chapter {chapter} {title} </Card.Title>
    </Card.Body>

    <Card.Body>
      <Card.Text style={{whiteSpace:"pre-wrap"}}>
        {content}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      {/*이전 챕터 다음 챕터는 챕터 구성을 어떻게 했는지에 따라 달라져야함.*/}
      {/* <ListGroupItem><Card.Link href="#">이전 소챕터</Card.Link> <Card.Text>이전 소챕터 이름</Card.Text></ListGroupItem>
      <ListGroupItem><Card.Link href="#">다음 소챕터</Card.Link> <Card.Text>다음 소챕터 이름</Card.Text></ListGroupItem> */}
    </ListGroup>
  </Card>);
}
