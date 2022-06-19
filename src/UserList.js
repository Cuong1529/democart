import React, { Component } from "react";
import TableRow from "./TableRow";

const initUsers = [
  {
    id: 1,
    name: "brucelee1",
  },
  {
    id: 2,
    name: "brucelee2",
  },
  {
    id: 3,
    name: "brucelee3",
  },
  {
    id: 4,
    name: "brucelee4",
  },
];
export default class UserList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   users: initUsers,
    // };
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((user, index) => (
              <TableRow item={user} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
