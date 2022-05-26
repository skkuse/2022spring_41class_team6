import {Badge, ListGroup} from "react-bootstrap";
import Router from "next/router";
import axios from "axios";
import { useState } from "react";

export default function ProblemItem({chapter,title,pid,Solved})
{
    const [output, setOutput] = useState("");
    console.log(chapter)
    axios.post("/api/isSolved", {
        chapter: String(chapter) + "-" + String(pid)
        }).then(function(res) {
            let ret = res["data"]["is_solved"]
            // if(ret == 'N') Solved = {"UnSolved"};
            // else Solved = "Solved";   
        }).catch(function (error){
        });

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
                    {Solved}
                </Badge>
            </ListGroup.Item>


    );
}