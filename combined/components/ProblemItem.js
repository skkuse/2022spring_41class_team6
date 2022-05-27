import {Badge, ListGroup} from "react-bootstrap";
import Router from "next/router";
import axios from "axios";
import { useState } from "react";
import {useEffect} from "react";

export default function ProblemItem({chapter,title,pid,Solved})
{
  const [output, setOutput] = useState("");
  useEffect(() => {
    axios.post("/api/isSolved", {
      chapter: String(chapter) + "-" + String(pid)
    }).then(function(res) {
      let ret = res["data"]["is_solved"]
      if(ret == 'Y') {
        setOutput("Solved")
      }
      else
      setOutput("UnSolved");
    }).catch(function (error){
      console.log(error);
    });
  }, [chapter]);

  const moveProblem = () => {
    Router.push(`/problems/problem/?pid=${pid}&chapter=${chapter}&title=${title}`)
  }
  return (
    <ListGroup.Item onClick={moveProblem}
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto fw-bold">
        {chapter}-{pid}
      </div>
      <Badge bg="primary" pill>
        {output}
      </Badge>
    </ListGroup.Item>
  );
}
