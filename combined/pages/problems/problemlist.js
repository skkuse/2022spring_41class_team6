import {Col, Container, Row} from "react-bootstrap";
import PinkButton from "../../components/PinkButton";
import {BlueButton} from "../../components/BlueButton";
import ProblemList from "../../components/ProblemList";
import { useRouter } from 'next/router'
import DefaultLayout from "../../layouts/defaultLayout";
import {useEffect} from "react";


export default function Problemlist()
{
    const router = useRouter();
     const chapter=router.query.chapter;

    return (<DefaultLayout>
            <Container className="justify-content-md-center">
                <Row  style={{marginTop:"2%"}}  className="justify-content-md-center">
                    <Col xs>
                        <h1 style={{textAlign:"center"}}>
                            Chapter {chapter} 문제 풀기
                        </h1>
                    </Col>
                </Row>
                <Row  style={{height:"100%", marginTop:"2%"}} className="justify-content-md-center">
                    <Col xs>
                        <ProblemList chapter={chapter}/>
                    </Col>
                </Row>
            </Container>
    </DefaultLayout>

    );
}