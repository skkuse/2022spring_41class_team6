import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Header from "../components/Header";

function AppLayout({ children }) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
}

export default AppLayout;
