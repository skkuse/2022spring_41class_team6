import {Card} from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

export default function ProblemCard({pid,chapter,title})
{
    const [output, setOutput] = useState("");
    axios.post("/api/problem/", {
        // chapter: String(chapter) + "-" + String(pid+1)
        chapter: String(chapter) + "-" + String(pid)
        }).then(function(res) {
            let ret = res["data"]["problem"];
            console.log(ret)
            setOutput(ret);
        }).catch(function (error){
        });

    return (<Card style={{height :"fit-content", marginTop:"2rem"}} >
        <Card.Body>
            <Card.Title>챕터 {chapter} {pid}번 문제</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text>
                <Card.Text>{output}</Card.Text>
            </Card.Text>
        </Card.Body>
    </Card>);
}