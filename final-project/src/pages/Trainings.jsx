import { AgGridReact } from 'ag-grid-react'; 
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

import { GetResponse } from "../components/GetResponse"
import { DeleteCustomers } from "../components/DeleteResponse"

export const Trainings = ()=>{
    const [trainingsState,setTrainingsState]=useState()
    console.log(trainingsState)
    const [colDefs] = useState([
        { field: "date", filter: true },
        { field: "duration", filter: true },
        { field: "activity", filter: true },
        { field: "customer", filter: true },
        {
            cellRenderer: (params) => (
            <Button
                size="small"
                color="error"
                onClick={() => deleteCustomers(params.data._links.training.href)}
            >
                Delete
            </Button>
            ),
            width: 150,
        },
        ]);
        useEffect(() => {
        fetchTrainings(import.meta.env.VITE_API_URL_TRANINGS);
        }, []);
        const fetchTrainings =(URL_FETCH)=>{
        GetResponse(URL_FETCH) 
        .then((data) => addField(data._embedded.trainings)

        )
        .catch((err) => console.error(err))
        }
        const addField = (arr)=>{
            const  copyArr = [...arr];
            copyArr.map((el) => {
                fetchNamesCustomers(el._links.customer.href,el);
                setTrainingsState(copyArr)
            });
            }
        const fetchNamesCustomers =(URL_FETCH,el)=>{
        GetResponse(URL_FETCH) 
        .then((data) => {
                el["customer"] = data.firstname;
                return el;
            })
        .catch((err) => console.error(err))
        }
        const deleteCustomers= (url)=>{
            DeleteCustomers(url)
            .then(() => fetchTrainings(import.meta.env.VITE_API_URL_TRANINGS))
            .catch(err => console.error(err))
          }
                return(         
                        <div 
                        className="ag-theme-quartz" 
                        style={{ height: 500 }}
                        >
                        <AgGridReact
                        rowData={trainingsState}
                        columnDefs={colDefs}
                        />
                        </div>
                    )
}