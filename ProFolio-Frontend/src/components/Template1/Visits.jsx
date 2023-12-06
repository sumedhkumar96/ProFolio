import React, { Component } from "react";

class Visits extends Component {
  constructor(props) {
    super(props);

    // Check if visit count is stored in local storage
    const storedCount = localStorage.getItem("visitCount");
    const initialCount = storedCount ? parseInt(storedCount, 10) : 0;

    this.state = {
      count: initialCount,
      dataIsLoaded: true, // No need to fetch data on each refresh
    };
  }

  componentDidMount() {
    // Update the visit count in local storage and state
    const { count } = this.state;
    const newCount = count + 1;
    
    localStorage.setItem("visitCount", newCount);
    
    this.setState({
      count: newCount,
    });
  }

  render() {
    const { dataIsLoaded, count } = this.state;

    if (!dataIsLoaded) {
      return (
        <div>
          <h1>Please wait some time....</h1>
        </div>
      );
    }

    return (
      <div className="count center">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p style={{ fontSize: 20, margin: 0 }}>This page was viewed</p>
        <p style={{ fontSize: 40, margin: 0 }}>{count}</p>
        <p style={{ fontSize: 20, margin: 0 }}>Times</p>
      </div>
    );
  }
}

export default Visits;
