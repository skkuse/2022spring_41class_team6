import {Badge, Button, Col, Container, Form, Row} from "react-bootstrap";
import Router from "next/router";
import axios from "axios";
export default function SignUpPage()
{
  const moveBack =() => {
    Router.push("/auth/login");
  }
  const Signup = () => {
    if (!floatingInputCustom[0].value || !floatingPasswordCustom[0].value){
      alert("Empty Field Exists!");
      return
    }
    axios.post("/api/auth/signup", {
      email: floatingInputCustom[0].value,
      password: floatingPasswordCustom[0].value
    }).then(function(res) {
    }).catch(function (error){
      console.log(error);
    });
    Router.push("/auth/login");
  }
  return(
    <Container   style={{width:"40%",marginTop:"5rem", padding:"20px 20px 20px 20px", border:"2px solid green", borderRadius:"1.5rem"}}>
      <Row>
        <Col style={{marginTop:"0.5rem", marginBottom:"5rem"}}>
          <h2 style={{textAlign:"center"}}>회원가입</h2>
        </Col>
      </Row>
      <Row/>
      <Row>
        <Col>
          <h4>Email</h4>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
          <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Email Confirm</h4>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Password</h4>
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Password Confirm</h4>
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Retype Password"
            />
            <label htmlFor="floatingPasswordCustom">Retype Password</label>
          </Form.Floating>
        </Col>
      </Row>
      <Row style={{marginBottom:"1rem", marginTop:"1rem"}}>
        <Button onClick={moveBack} style={ { width:"50%",fontSize:"1.8rem",  marginLeft:"25%",marginRight:"25%"}} className="btn btn-lg"> 뒤로가기 </Button>
      </Row>
      <Row>
        <Button onClick={Signup} style={ { width:"50%",fontSize:"1.8rem", marginLeft:"25%",marginRight:"25%"}} className="btn btn-success"> 회원가입 </Button>
      </Row>
    </Container>
  );
}
