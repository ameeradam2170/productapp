import React from 'react'
import {Box, Button, Container, TextField, Typography} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
       const baseURl = import.meta.env.VITE_API_BASE_URL

    var [user,setUser] =useState({});
    var navigate = useNavigate()
    const inputHandler = (e)=>{
        // console.log(e.target.value)
        setUser({...user,[e.target.name]:e.target.value})
        console.log(user)
    }

    const addUser = ()=>{
        axios
            .post(`${baseURl}/api/login`,user)
            .then((res)=>{
                console.log(res)
                sessionStorage.setItem("role",res.data.user.role)
                alert(res.data.message)
                navigate('/p')
            })
            .catch((err)=>{console.log(err)})
    }
  return (
    <div>
     <Container maxWidth='sm'>
         <Box
          sx={{
            padding:4,
            backgroundColor:'white',
            borderRadius:2,
            marginTop:14,
            boxShadow:3,
            textAlign:'center',
        }}
      >
        <Typography variant='h4' 
        color='purple' align='centre' gutterBottom>
            Welcome to Product App
        </Typography>
        <TextField 
            variant='outlined'
            label='username'
            margin='normal'
            fullWidth
            name='username'
            onChange={inputHandler}
        />
         <TextField 
            variant='outlined'
            label='password'
            margin='normal'
            fullWidth
            type='password'
            name='password'
            onChange={inputHandler}
        />
        <Button
            variant='contained'
            color='secondary'
            fullWidth
            sx={{mt:2}}
            onClick={addUser}
        >
            Login
        </Button>
<br /><br />
        <Button>
            <Link to={'/s'} >Create a new account</Link>
        </Button>
            
       
      </Box>
     </Container>
    </div>
  )
}

export default Login


