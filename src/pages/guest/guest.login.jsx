import React from 'react'
import { Typography, Button, Box, TextField } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const submitForm = (event) => {
    event.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const guest = { username, password }
    // const navigate = useNavigate()

    fetch('https://proj19940827.herokuapp.com/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(guest)
    })
        .then(res => res.json())
        .then(json => {
            alert(json.message)
            // const { session } = json


            // for (const [key, value] of Object.entries(session)) {
            //     Cookies.set(key, value, { expires: 3 }, { domain: 'http://localhost:8080' })
            // }

        })
        .catch(err => console.log(err))

}

const forgotPassword = () => {
    alert('Please contact admin to reset your password...')
}

const GuestLogin = () => {
    return (
        <>
            <Box sx={{ my: '100px', mx: '20px' }} style={{ background: "rgb(255,255,255)" }}>
                <form onSubmit={submitForm} style={{ background: "rgb(121,6,4)", padding: '5px', borderRadius: '10px' }}>
                    <Typography sx={{ m: '10px' }} variant='h4' style={{ color: "rgb(255,255,286)", textAlign: "center" }}>
                        <strong>Login</strong>
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        m: '10px'
                    }}>
                        <TextField
                            type="text"
                            name="username"
                            id='username'
                            className="form-control"
                            placeholder="Username"
                            label='Username'
                            variant='outlined' />
                        <TextField
                            type="password"
                            name="password"
                            id='password'
                            className="form-control"
                            placeholder="Password"
                            label='Password'
                            variant='outlined' />
                        <Button
                            sx={{ display: 'block', width: '100px', mt: '30px' }}
                            type="submit"
                            style={{
                                background: "rgb(50,53,101)",
                                border: "1px solid rgb(255,255,255)",
                                color: "rgb(255,255,255)"
                            }}
                        >Log In</Button>
                    </Box>
                    <Typography
                        sx={{ m: '10px' }}
                        align='center'
                        style={{ color: "rgb(255,255,255)" }}
                        onClick={forgotPassword}>Forgot your email or password?</Typography>
                </form>
            </Box>
        </>
    )
}

export default GuestLogin