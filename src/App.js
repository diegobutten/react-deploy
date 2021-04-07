import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Example@gmail.com" />
                  <Form.Text className="text-muted">
                    We'll never share your email adress trust us.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="*******" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="secondary" type="submit">
              Login
            </Button>
          </Form>

          <Card className="mb-3 p-4" style={{ color: "#000" }}>
            <Card.Img src="https://picsum.photos/200/50" />
            <Card.Body>
              <Card.Title>Card Example</Card.Title>
              <Card.Text>This is an example of react boostrap cards</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Test2</Breadcrumb.Item>
            <Breadcrumb.Item active>Test3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant="success">This is a Button</Alert>
          <Button>Test Button</Button>
        </Container>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

{
  /* <Container>
  <Form>
    <Row>
      <Col md>
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Example@gmail.com" />
          <Form.Text className="text-muted">
            We'll never share your email adress trust us.
          </Form.Text>
        </Form.Group>
      </Col>
      <Col md>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="*******" />
        </Form.Group>
      </Col>
    </Row>
    <Button variant="secondary" type="submit">
      Login
    </Button>
  </Form>

  <Card className="mb-3 p-4" style={{ color: "#000" }}>
    <Card.Img src="https://picsum.photos/200/50" />
    <Card.Body>
      <Card.Title>Card Example</Card.Title>
      <Card.Text>This is an example of react boostrap cards</Card.Text>
      <Button variant="primary">Read More</Button>
    </Card.Body>
  </Card>
  <Breadcrumb>
    <Breadcrumb.Item>Test</Breadcrumb.Item>
    <Breadcrumb.Item>Test2</Breadcrumb.Item>
    <Breadcrumb.Item active>Test3</Breadcrumb.Item>
  </Breadcrumb>
  <Alert variant="success">This is a Button</Alert>
  <Button>Test Button</Button>
</Container> */
}
