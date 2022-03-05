import React from "react";
import { Table } from "reactstrap";
import priceFormat from "components/Utils/priceFormat";
// core components

const Tables = ({ tableData, editData, deleteData }) => {
  const renderTable = () => {
    return (
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            {Object.keys(tableData[0]).map((list, i) => {
              return (
                <th scope="col" key={i}>
                  {list}
                </th>
              );
            })}
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((keysItems, keyI) => {
            return (
              <tr key={keyI}>
                {Object.keys(keysItems).map((list, i) => {
                  if (list === "price") {
                    return (
                      <td key={i}>&#8377;{priceFormat(keysItems[list])}</td>
                    );
                  } else {
                    return <td key={i}>{keysItems[list]}</td>;
                  }
                })}
                <td>
                  <span
                    onClick={() => editData(keysItems, keysItems.id)}
                    className="cursor-pointer mr-3"
                  >
                    <i className="fas fa-pen" />
                  </span>
                  <span
                    onClick={() => deleteData(keysItems.id)}
                    className="cursor-pointer"
                  >
                    <i className="fas fa-trash" />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };
  return <>{renderTable()}</>;
};

export default Tables;
