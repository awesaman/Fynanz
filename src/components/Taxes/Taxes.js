import React, { Component } from "react";
import axios from "axios";
import data from "../../data/Taxes/Taxes.json";
import nestedBullets from "../../utils/nestedBullets";

class Taxes extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/5f0ca29ddd9bebe4fb5c5c62")
  //     .then((response) => {
  //       this.setState({ data: response.data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div className="main-body">
        {/* <h1>{this.state.data.header}</h1> */}
        <h1>{data.header}</h1>
        <h3>{data.subtopics[0].subheading}</h3>
        <ul>{data.subtopics[0].list.map((s) => nestedBullets(s))}</ul>
        <h3>{data.subtopics[1].subheading}</h3>
        <ul>{data.subtopics[1].list.map((s) => nestedBullets(s))}</ul>
        <h3>{data.subtopics[2].subheading}</h3>
        <ul>{data.subtopics[2].list.map((s) => nestedBullets(s))}</ul>
      </div>
    );
  }
}

export default Taxes;
