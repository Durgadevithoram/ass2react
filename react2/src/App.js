import React, {useState} from 'react';
import './App.css';
import Form from './ass2/Form';
import Data from './ass2/Data';

function App() {

const [employees, setEmployees] = useState([]);

const addEmployeeHandler = (employee) => {
  setEmployees([...employees, employee]);
}

  return (
    <div className="App">
      <Form  addEmployeeHandler={addEmployeeHandler}/>
      <Data employees={employees}/>
    </div>
  );
}

export default App;
