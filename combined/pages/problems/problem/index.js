import {useRouter} from "next/router";
import {useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import ProblemList from "../../../components/ProblemList";
import DefaultLayout from "../../../layouts/defaultLayout";
import ProblemCard from "../../../components/ProblemCard";
import Editor from "../../../components/Editor";
import axios from "axios";

export default function ProblemInfo()
{
    const router = useRouter();
    const pid = router.query.pid;
    const chapter = router.query.chapter;
    const title = router.query.title;

    const [code, setCode] = useState("");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const runCode = () => {
      axios.post("/api/runcode", {
        code: code,
        input: input
      }).then(function(res) {
        let ret = res["data"];
        setOutput(ret);
      }).catch(function (error){
        console.log(error);
      });
    };

    return (
        <DefaultLayout>
            <Container style={{marginTop:"2rem",border : "2px solid green", borderRadius:"1.2rem"}}>
                <Row  style={{marginTop:"2%"}}  className="justify-content-md-center">
                    <Col xs>
                        <h1 style={{textAlign:"center"}}>
                            {pid} 번 문제 풀기
                        </h1>
                    </Col>
                </Row>

                <Row>
                    <Col   xs={4} >
                       <ProblemCard pid={pid} chapter={chapter} title={title}/>
                    </Col>
                    <Col  xs={8}>
                        <Row>
                            <Editor code={code} setCode={setCode}/>
                        </Row>
                        <Row style={{margin: "10px 0px 10px 0px"}}>
                            <textarea
                              placeholder="Please edit your input"
                              value={input}
                              onChange={(event) => {
                                setInput(event.target.value);
                              }}></textarea>
                        </Row>
                        <Row>
                            <Col style={{border : "2px solid green", borderRadius:"1.2rem" }}  xs={8}>
                                <div style={{overflow: "auto"}}>{output}</div>
                            </Col>
                            <Col  >
                                <Button style={{width:"100%", height:"100%"}} variant="primary"
                                onClick={runCode}> RUN </Button>
                            </Col>
                            <Col  >
                                <Button  style={{width:"100%",height:"100%"}} variant="danger"
                                > SUBMIT </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </DefaultLayout>
    );
}
