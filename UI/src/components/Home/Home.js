import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/NavbarElements';
import Body from '../Body/Body'

export default class UserDetails extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:4060/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {

    return (
      <>
        <Navbar />
        <Body/>
      </>
    );
  }
}