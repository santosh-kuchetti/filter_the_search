import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Table } from 'react-bootstrap'

import { data } from './data'

function App() {
  const [search, setSearch] = useState('')
  console.log(search)
  return (
    <div className="App">
      <Container>
        <h1 className="text-center">Contact Keeper</h1>
        <Form>
          <InputGroup className="my-3">
            <FormControl
              placeholder="Search Contacts"
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </Form>

        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          
          <tbody>
            
            {

            /* Firstly, by using filter() function we will retrieve those
            elements from an array that satisfies the given condition. As the
            filter() method will return the array with the required elements.
            Now we will apply map() method to get the specified data
            of all elements of the array returned by filter() method. */
              
              data.filter((item) => {
                // filter() method: This method returns a new array containing the elements that passes a certain test performed on an original array.
                return search.toLowerCase() === ''
                  ? item
                  : item.first_name.toLowerCase().includes(search) || item.last_name.toLowerCase().includes(search) || item.phone.includes(search) || item.email.includes(search)
              })
              .map((
                item, // map() method: This method is used to apply a function on every element in an array and returns a new array of same size as the input array.
              ) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default App
