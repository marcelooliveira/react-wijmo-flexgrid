import React, { useState } from 'react';
import ReactDOM from "react-dom";
import ReactDataGrid from "react-data-grid";
import { recentSales } from "../data/data";

export const OpenSourceTableDemo = () => {

  const [sales, setSales] = new useState(recentSales);
  const [flexGrid, setFlexGrid] = useState({});
  const [includeColumnHeaders, setIncludeColumnHeaders] = useState(true);

  var initializeFlexGrid = (flexGrid) => {
      setFlexGrid(flexGrid);
  }

  var load = () => {

  }

  var save = () => {

  }

  const columns = [
    { key: "id", name: "Id", editable: true },
    { key: "country", name: "Country", editable: true },
    { key: "soldBy", name: "Sold by", editable: true },
    { key: "client", name: "Client", editable: true },
    { key: "description", name: "Description", editable: true },
    { key: "value", name: "Value", editable: true },
    { key: "itemCount", name: "Item Count", editable: true }
  ];

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
        <ReactDataGrid
            columns={columns}
            rowGetter={i => sales[i]}
            rowsCount={recentSales.length}
            enableCellSelect={true}
          />
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
