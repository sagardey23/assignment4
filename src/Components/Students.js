import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import {  NavLink,  } from 'react-router-dom'
import './styling.css'


function createData(name, age, course, batch, change) {
  return { name, age, course, batch, change };
}

const rows = [
  createData('Jane Smith', 24,'MERN','Sept', 'Edit'),
  createData('Phil Jones', 24,'MERN','Sept', 'Edit'),
  createData('John Roberts', 24,'MERN','Sept', 'Edit'),
  createData('Nelson Jones', 24,'MERN','Sept', 'Edit'),
  createData('Peter Siddle', 24,'MERN','Sept', 'Edit'),
  createData('Stuart Parker', 24,'MERN','Sept', 'Edit'),


];

 function Students() {
  return (
    <>
    <div className='studentspage'>
      <h1 > Students Details:</h1>
      <button className='addstubtn'>Add Student</button>
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.batch}</TableCell>
              <TableCell align="right">{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
export default Students
// import React, { Component } from 'react'

// class Students extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Students</h1>
//             </div>
//         )
//     }
// } 
// export default  Students