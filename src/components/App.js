import React from 'react';
import User from "./User";
import Box from './Box';
import Color from "./Color";
import Product from "./Product";

const names = ['Jade', 'John', 'Bob'];
const colors = ['red', 'green', 'blue'];
const products = [{id:1, name: 'Apple', price: 3}, {id:2, name: 'Orange', price: 2}];

function App() {

  return (
    <div>
      <User name="Ivan" />
      <User name="Marya" />
      <User name="Petr" />
      <User name="Serge" />
        { names.map( name => <User key={name} name={name} /> ) }
        <Box />
        <Color />
        { colors.map( color => <Color key={color} color={color} />) }


        <Product product={products[0]}>
            <div style={{height: '3px', backgroundColor: "red"}} />
        </Product>

        <Product product={products[1]}>
            <div style={{height: '3px', backgroundColor: "orange"}} />
        </Product>

    </div>
  );
}

export default App;