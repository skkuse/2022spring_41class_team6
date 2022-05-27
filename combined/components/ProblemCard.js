import {Card} from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import {useEffect} from "react";

export default function ProblemCard({pid,chapter,title})
{
  const [desc, setDesc] = useState("");
  useEffect(() => {
    axios.post("/api/problem/", {
      chapter: String(chapter)
    }).then(function(res) {
      let ret = res["data"]["problem"];
      setDesc(ret);
    }).catch(function (error){
      console.log(error);
    });
  }, [chapter]);

  return (<Card style={{height :"fit-content", marginTop:"2rem"}} >
    <Card.Body>
      <Card.Title>챕터 {chapter} {pid}번 문제</Card.Title>
      <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
      <Card.Text style={{whiteSpace:"pre-wrap"}}>{desc}</Card.Text>
    </Card.Body>
  </Card>);
}
