import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function ProfileCard()
{
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.post("/api/userInfo/", {
    }).then(function(res) {
      let ret = res["data"]["email"];
      setEmail(ret);
    }).catch(function (error){
      console.log(error);
    });
  }, [email]);

  return(<Card style={{ width: '18rem', marginBottom:'2.5rem', marginLeft:'2rem'}}>
    <ListGroup className="list-group-flush">
      <ListGroupItem><Card.Text>Welcome {email}</Card.Text></ListGroupItem>
    </ListGroup>
  </Card>);
}
