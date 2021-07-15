
import {EMPLOYEE_URL} from '../constants';
import {makeAGetRequest} from '../commons/network';
import { useState } from 'react';
function Employee(emp){
    let {id, name, department} =emp;
    let [empDetails, setEmpDetails]=useState(null);
    async function fetchEmp(id){
        if(empDetails){
            setEmpDetails(null)
        }else{
            let url=`${EMPLOYEE_URL}/${id}`;
            let res=await makeAGetRequest(url);
            console.log(res.data);
            setEmpDetails(res.data); 
        }
        
    }
    return <div>
           {id} <button className="btn btn-primary" onClick={()=>fetchEmp(id)}>{empDetails? 'HIDE ':'VIEW '}DETAILS</button>
           {empDetails ? 
           <div className="row">
                <div className="col-md-6"> {empDetails.name}</div>
                <div className="col-md-6"> {empDetails.department}</div>
           </div>
            : <div/>}
    </div>
}
export default Employee;