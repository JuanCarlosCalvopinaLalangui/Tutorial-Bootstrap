import './App.css';
import { useState } from 'react';
import { Button, Carousel, Container, Card } from 'react-bootstrap';
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <div>
        <Alert variant='success' onClose={() => setShow(false)} dismissible>
          <Alert.Heading>This is a Alert</Alert.Heading>
          <p>hi</p>
        </Alert>
      </div>
    )
  }

  return (
    <div>
      <Container>
        <Button onClick={() => setShow(true)}>Show Alert</Button>
      </Container>

      <Container className='navBar' style={{ backgroundColor: "black" }}>
        <Carousel>
          <Carousel.Item>
            <img src='https://i.pravatar.cc/400?=pe' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>First slide description, example.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://i.pravatar.cc/400?=lu' />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Second slide label, example.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src='https://i.pravatar.cc/400?=du' />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Third slide label, example.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      
      <Container>
        <Card style={{ width: '18rem' }}>
        <img src='https://i.pravatar.cc/400?=d' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button onClick={() => setShow(true)} variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default App;
