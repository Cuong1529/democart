import React, { Component } from "react";
import TableRow from './TableRow'

const initStocks = [
  {
    id: 1,
    name: "tcs1",
  },
  {
    id: 2,
    name: "tcs2",
  },
  {
    id: 3,
    name: "tcs3",
  },
  {
    id: 4,
    name: "tcs4",
  },
];

export default class StockList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   stocks: initStocks,
    // };
  }
  render() {
    return <div>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                </tr>
            </thead>
            <tbody>
                {this.props.data.map((stock, index) => (
                    <TableRow item={stock} key={index}/>
                ))}
            </tbody>
        </table>
    </div>;
  }
}
