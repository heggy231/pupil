import { useState } from "react"
import {Form, Col, Row, Button } from "react-bootstrap"
import "./become.css"

const Become = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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
      setFirstName(event.target.value)
      console.log(firstName);
    }
    const handleLnameChange = (event) => {
      setLastName(event.target.value)
      console.log(lastName);
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

    const handleSubmit = async (e) => {
      e.preventDefault();
      const results = await fetch('/api/cases', {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ firstName, lastName, email, type, skill, about, })
      });
      console.log(await results.json());
      setFirstName('');
      setLastName('');
      setEmail('');
      setType('');
      setSkill('');
      setAbout('');
    }
  


    return (
      <div className="wrapper">
        <Form>
  <Row className="mb-3 sm xs={2}">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>First Name</Form.Label>
      <Form.Control onChange={handleFnameChange} value={firstName} type="First name" placeholder="First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridName1">
      <Form.Label>Last Name</Form.Label>
      <Form.Control onChange={handleLnameChange} value={lastName} type="Last name" placeholder="Last name" />
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
        <option>AL</option>
        <option>AK</option>
        <option>AZ</option>
        <option>AR</option>
        <option>CA</option>
        <option>CO</option>
        <option>CT</option>
        <option>DE</option>
        <option>FL</option>
        <option>GA</option>
        <option>HI</option>
        <option>ID</option>
        <option>IL</option>
        <option>IN</option>
        <option>IA</option>
        <option>KS</option>
        <option>KY</option>
        <option>LA</option>
        <option>ME</option>
        <option>MD</option>
        <option>MI</option>
        <option>MN</option>
        <option>MS</option>
        <option>MO</option>
        <option>MT</option>
        <option>NE</option>
        <option>NV</option>
        <option>NH</option>
        <option>NJ</option>
        <option>NM</option>
        <option>NY</option>
        <option>NC</option>
        <option>ND</option>
        <option>OH</option>
        <option>OK</option>
        <option>OR</option>
        <option>PA</option>
        <option>RI</option>
        <option>SC</option>
        <option>SD</option>
        <option>TN</option>
        <option>TX</option>
        <option>UT</option>
        <option>VT</option>
        <option>VA</option>
        <option>WA</option>
        <option>WV</option>
        <option>WI</option>
        <option>WY</option>
        <option></option>


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

  <Button variant="primary" type="submit" onSubmit = {handleSubmit}>
    Submit
  </Button>
</Form>
</div>
    )
}
export default Become