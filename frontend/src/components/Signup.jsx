import { AddModeratorSharp } from '@mui/icons-material'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {
    var [inputs,setinputs]= useState({})
    var navigate=useNavigate()
    const inputhandler =(e)=>{
        console.log(e.target.value)
        setinputs({...inputs,[e.target.name]:e.target.value})
        console.log(inputs)
    }
    const addData =()=>{
        axios.post("http://localhost:3000/api",inputs)
        .then((res)=>{console.log(res)
            alert(res.data.message)
            navigate('/')
        })
        .catch((err)=>{console.log(err)})
    }
  return (
    <div>
        <Container maxWidth='sm'></Container>
        <Box sx={{
            padding:4,
            backgroundColor:'white',
            borderRadius:2,
            marginTop:15,
            boxShadow:1,
            textAlign:'center'
        }} >
       <Typography variant='h4' gutterBottom color='primary'>Welcome to productApp</Typography>
       <form>
        <TextField fullWidth
        label='Fullname'
        margin='normal'
        color='secondary'
        name='fullname'
        onChange={inputhandler}>

        </TextField>
            <TextField fullWidth
        label='username'
        margin='normal'
        color='secondary'
        name='username'
        onChange={inputhandler}>

        </TextField>
        <TextField fullWidth
        label='password'
        margin='normal'
        name='password'
        onChange={inputhandler}>

        </TextField>


        
        <Button variant='contained' color='secondary' fullWidth
         onClick={addData}> Sign up</Button>

       </form><br /><br />
       <p>
        <Link to={'/'}>already have an account</Link>  
       </p>
       </Box>
    </div>
  )
}

export default Signup
