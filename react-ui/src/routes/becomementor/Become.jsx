import { useState } from "react"
import {Form, Col, Row, Button } from "react-bootstrap"
import "./become.css"

const Become = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("");
    const [skill, setSkill] = useState("");
    const [about, setAbout] = useState("");
    const [check, setCheck] = useState([""]);
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        console.log(email)
    }
    const handleFnameChange = (event) => {
      setFName(event.target.value)
      console.log(fName);
    }
    const handleLnameChange = (event) => {
      setLName(event.target.value)
      console.log(lName);
    }
      const handleTypeChange = (event) => {
      setType(event.target.value)
      console.log(type);
    }
      const handleSkillChange = (event) => {
      setSkill(event.target.value)
      console.log(skill);
    }
    const handleAboutChange = (event) => {
      setAbout(event.target.value)
      console.log(about);
    }
    const handleCheckChange = (event) => {
      setCheck(event.target.value)
      console.log(check);
    }

    

    return (
      <div className="wrapper">
        <Form>
  <Row className="mb-3 sm xs={2}">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>First Name</Form.Label>
      <Form.Control onChange={handleFnameChange} value={fName} type="First name" placeholder="First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridName1">
      <Form.Label>Last Name</Form.Label>
      <Form.Control onChange={handleLnameChange} value={lName} type="Last name" placeholder="Last name" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3 sm" controlId="formGridemail">
    <Form.Label>Email</Form.Label>
    <Form.Control onChange={handleEmailChange} value={email} type="email"placeholder="jimmy@aol.com" />
  </Form.Group>

  <Form.Group className="mb-3 sm" id="formGridCheckbox">
    Please select 
    <Form.Check type="checkbox" label="Hard Skills" />
    <Form.Check type="checkbox" label="Soft Skills" />
    <Form.Check type="checkbox" label="Life Skills" />
  </Form.Group>

  <Form.Group className="mb-3 xs={1}" >
    <Form.Label>About</Form.Label>
    <Form.Control onChange={handleAboutChange} value={about} placeholder="Tell us about yourself" />
  </Form.Group>

  <Row className="mb-3 xs={1}">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>
    </Row>
<Row className ="rowText1" md={2} sm={1}>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check onClick = {handleCheckChange} value="hello world" type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    )
}
export default Become