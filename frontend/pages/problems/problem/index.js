import {useRouter} from "next/router";
import {Button, Col, Container, Row} from "react-bootstrap";
import ProblemList from "../../../components/ProblemList";
import DefaultLayout from "../../../layouts/defaultLayout";
import ProblemCard from "../../../components/ProblemCard";
import Editor from "../../../components/Editor";

export default function ProblemInfo()
{
    const router =useRouter();
    const pid = router.query.pid;
    const chapter = router.query.chapter;
    const title = router.query.title;

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
                        <Row >
                            <Editor/>
                        </Row>
                        <Row>
                            <Col style={{border : "2px solid green", borderRadius:"1.2rem" }}  xs={8}>
                                <div>콘솔창이 들어갈 곳</div>
                                <div>콘솔창이 들어갈 곳</div>
                            </Col>
                            <Col  >
                                <Button style={{width:"100%", height:"100%"}} variant="primary" > RUN </Button>
                            </Col>
                            <Col  >
                                <Button  style={{width:"100%",height:"100%"}} variant="danger" > SUBMIT </Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>



            </Container>
        </DefaultLayout>
    );

}