import axios from "axios";
import React, { Component } from "react";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.getTodos = this.getTodos.bind(this);
  }

  async getTodos() {
    let data = await axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(data.data);
    this.setState({ todos: data.data });
  }

  componentDidMount() {
    //get api

    this.getTodos();
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h3>Get data</h3>
        <hr />
        {todos &&
          todos.map((todo) => {
            return (
              <table key={todo.id}>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>{todo.id}</td>
                    <td>
                      <p key={todo.id}>{todo.title}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
      </div>
    );
  }
}

export default Todos;
