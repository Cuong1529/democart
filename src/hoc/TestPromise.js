import React, { Component } from "react";

class TestPromise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    var promise = new Promise((resolve, reject) => {
      let name = "name";

      if (name === "name") {
        resolve("Promise resolved successfully");
      } else {
        reject(Error("Promise rejected"));
      }
    });

    promise.then(
      (result) => {
          console.log(result)
        this.setState({ name: result });
      },
      function (error) {
        this.setState({ name: error });
      }
    );
  }

  render() {
    return <div>
        <h1>Test promise</h1>
        <h2>{this.state.name}</h2>
    </div>;
  }
}

export default TestPromise;
