import { useState } from "react"
import {Form, Col, Row, Button } from "react-bootstrap"

const Become = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState("");
    const [skill, setSkill] = useState("");
    const [about, setAbout] = useState("");
    
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
      // setType(event.target.value)
      console.log(type);
    }
      const handleSkillChange = (event) => {
      setSkill(event.target.value)
      console.log(skill);
    }
    const {handleAboutChange} = (event) => {
      setAbout(event.target.value)
      console.log(about);
    }

    return (
        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control onChange={handleFnameChange} value={fName} type="First name" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control onChange={handleLnameChange} value={lName} type="password" placeholder="Last name" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control onChange={handleEmailChange} value={email}placeholder="hello@aol.com" />
  </Form.Group>

  <Form.Group className="mb-3" id="formGridCheckbox">
    Please select 
    <Form.Check onSelect={handleTypeChange} type="checkbox" label="Hard Skills" />
    <Form.Check type="checkbox" label="Soft Skills" />
    <Form.Check type="checkbox" label="Life Skills" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>About</Form.Label>
    <Form.Control onChange={handleAboutChange} value={about} placeholder="Tell us about yourself" />
  </Form.Group>

  <Row className="mb-3">
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

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    )
}
export default Become