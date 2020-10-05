import React, { useState } from 'react';
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
// import DraggableContainer from "react-data-grid-addons";
import { recentSales } from "../data/data";
const {
  DraggableHeader: { DraggableContainer }
} = require("react-data-grid-addons");

export const OpenSourceTableDemo = () => {

  const [columns, setColumns] = new useState([
    { key: "id", name: "Id", editable: true, sortable: true, resizable: true, draggable: true },
    { key: "country", name: "Country", editable: true, sortable: true, resizable: true, draggable: true },
    { key: "soldBy", name: "Sold by", editable: true, sortable: true, resizable: true, draggable: true },
    { key: "client", name: "Client", editable: true, sortable: true, resizable: true, draggable: true },
    { key: "description", name: "Description", editable: true, sortable: true, resizable: true, draggable: true },
    { key: "value", name: "Value", editable: true, sortable: true, resizable: true, draggable: true },
    { key: "itemCount", name: "Item Count", editable: true, sortable: true, resizable: true, draggable: true }
  ]);

  const [sales, setSales] = new useState(recentSales);

  const onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    const s = sales.slice();
    for (let i = fromRow; i <= toRow; i++) {
      s[i] = { ...s[i], ...updated };
    }
    setSales(s);
  };

  const sortRows = (initialRows, sortColumn, sortDirection) => rows => {
    const comparer = (a, b) => {
      if (sortDirection === "ASC") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else if (sortDirection === "DESC") {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    };
    return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
  };

  const onHeaderDrop = (source, target) => {
    var columnsCopy = columns.slice();
    const columnSourceIndex = columns.findIndex(
      i => i.key === source
    );
    const columnTargetIndex = columns.findIndex(
      i => i.key === target
    );

    columnsCopy.splice(
      columnTargetIndex,
      0,
      columnsCopy.splice(columnSourceIndex, 1)[0]
    );

    setColumns(columnsCopy.splice());
    setColumns(columnsCopy);
  };

  const load = () => {

  }

  const save = () => {

  }



  return (
    <div className="card main-panel">
    <div className="card-header">
      <h1>Open Source</h1>
    </div>
    <div className="card-body">
    <h5>React Data Grid Demo</h5>
      <p>
        Building a Smart Data Table in React with React Data Grid
      </p>          
      <div className="container-fluid">
        <div className="row">
          <DraggableContainer onHeaderDrop={onHeaderDrop}>
            <ReactDataGrid
                columns={columns}
                rowGetter={i => sales[i]}
                rowsCount={recentSales.length}
                onGridRowsUpdated={onGridRowsUpdated}
                enableCellSelect={true}
                onGridSort={(sortColumn, sortDirection) =>
                  setSales(sortRows(sales, sortColumn, sortDirection))
                }
              />
          </DraggableContainer>
        </div>
      </div>

    </div>
    <div className="card-footer">
          
      <div className="input-group">
        <div className="custom-file">
          <label className="custom-file-label" htmlFor="importFile" aria-describedby="inputGroupFileAddon02">Choose file</label>
          <input type="file" className="custom-file-input" id="importFile"/>
        </div>
        <div className="input-group-prepend">
          <input type="button" onClick={load} className="input-group-text" value="Import"/>
        </div>
        <div className="input-group-append">
          <input type="button" onClick={save} className="input-group-text" value="Export"/>
        </div>
      </div>

    </div>
  </div>);
}
