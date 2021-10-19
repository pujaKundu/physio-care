import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";

const People = () => {
  return (
    <Container className="my-5">
      <h2 className="my-5">Our Volunteers</h2>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://image.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg"
          />
          <Card.Body>
            <Card.Title>Abida Alam</Card.Title>
            <Card.Text>
              Long-term Volunteer. <br />
              Dhaka
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://image.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg"
          />
          <Card.Body>
            <Card.Title>Alexandra</Card.Title>
            <Card.Text>
              Short-term Volunteer. <br />
              London{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://image.freepik.com/free-photo/half-length-shot-cheerful-senior-man-smiles-happily-with-white-teeth-wears-optical-glasses-sweater-isolated-brown-wall_273609-44148.jpg"
          />
          <Card.Body>
            <Card.Title>George M.</Card.Title>
            <Card.Text>
              Long-term Volunteer. <br />
              London
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default People;
