import React, { Component } from "react";
import axios from "axios";
import AlertMessage from "./AlertMessage";
import { Form, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class GetDataFromUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      display: false,
      displayName: "",
      lat: "",
      lon: "",
      alertErrorMesssage: false,
      mapPicture: "",
      ArrayOfWeatharData: [],
      showdataweth: false,
      moveisArray: [],
      showMovies: false,
    };
  }
  gitCityName = (e) => {
    this.setState({
      displayName: e.target.value,
    });
  };
  handelSubmit = async (e) => {
    e.preventDefault();
    try {
      let axiosData = await axios.get(
        `https://eu1.locationiq.com/v1/search.php?key=pk.3cf913088667d99eedcfd99de144aee7&q=${this.state.displayName}&format=json`
      );
      this.setState({
        displayName: axiosData.data[0].display_name,
        lon: axiosData.data[0].lon,
        lat: axiosData.data[0].lat,
        display: true,
        alertErrorMesssage: false,
        showdataweth: true,
      });
      let axiosMap = await axios.get(
        `https://maps.locationiq.com/v3/staticmap?key=pk.3cf913088667d99eedcfd99de144aee7&q&center=${this.state.lat},${this.state.lon}&zoom=10`
      );
      this.setState({
        mapPicture: axiosMap.config.url,
        showdataweth: true,
      });
    } catch {
      this.setState({
        showdataweth: false,
        alertErrorMesssage: true,
      });
    }

    try {
      let axiosWeather = await axios.get(
        `http://localhost:8000/weather?key=pk.3cf913088667d99eedcfd99de144aee7&lat=${this.state.lat}&lon=${this.state.lon}`
      );
      this.setState({
        ArrayOfWeatharData: axiosWeather.data,
        showdataweth: false,
      });
    } catch {
      this.setState({
        showdataweth: false,
      });
    }
    try {
      let getMovies = await axios.get(
        `http://localhost:8000/movies?api_key=d426a0a7886d250244a2f47c95c976ed&query=${this.state.displayName}`
      );
      this.setState({
        moveisArray: getMovies.results,
        showMovies: true,
      });
    } catch {
      this.setState({
        showMovies: false,
      });
    }
  };

  render() {
    return (
      <div style={{ margin: "auto" }}>
        <AlertMessage alertErrorMesssage={this.state.alertErrorMesssage} />
        <Form
          onSubmit={this.handelSubmit}
          style={{ margin: "auto", width: "30%", marginTop: "10px" }}
        >
          <Form.Group>
            <Form.Control
              size="lg"
              type="text"
              placeholder="type city name ..."
              onChange={(e) => {
                this.gitCityName(e);
              }}
            />
            <br />

            <Form.Control
              style={{ background: "Beige" }}
              type="submit"
              value="Explore!"
            />
          </Form.Group>
        </Form>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            color: "#E1DF26",
            fontFamily: "cursive",
            fontStyle: "bold",
          }}
        >
          <h4>{this.state.displayName}</h4>
          <h4>{this.state.lon}</h4>
          <h4>{this.state.lat}</h4>
          {this.state.display && (
            <div>
              <Image src={this.state.mapPicture} />
            </div>
          )}

          {this.state.showdataweth &&
            this.state.ArrayOfWeatharData.map((item, idx) => {
              return (
                <>
                  <div>
                    <h4
                      style={{
                        textAlign: "center",
                        marginTop: "50px",
                        color: "#000",
                        fontFamily: "cursive",
                        fontStyle: "bold",
                      }}
                    >
                      {item.description}
                    </h4>
                    <h4
                      style={{
                        textAlign: "center",
                        marginTop: "50px",
                        color: "#000",
                        fontFamily: "cursive",
                        fontStyle: "bold",
                      }}
                    >
                      {item.valid_date}
                    </h4>
                  </div>
                </>
              );
            })}
          {this.state.showMovies &&
            this.state.moveisArray.map((item, idx) => {
              return (
                <>
                  <h4>The title of movie:{item.title}</h4>
                  <h5>Have Votes:{item.votes}</h5>
                  <img src={item.img} alt=""></img>
                </>
              );
            })}
        </div>
      </div>
    );
  }
}
export default GetDataFromUser;
