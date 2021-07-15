import { useState } from "react";
import { makeAPostRequest } from "../commons/network";
import {UPDATE_OR_CREATE_EMPLOYEE} from '../constants';
import {store} from '../flux/store';

function AddEmployee(){
    let [empl, setEmpl]=useState({});
    function updateEmployee(prop_name, prop_value){
        let emp={...empl};
        emp[prop_name]=prop_value;
        setEmpl(emp);
    }
    function saveEmployee(e){
        e.preventDefault();
        makeAPostRequest(UPDATE_OR_CREATE_EMPLOYEE, empl)
            .then((res)=>{
                console.log(res);
                store.dispatch({ type: 'addEmployee', employee:  empl});
            })
            .catch(err=>console.log(err));
        setEmpl({});
    }
    return <div className="col-md-10 container m-2">
        <h4>Add Employee </h4>
        <form >
            <input className="form form-control m-1" placeholder="Name" onChange={(v)=>{
                updateEmployee('name',v.currentTarget.value) 
                }}
                value= {empl && empl.name? empl.name: ''}
                />
            <input className="form form-control m-1" placeholder="Department" onChange={(v)=>{
                updateEmployee('department',v.currentTarget.value)}}
                value= {empl && empl.department? empl.department: ''}
                />
            <button className="btn btn-success" onClick={saveEmployee}> Save </button>
        </form>
    </div>;
}
export default AddEmployee;