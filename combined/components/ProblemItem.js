import {Badge, ListGroup} from "react-bootstrap";
import Router from "next/router";
import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";

export default function ProblemItem({chapter,title,Solved})
{
  const [color, setColor] = useState("danger");
  const [solved, setSolved] = useState("");
  useEffect(() => {
    if (!chapter)
      return
    axios.post("/api/isSolved", {
      chapter: chapter
    }).then(function(res) {
      let ret = res["data"]["is_solved"]
      if(ret == 'Y'){
        setSolved("Solved")
        setColor("primary")
      }
      else
        setSolved("UnSolved");
    }).catch(function (error){
      console.log(error);
    });
  }, [chapter]);

  const moveProblem = () => {
    Router.push(`/problems/problem/?&chapter=${chapter}`)
  }
  return (
    <ListGroup.Item onClick={moveProblem}
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto fw-bold">
        {chapter} {title}
      </div>
      <Badge bg={color} pill>
        {solved}
      </Badge>
    </ListGroup.Item>
  );
}
