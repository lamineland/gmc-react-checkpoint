import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">GoMyCode</Navbar.Brand>
        </Container>
      </Navbar>

        <Container>
            <h1>Welcome to GoMyCode courses</h1>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Course 1</Card.Title>
                            <Card.Text>
                                This is a brief description of Course 1.
                            </Card.Text>
                            <Button variant="primary">Go to Course 1</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Course 2</Card.Title>
                            <Card.Text>
                                This is a brief description of Course 2.
                            </Card.Text>
                            <Button variant="primary">Go to Course 2</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Course 3</Card.Title>
                            <Card.Text>
                                This is a brief description of Course 3.
                            </Card.Text>
                            <Button variant="primary">Go to Course 3</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default App;