import {Row, Col, Container} from "react-bootstrap";
import ProblemList from "../../components/ProblemList";
import DefaultLayout from "../../layouts/defaultLayout";
import {useRouter} from 'next/router'
import {useEffect} from "react";

// 각 챕터에서 문제 리스트를 보는 페이지
export default function Problemlist()
{
  const router = useRouter();
  const index = router.query.index;

  return (<DefaultLayout>
    <Container className="justify-content-md-center">
      <Row  style={{marginTop:"2%"}}  className="justify-content-md-center">
        <Col xs>
          <h1 style={{textAlign:"center"}}>
            Chapter {index} 문제 풀기
          </h1>
        </Col>
      </Row>
      <Row  style={{height:"100%", marginTop:"2%"}} className="justify-content-md-center">
        <Col xs>
          <ProblemList index={index}/>
        </Col>
      </Row>
    </Container>
  </DefaultLayout>
  );
}
