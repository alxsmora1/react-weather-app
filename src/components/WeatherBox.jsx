import React from 'react';
import axios from 'axios';

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
		city: '',
		temp: [],
	}

	handleChange = event => {
      this.setState({ city: event.target.value });
    }

	onSend = () => {
		let currentComponent = this;
		const city = this.state.city;

		axios.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=d38973609069c440f57df3dc66583cec&units=metric')
		  .then(function (response) {
		    // handle success
		    console.log(response.data.main);

		    currentComponent.setState({ temp: response.data.main });
		  })
		  .catch(function (error) {
		    // handle error
		    console.log(error);
		  })
		  .then(function () {
		    // always executed
		  });
	}

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
												<img src={WeatherLogo} alt="Weather Logo" width="240" height="120" />
											</Col>
											<Col className="text-center my-2" sm="12" md="12" lg="12">
												<h1>Weather App</h1>
											</Col>
										</Row>
										<Row>
										<Col sm="9" md="9" lg="9">
											<FormGroup>
										        <FormInput id="#city" placeholder="Ciudad" onChange={this.handleChange} />
									      	</FormGroup>
										</Col>
										<Col sm="3" md="3" lg="3">
											<FormGroup>
									        	<Button className="form-control" theme="success" onClick={this.onSend}>Buscar</Button>
									      	</FormGroup>
										</Col>
										</Row>
									</Form>
									<Row>
										<Col sm="12" md="12" lg="12">
											{ this.state.temp.map(number =>
                          <h6>Temperatura actual {this.state.temp.temp}°C</h6>
                        )
                      }
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
