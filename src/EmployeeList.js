import React from 'react'
import Employee from './Employee'

export default function EmployeeList({employees, toggleEmployee}) {
    return (
        employees.map( employee =>  {
            return <Employee key={employee.id} toggleEmployee={toggleEmployee} employee={employee}/>
        })
    )
}
