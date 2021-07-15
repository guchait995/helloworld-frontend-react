import {makeAGetRequest} from '../commons/network';
import {EMPLOYEE_URL} from '../constants';
import { useState} from 'react';
import AddEmployee from './AddEmployee';
import Employee from './Employee';
function EmployeeList(){
    let [employeeList, setEmployeeList]=new useState([]);
    
    async function fetchAllEmp(){
        let url=`${EMPLOYEE_URL}`;
        if(employeeList && employeeList.length > 0){
            setEmployeeList([]);
        }else{
            let res=await makeAGetRequest(url);
            setEmployeeList([...res.data]);
        }
        
    }
    return (
        <div className="row p-3">
            <h1>Hello World!! </h1>
            <div className="col-md-6"> 
                {/* <AddEmployee/> */}
                {/* <button className="btn btn-warning" onClick={()=>fetchAllEmp()}>{employeeList && employeeList.length ? 'HIDE ':'VIEW ALL'} LIST</button> */}
            </div>
            {/* <div className="col-md-6"> 
                {employeeList.map((emp, index)=> <Employee {... emp} key={index}/>)}
            </div> */}
            
            
        </div>
    );
}



export default EmployeeList;
