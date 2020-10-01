import '@grapecity/wijmo.styles/wijmo.css';
import React, { useState } from 'react';
import '@grapecity/wijmo.react.grid';
import { FlexGrid, FlexGridColumn } from '@grapecity/wijmo.react.grid';
import { recentSales } from "../data/data";

export const Dashboard = () => {

  const[sales, setSales] = new useState(recentSales);

  return (<div className="container-fluid">

  <FlexGrid itemsSource={sales}>
    <FlexGridColumn width={50} binding='id' header="ID" />
    <FlexGridColumn width={200} binding='client' header="Client" />
    <FlexGridColumn width={320} binding='description' header="Description" />
    <FlexGridColumn width={100} binding='value' header="Value"/>
    <FlexGridColumn width={100} binding='itemCount' header="Quantity" />
    <FlexGridColumn width={100} binding='soldBy' header="Sold By" />
    <FlexGridColumn width={100} binding='country' header="Country" />
  </FlexGrid>
</div>);
}

