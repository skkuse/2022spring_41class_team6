import {Button, Col, Container, Row} from "react-bootstrap";
import ProblemList from "../../../components/ProblemList";
import DefaultLayout from "../../../layouts/defaultLayout";
import ProblemCard from "../../../components/ProblemCard";
import Editor from "../../../components/Editor";
import {useRouter} from "next/router";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";

// 어떤 한 문제를 실제로 푸는 페이지
export default function ProblemInfo()
{
  const router = useRouter();
  var chapter = router.query.chapter;

  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    if (!chapter && !code)
      return
    setOutput("Processing...");

    axios.post("/api/savecode", {
      chapter: chapter,
      code: code,
    }).then(function(res) {
      console.log("Save code success!");
    }).catch(function (error){
      console.log("Save code error!");
    });

    axios.post("/api/runcode", {
      code: code,
      input: input
    }).then(function(res) {
      var ret = res["data"];
      setOutput(ret);
    }).catch(function (error){
      setOutput(error);
    });
  };

  const submitCode = () => {
    if (!chapter)
      return
    setOutput("Submitting...");

    axios.post("/api/savecode", {
      chapter: chapter,
      code: code,
    }).then(function(res) {
      console.log("Save code success!");
    }).catch(function (error){
      console.log("Save code error!");
    });

    axios.post("/api/runcode", {
      code: code,
      input: ""
    }).then(function(res) {
      var ret = res["data"];
      axios.post("/api/checkAnswer", {
        chapter: chapter,
        output: ret
      }).then(function(res) {
        var ret = res["data"];
        if (ret)
          setOutput("Correct Answer!");
        else
          setOutput("Wrong Answer!");
      }).catch(function (error){
        setOutput(error);
      });
    }).catch(function (error){
      setOutput(error);
    });
  }

  useEffect(() => {
    if (!chapter)
      return
    axios.post("/api/loadcode", {
      chapter: chapter,
    }).then(function(res) {
      var ret = res["data"];
      setCode(ret);
    }).catch(function (error){
      console.log(error);
    });
  }, [chapter]);

  return (
    <DefaultLayout>
      <Container style={{marginTop:"2rem",border : "2px solid green", borderRadius:"1.2rem"}}>
        <Row  style={{marginTop:"2%"}}  className="justify-content-md-center">
          <Col xs>
            <h1 style={{textAlign:"center"}}>
              {chapter} 번 문제 풀기
            </h1>
          </Col>
        </Row>

        <Row>
          <Col   xs={4} >
            <ProblemCard chapter={chapter}/>
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
                <textarea readOnly style={{overflow: "scroll", width:"100%", height: "100px"}}
                value={output}></textarea>
              </Col>
              <Col>
                <Button style={{width:"100%", height:"100%"}} variant="primary"
                onClick={runCode}> RUN </Button>
              </Col>
              <Col>
                <Button  style={{width:"100%",height:"100%"}} variant="danger"
                onClick={submitCode}> SUBMIT </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
}
