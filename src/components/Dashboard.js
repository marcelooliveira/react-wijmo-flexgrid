import '@grapecity/wijmo.styles/wijmo.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@grapecity/wijmo.react.grid';
import React, { useState } from 'react';
import { FlexGrid, FlexGridColumn } from '@grapecity/wijmo.react.grid';
import * as wjcGridXlsx from "@grapecity/wijmo.grid.xlsx";
import { recentSales } from "../data/data";

export const Dashboard = () => {

  const [sales, setSales] = new useState(recentSales);
  const [flexGrid, setFlexGrid] = useState({});
  const [includeColumnHeaders, setIncludeColumnHeaders] = useState(true);

  var initializeFlexGrid = (flexGrid) => {
      setFlexGrid(flexGrid);
  }

  var load = () => {
    let fileInput = document.getElementById("importFile");
    if (fileInput.files[0]) {
        wjcGridXlsx.FlexGridXlsxConverter.loadAsync(flexGrid, fileInput.files[0], { includeColumnHeaders: includeColumnHeaders });
    }
  }

  return (
      <div className="card main-panel">
        <div className="card-header">
          <img className="grapecity-logo" src="logo.svg"/>
        </div>
        <div className="card-body">
          <h5 className="card-title">Wijmo FlexGrid Demo</h5>
          <p className="card-text">Building a Smart Data Table in React</p>
          
          <div className="container-fluid">
            <div className="row">
              <FlexGrid itemsSource={sales} initialized={initializeFlexGrid}>
                <FlexGridColumn width={50} binding='id' header="ID" />
                <FlexGridColumn width={200} binding='client' header="Client" />
                <FlexGridColumn width={320} binding='description' header="Description" />
                <FlexGridColumn width={100} binding='value' header="Value"/>
                <FlexGridColumn width={100} binding='itemCount' header="Quantity" />
                <FlexGridColumn width={100} binding='soldBy' header="Sold By" />
                <FlexGridColumn width={100} binding='country' header="Country" />
              </FlexGrid>
            </div>
          </div>

        </div>
        <div className="card-footer">
              <div className="row">
                <div className="col-md-6 col-xs-12">
                    <div className="form-inline well well-lg">          
                          <div className="form-inline well well-lg">
                              <input type="file" className="form-control" style={{ width: '250px' }} id="importFile" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel.sheet.macroEnabled.12"/>
                              <input type="button" onClick={load} className="btn btn-default" value="Import"/>
                              <div className="checkbox">
                                  <label>
                                      <input value={includeColumnHeaders} type="checkbox"/> Include Column Header
                                  </label>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
        </div>
      </div>
          );
}

