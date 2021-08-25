import { useState } from "react"
import {Form} from "react-bootstrap"
import {Col} from "react-bootstrap"
import {Row} from "react-bootstrap"
import {Button} from "react-bootstrap"

const Become = () => {
    const [email, setEmail] = useState("");
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        console.log(email)
    }

    return (
        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control onChange={handleEmailChange} value={email} type="First name" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="password" placeholder="Last name" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="hello@aol.com" />
  </Form.Group>

  <Form.Group className="mb-3" id="formGridCheckbox">
    What type of skills do you have
    <Form.Check type="checkbox" label="Hard Skills" />
    <Form.Check type="checkbox" label="Soft Skills" />
    <Form.Check type="checkbox" label="Life Skills" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>About</Form.Label>
    <Form.Control placeholder="Tell us about yourself" />
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