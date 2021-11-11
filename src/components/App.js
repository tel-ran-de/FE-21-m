import React from 'react';
import {cats} from '../data/cats';
import {cars} from '../data/cars';
import Table from "./Table";
import FormComponent from "./FormComponent";

function App() {
  return (
    <div className="container">
        <FormComponent />
        <Table
            className="table table-striped table-bordered"
            columns={[{name: 'Cat name'}, {age: 'Cat age'}, {color: 'Cat color'}]}
            array={cats}
        />
        <hr/>
        <Table
            className="table table-striped table-bordered"
            columns={[{manufacture: 'Завод'}, {model: "Марка"}, {color: "Цвет"}, {price: "Цена"}]}
            array={cars}
        />
      {/*<table>*/}
      {/*    <thead>*/}
      {/*    <tr>*/}
      {/*        <th>#</th>*/}
      {/*        <th>Name</th>*/}
      {/*        <th>Age</th>*/}
      {/*        <th>Color</th>*/}
      {/*    </tr>*/}
      {/*    </thead>*/}
      {/*    <tbody>*/}
      {/*    { cats.map((cat, index) => (*/}
      {/*        <tr key={index}>*/}
      {/*            <td>{index + 1}</td>*/}
      {/*            <td>{cat.name}</td>*/}
      {/*            <td>{cat.age}</td>*/}
      {/*            <td>{cat.color}</td>*/}
      {/*        </tr>*/}
      {/*    )) }*/}
      {/*    </tbody>*/}
      {/*</table>*/}
    </div>
  );
}

export default App;