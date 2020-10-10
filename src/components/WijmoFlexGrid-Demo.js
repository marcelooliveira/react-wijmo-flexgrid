import '@grapecity/wijmo.styles/wijmo.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@grapecity/wijmo.react.grid';
import React, { useState } from 'react';
import { FlexGrid, FlexGridColumn } from '@grapecity/wijmo.react.grid';
import * as wjcGridXlsx from "@grapecity/wijmo.grid.xlsx";
import { recentSales } from "../data/data";

export const WijmoFlexGridDemo = () => {

  const [sales, setSales] = new useState(recentSales);
  const [flexGrid, setFlexGrid] = useState({});
  
  var initializeFlexGrid = (flexGrid) => {
      setFlexGrid(flexGrid);
  }

  var load = () => {
    let fileInput = document.getElementById("importFile");
    if (fileInput.files[0]) {
		wjcGridXlsx.FlexGridXlsxConverter.loadAsync(flexGrid, fileInput.files[0], { includeColumnHeaders: true }, function (workbook) {
        flexGrid.autoSizeColumns();
     });
    }
  }

  var save = () => {
    wjcGridXlsx.FlexGridXlsxConverter.saveAsync(flexGrid, {
        includeColumnHeaders: true,
        includeCellStyles: false,
        formatItem: false
    }, "FlexGrid.xlsx");
  } 

  return (
      <div className="card main-panel">
        <div className="card-header">
            <h1>GrapeCity</h1>
        </div>
        <div className="card-body">
        <h5>Wijmo FlexGrid Demo</h5>
          <p>
            Building a Smart Data Table in React
          </p>          
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
			<div className="input-group">
				<div className="custom-file">
					<input type="file" id="importFile"/>
				</div>
				<div className="input-group-prepend">
					<input type="button" onClick={load} value="Import"/>
				</div>
				<div className="input-group-append">
				  <input type="button" onClick={save} className="input-group-text" value="Export"/>
				</div>
			</div>
		</div>

      </div>);
    }
