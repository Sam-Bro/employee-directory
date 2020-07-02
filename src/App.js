import React, { useState, useRef, useEffect } from "react";
import EmployeeList from "./EmployeeList";
import { v4 as uuidv4 } from "uuid";
//import Employee from "./Employee";

const LOCAL_STORAGE_KEY = "employeeApp.employee";

function App() {
  const [employees, setEmployees] = useState([
    // { id: uuidv4(), name: "Jack Harper", position: "front end dev" },
    // { id: uuidv4(), name: "Cindy Smith", position: "back end dev" },
  ]);
  const employeeNameRef = useRef();

  //store to local
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedEmployees) setEmployees(storedEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);

  function toggleEmployee(id) {
    const newEmployees = [...employees];
    const employee = newEmployees.find((employee) => employee.id === id);
    employee.select = !employee.select;
    setEmployees(newEmployees);
  }

  function handleAddEmployee(e) {
    const name = employeeNameRef.current.value;
    if (name === " ") return;
    setEmployees((prevEmployees) => {
      return [...prevEmployees, { id: uuidv4(), name: name }];
    });
    console.log(name);
    employeeNameRef.current.value = null;
  }

  function handleClearEmployee() {
    const newEmployees = employees.filter((employee) => !employee.select);
    setEmployees(newEmployees);
  }

  return (
    <>
      <EmployeeList employees={employees} toggleEmployee={toggleEmployee} />
      <input ref={employeeNameRef} type="text" />
      <button onClick={handleAddEmployee}>Add Employee</button>
      <button onClick={handleClearEmployee}>clear</button>
      <section>
        {employees.filter((employee) => !employee.complete).length} employees
      </section>
    </>
  );
}

export default App;
