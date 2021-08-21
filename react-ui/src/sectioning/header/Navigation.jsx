import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
// import { Container } from "react-bootstrap"
import "./header.css"

function Navigation() {
    return (
      // <Container fluid >
      <Navbar expand="sm">
       <Navbar.Brand className="logo" href="/"> pupil </Navbar.Brand>
       <Navbar.Toggle />
       <Navbar.Collapse>
       <Nav className="navtext-container">
         <Nav.Link className="navtext" href="/about">About</Nav.Link>
         <Nav.Link className="navtext" href="/getstarted">Find Mentor</Nav.Link>
         <Nav.Link className="navtext" href="why">Our Mentors</Nav.Link>
       </Nav>    
       </Navbar.Collapse>
     </Navbar>
    //  </Container >
    )
    
}

export default Navigation