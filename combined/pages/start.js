import {Row, Col, Container} from "react-bootstrap";
import PinkButton from "../components/PinkButton";
import Router from "next/router";
import {BlueButton} from "../components/BlueButton";

// 컨텐츠와 문제풀기를 선택하는 페이지
export default function StartPage()
{
  const moveContents = () => {
    Router.push(`/book/contents?chapter=1-1`);
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
