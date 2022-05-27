import {Badge, Col, Container, Row} from "react-bootstrap";
import ContentsCard from "./ContentsCard";
import DefaultLayout from "../layouts/defaultLayout";
import {useRouter} from "next/router";

export default function MainPage({chapter})
{
  const tempStyle={
    boder:"1px solid black",
    textAlign:"center",
  };

  return(
    <DefaultLayout>
      <Container  className="justify-content-md-center">
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row className="justify-content-md-center">
          <Col xs>
            <h1 style={{textAlign:"center"}}>
              {chapter}
            </h1>
            <p style={{textAlign:"center",fontSize:'1.5rem'}}> <Badge  bg="secondary">Chapter {chapter}</Badge></p>
          </Col>
        </Row>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row className="justify-content-md-center">
          <Col>
            <ContentsCard chapter={chapter}/>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
}
