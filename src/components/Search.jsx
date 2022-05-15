import React, { useState } from 'react'
import { Button, Col, Container, Form, Navbar, Row } from 'react-bootstrap'

const logoURL="https://cdn-images-1.medium.com/max/1200/1*V7hyvATFi8e-sc722sma8Q.png";
const pfpURL="http://cdn.onlinewebfonts.com/svg/img_568656.png";

export default function Search(props) {
  const [query, setQuery]=useState("");
  const changeQuery = (value) =>
  {
    setQuery(value);
    props.getVideos(value);
  }

    return (
      <Navbar bg="info" variant="dark" expand="lg" className="justify-content-center">
          <header>
          <Container className="justify-content-center">
            <Row>
                <img src={logoURL} alt="logo" className="col-md-2"></img>
              <Col>
                <Form className="mt-5 px-5">
                  <Row className="align-items-center">
                    <Col md={10}>
                        <Form.Control
                        placeholder="Search for Videos"
                        type="text"
                        onChange={(e)=>changeQuery(e.target.value)}>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Button block variant="primary" onClick={(e)=>props.getVideos(query)}>Search</Button>
                    </Col>
                  </Row>
              </Form>
              </Col>
                <img src={pfpURL} alt="logo" className="col-md-2"></img>
            </Row>
          </Container>
        </header>
      </Navbar>

  )
}
