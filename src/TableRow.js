import React, { Component } from "react";

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.name}</td>
      </tr>
    );
  }
}

export default TableRow;
