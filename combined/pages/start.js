import {Badge, Col, Container, Row} from "react-bootstrap";
import ContentsCard from "../components/ContentsCard";
import PinkButton from "../components/PinkButton";
import Router from "next/router";
import {BlueButton} from "../components/BlueButton";

export default function StartPage()
{
  const moveContents = () => {
    Router.push("/book/hello");
  }
  const moveProblem = () => {
    Router.push("/problems");
  }

  return(
    <Container  style={{marginTop:"15%",height:"15rem",}} className="justify-content-md-center">
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row  style={{height:"100%", }} className="justify-content-md-center">
        <Col xs>
          <PinkButton text={"컨텐츠"} clickEvent={moveContents}/>
        </Col>
        <Col xs>
          <BlueButton text={"문제풀기"} clickEvent={moveProblem}/>
        </Col>
      </Row>
    </Container>
  )
}
