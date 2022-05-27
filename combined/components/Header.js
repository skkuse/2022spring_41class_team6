import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown,Offcanvas} from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Header(){
  const [contents, setContents] = useState({});

  useEffect(() => {
    axios.post("/api/allContent", {
    }).then(function(res) {
      let ret = res["data"];
      var allContent = {}
      for (var content of ret) {
        var index = content["chapter"].split('-',1)
        if (!allContent.hasOwnProperty(index))
          allContent[index] = [];
        allContent[index].push(content);
      }
      setContents(allContent);
    }).catch(function (error){
      console.log(error);
    });
  }, []);

  const logout = () => {
    axios.post("/api/auth/logout", {
    }).then(function(res) {
      console.log("Log out success!");
    }).catch(function (error){
      console.log("Log out error!");
    });
  }

  const drawNav = (contents) => {
    const Nav = [];
    for (var key = 1; key < 5; key++){
      var index = String(key)
      var chapter_str = "Chapter " + index;
      if (contents.contents.hasOwnProperty(index)){
        Nav.push(<NavDropdown key={"nav_"+index} className="justify-content-md-center" title={chapter_str} id="offcanvasNavbarDropdown">
          {contents.contents[index].map((content) =>
            <NavDropdown.Item key={"content_"+content["chapter"]} href={"/book/contents?chapter="+content["chapter"]}>{content["chapter"]}. {content["title"]}</NavDropdown.Item>
          )}
          <NavDropdown.Item key={"solve_"+index} href={"/problems/problemlist/?index="+index}>Chapter {index} 문제 풀기</NavDropdown.Item>
        </NavDropdown>);
      }
    }
    return Nav;
  }

  return (
    <Navbar bg="success" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Brand href="/auth/login" onClick={logout}>LogOut</Navbar.Brand>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header  closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ProfileCard/>
            <Nav className="justify-content-md-center">
              {drawNav({contents})}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
