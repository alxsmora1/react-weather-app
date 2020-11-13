import React from "react";
import axios from "axios";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormInput,
  Form,
  FormGroup,
  Button,
} from "shards-react";
import WeatherLogo from "../media/undraw_weather_app_i5sm.svg";

export default class WeatherBox extends React.Component {
  state = {
    city: "",
    curr_temp: 0,
    min_temp: 0,
    max_temp: 0,
    weather: "",
    icon: "",
  };

  handleChange = (event) => {
    this.setState({ city: event.target.value });
  };

  onSend = () => {
    let currentComponent = this;
    const city = this.state.city;

    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&lang=es&mode=json&appid=d38973609069c440f57df3dc66583cec"
      )
      .then(function (response) {
        currentComponent.setState({
          curr_temp: response.data.main.temp,
          max_temp: response.data.main.temp_max,
          min_temp: response.data.main.temp_min,
          weather: response.data.weather[0].main,
          icon: 'http://openweathermap.org/img/wn/' + response.data.weather[0].icon + '@2x.png',
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Row className="d-flex justify-content-center align-middle">
            <Col sm="12" md="8" lg="8">
              <Card className="mt-5">
                <CardBody>
                  <Form>
                    <Row className="d-flex justify-content-center align-middle">
                      <Col className="text-center my-1" sm="12" md="12" lg="12">
                        <img
                          src={WeatherLogo}
                          alt="Weather Logo"
                          width="240"
                          height="120"
                        />
                      </Col>
                      <Col className="text-center my-2" sm="12" md="12" lg="12">
                        <h1>Weather App</h1>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="9" md="9" lg="9">
                        <FormGroup>
                          <FormInput
                            id="#city"
                            placeholder="Ciudad"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col sm="3" md="3" lg="3">
                        <FormGroup>
                          <Button
                            className="form-control"
                            theme="success"
                            onClick={this.onSend}
                          >
                            Buscar
                          </Button>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                  <Row>
                    <Col sm="12" md="12" lg="12">
                      {this.state.weather !== "" && (
                        <>
                          <Row className="mb-0 mt-0 p-0">
                            <Col className="d-flex justify-content-center">
                              <img src={ this.state.icon } alt="Weather Icon" />
                            </Col>
                          </Row>
                          <Row>
                            <Col className="d-flex justify-content-center mb-0 mt-0">
                              <h6>{ this.state.weather }</h6>
                            </Col>
                          </Row>
                          <Row>
                            <Col>Actual { this.state.curr_temp  } °C </Col>
                            <Col>Minima { this.state.min_temp } °C </Col>
                            <Col>Maxima { this.state.max_temp } °C </Col>
                         </Row>
                        </>
                      )}
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
