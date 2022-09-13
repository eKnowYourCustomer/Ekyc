import Base from '../components/Base';
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-balham.css'; // Optional theme CSS

const About = () => {

 const gridRef = useRef(); // Optional - for accessing Grid's API
 
 // Each Column Definition results in one Column.
 const [columnDefs, setColumnDefs] = useState([
      {headerName: 'Make', field: 'make', sortable: true, filter: true, checkboxSelection: true, rowGroup: false},
      {headerName: 'Model', field: 'model', sortable: true, filter: true},
      {headerName: 'Price', field: 'price', sortable: true, filter: true}
    ]);

// Set rowData to Array of Objects, one Object per Row
 const [rowData, setRowData] = useState([
      {make: 'Toyota', model: 'Celica', price: 35000},
      {make: 'Ford', model: 'Mondeo', price: 32000},
      {make: 'Porsche', model: 'Boxter', price: 72000},
      {make: 'BMW', model: 'i3', price: 42400},
      {make: 'BMW', model: 'X5 XDrive40e', price: 62100},
      {make: 'Chevy', model: 'Bolt', price: 37495},
      {make: 'Chevy', model: 'Volt', price: 33220},
      {make: 'Fiat', model: '500e', price: 31800},
      {make: 'Ford', model: 'C-Max Energi', price: 37495},      
      {make: 'Ford', model: 'Fusion Energi', price: 31120},
      {make: 'Ford', model: 'Focus Electric', price: 29120},
      {make: 'Mercedez Benz', model: 'B-class', price: 39900},
      {make: 'Nissan', model: 'LEAF', price: 30680},
      {make: 'Tesla', model: 'Model S', price: 68000},
      {make: 'Tesla', model: 'Model X', price: 74000},
      {make: 'Toyota', model: 'Prius Prime', price: 2784},
      {make: 'Volkswagen', model: 'e-Golf', price: 28995}
    ]);


 // DefaultColDef sets props common to all Columns
 const defaultColDef = useMemo( ()=> ({
     sortable: true
   }));

 // Example of consuming Grid Event
 const cellClickedListener = useCallback( event => {
   console.log('cellClicked', event);
 }, []);

 // Example load data from sever
 /*useEffect(() => {
   fetch('https://www.ag-grid.com/example-assets/row-data.json')
   .then(result => result.json())
   .then(rowData => setRowData(rowData))
 }, []);*/

 // Example using Grid's API
 const buttonListener = useCallback( e => {
   gridRef.current.api.deselectAll();
 }, []);

 return (
   <div>



     {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
     <div className='ag-theme-balham' style={{width: 500, height: 500, alignItems: "center"}}>
     {/* Example using Grid's API */}
     <button onClick={buttonListener}>Deselect All</button>
       <AgGridReact
           //ref={gridRef} // Ref for accessing Grid's API

           rowData={rowData} // Row Data for Rows

           columnDefs={columnDefs} // Column Defs for Columns
           //defaultColDef={defaultColDef} // Default Column Properties

           animateRows={true} // Optional - set to 'true' to have rows animate when sorted
           rowSelection='multiple' // Options - allows click selection of rows
           onGridReady={params => this.gridApi = params.api}
           //onCellClicked={cellClickedListener} // Optional - registering for Grid Event
           />
     </div>
   </div>
 );
};

export default About;