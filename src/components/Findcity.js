import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
const Findcity = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
        <Row>
          <Col>
            <h1>City</h1>
          </Col>
        </Row>

        <Row>
          <Col xl={5}>
            <FormControl
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button  onClick={() => onSearch(city)}>Forecast for 5 days</Button>
          </Col>
        </Row>
      </>
    );
  };

export default Findcity;