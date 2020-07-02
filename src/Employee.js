import React from "react";

export default function Employee({ employee, toggleEmployee }) {
  function handleEmployeeClick() {
    toggleEmployee(employee.id);
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={employee.select}
          onChange={handleEmployeeClick}
        />
        {employee.name}
      </label>
    </div>
  );
}
