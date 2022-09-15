import Base from '../components/Base';
import React, { useState, useRef, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const ATMLocator = () => {

  const gridRef = useRef(null);
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  
// Set rowData to Array of Objects, one Object per Row
 const [rowData, setRowData] = useState();

 // Each Column Definition results in one Column.
 const [columnDefs, setColumnDefs] = useState([
      {headerName: 'County', field: 'county', sortable: true, filter: true, minWidth: 80, checkboxSelection: true, rowGroup: false},
      {
        groupId: 'StateAndCity',
        headerName: 'State & City',
        children: [
          { field: 'state' },
          { field: 'city', minWidth: 180, suppressFiltersToolPanel: true },
        ],
      },
      //{headerName: 'State', field: 'state', sortable: true, filter: true},
      //{headerName: 'City', field: 'city', sortable: true, filter: true},
      {headerName: 'ZipCode', field: 'zip_code', sortable: true, filter: true},
      {headerName: 'Latitude', field: 'latitude', sortable: true, filter: true},
      {headerName: 'Longitude', field: 'longitude', sortable: true, filter: true}
    ]);


const onGridReady = useCallback((params) => {
  fetch('https://raw.githubusercontent.com/millbj92/US-Zip-Codes-JSON/master/USCities.json')
    .then((resp) => resp.json())
    .then((data) => setRowData(data));
}, []);

const sideBar = useMemo(() => {
  return {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
      }
    ],
    defaultToolPanel: 'customStats',
  };
}, []);

const onBtShowLoading = useCallback(() => {
  gridRef.current.api.showLoadingOverlay();
}, []);

const onBtShowNoRows = useCallback(() => {
  gridRef.current.api.showNoRowsOverlay();
}, []);

const onBtHide = useCallback(() => {
  gridRef.current.api.hideOverlay();
}, []);

 // DefaultColDef sets props common to all Columns
 const defaultColDef = useMemo(() => {
  return {
    editable: true,
    sortable: true,
    filter: true,
    resizable: true,
  };
}, []);

 // Example of consuming Grid Event
 const cellClickedListener = useCallback( event => {
   console.log('cellClicked', event);
 }, []);

 // Example using Grid's API
 const buttonListener = useCallback( e => {
   gridRef.current.api.deselectAll();
 }, []);

 return (
   <div>
     {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
     <div className='ag-theme-alpine' style={{width: 1000, height: 600, alignItems: "center"}}>
     {/* Example using Grid's API */}
     <button onClick={onBtShowLoading}>Show Loading Overlay</button>
     <button onClick={onBtShowNoRows}>Show No Rows Overlay</button>
     <button onClick={onBtHide}>Hide Overlay</button>
     <button onClick={buttonListener}>Deselect All</button>
       <AgGridReact
           ref={gridRef}
           rowData={rowData} // Row Data for Rows
           columnDefs={columnDefs} // Column Defs for Columns
           defaultColDef={defaultColDef}
           overlayLoadingTemplate={
            '<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>'
          }
          overlayNoRowsTemplate={
            '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow">This is a custom \'no rows\' overlay</span>'
          }
           sideBar={sideBar}
           animateRows={true} // Optional - set to 'true' to have rows animate when sorted
           rowSelection='multiple' // Options - allows click selection of rows
           onGridReady={onGridReady}
        />
     </div>
   </div>
 );
};

export default ATMLocator;