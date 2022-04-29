import {Badge, Col, Container, Row} from "react-bootstrap";
import ContentsCard from "./ContentsCard";
import DefaultLayout from "../layouts/defaultLayout";
import {BlueButton} from "./BlueButton";
import Router, {useRouter} from "next/router";

export default function ProblemPage()
{
    const router = useRouter()
    const tempStyle={
        boder:"1px solid black",
        textAlign:"center",
    };

    const moveProblemList= (chapter)=>{

        router.push(`/problems/problemlist/?chapter=${chapter}`);
    };


    return(
            <Container  style={{marginTop:"1%",height:"40rem",}} className="justify-content-md-center">
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row className="justify-content-md-center">
                <Col xs>
                    <h1 style={{textAlign:"center"}}>
                        문제 풀기
                    </h1>
                </Col>
            </Row>
            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row  style={{marginTop:"3rem",height:"18rem",}} className="justify-content-md-center">
                <Col>
                    <BlueButton text={"챕터 1"} clickEvent={() => moveProblemList(1)}/>
                </Col>
                <Col>
                    <BlueButton text={"챕터 2"} clickEvent={() => moveProblemList(2)}/>
                </Col>
            </Row>
                <Row  style={{marginTop:"3rem",height:"18rem",}} className="justify-content-md-center">
                    <Col>
                        <BlueButton text={"챕터 3"} clickEvent={() => moveProblemList(3)}/>
                    </Col>
                    <Col>
                        <BlueButton text={"챕터 4"}clickEvent={() => moveProblemList(4)}/>
                    </Col>
                </Row>

        </Container>
    );
}