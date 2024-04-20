import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

import { GetResponse } from "../components/GetResponse";
import { PostResponse } from '../components/PostResponse';
import { AddCustomers } from './AddCustomers';
import { DeleteCustomers } from '../components/DeleteResponse';
import { EditCustomers } from './EditCustomers';
import { UpdateCustomers } from '../components/UpdateResponse';
import { AddTrainings } from './AddTrainings';
// import { DeleteCustomers } from '../components/deleteResponse';
export const Customers = ()=>{
  const [customersState,setCustomersState]=useState([])
  const [colDefs] = useState([
    { field: "city", filter: true },
    { field: "email", filter: true },
    { field: "lastname", filter: true },
    { field: "firstname", filter: true, width: 100 },
    { field: "phone", filter: true, width: 100 },
    { field: "postcode", filter: true },
    { field: "streetaddress", filter: true },

    {
      cellRenderer: (params) => (
        <AddTrainings data={params.data._links.customer.href} addTrainings={addTrainings} />
      ),
      width: 120,
    },
    {
      cellRenderer: (params) => (
        <EditCustomers data={params.data} updateCustomers={updateCustomers} />
      ),
      width: 120,
    },
    {
      cellRenderer: (params) => (
        <Button
          size="small"
          color="error"
          onClick={() => deleteCustomers(params.data._links.customer.href)}
        >
          Delete
        </Button>
      ),
      width: 150,
    },
  ]);

  useEffect(() => {
    fetchCustomers(import.meta.env.VITE_API_URL);
  }, []);

  const fetchCustomers =(URL_FETCH)=>{
    GetResponse(URL_FETCH) 
    .then((data) =>setCustomersState(data._embedded.customers) || console.log(data._embedded.customers))
    .catch((err) => console.error(err))
  }
  const addCustomers = (customers)=>{
    PostResponse(import.meta.env.VITE_API_URL,customers)
    .then(() => fetchCustomers(import.meta.env.VITE_API_URL))
    .catch(err => console.error(err))
  }
  const addTrainings = (trainings)=>{
    PostResponse(import.meta.env.VITE_API_URL_TRANINGS,trainings)
    .catch(err => console.error(err))
  }
  const deleteCustomers= (url)=>{
    DeleteCustomers(url)
    .then(() => fetchCustomers(import.meta.env.VITE_API_URL))
    .catch(err => console.error(err))
  }
  const updateCustomers=(url,customers)=>{
    UpdateCustomers(url,customers)
    .then(() => fetchCustomers(import.meta.env.VITE_API_URL))
    .catch(err => console.error(err))
  }
return(
  <>
  <AddCustomers addCustomers ={addCustomers}/>
  <div 
  className="ag-theme-quartz" 
  style={{ height: 500 }}
  >
  <AgGridReact
      rowData={customersState}
      columnDefs={colDefs}
  />
  </div>
  </>
)
}