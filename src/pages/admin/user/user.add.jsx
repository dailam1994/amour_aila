import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useAddUser } from '../../../hooks/admin/user/useUser.add'

const UserAdd = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [roles, setRoles] = useState('CLIENT')

    const { mutate } = useAddUser()

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = { firstName, lastName, dateOfBirth, email, username, password, roles }
        mutate(user)
    }

    return (
        <>
            <Typography sx={{ m: '10px' }} variant='h4'>
                <strong>Create Account</strong>
            </Typography>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(50,53,101)', padding: '20px 10px', margin: '10px 30px', borderRadius: '10px' }}>
                <TextField id="firstName" sx={{ m: '10px' }} variant="outlined" name="firstName" label="First Name" onChange={(event) => setFirstName(event.target.value)} />
                <TextField id="lastName" sx={{ m: '10px' }} variant="outlined" name="lastName" label="Last Name" onChange={(event) => setLastName(event.target.value)} />
                <TextField id="dateOfBirth" sx={{ m: '10px' }} variant="outlined" name="dateOfBirth" label="Date of Birth" onChange={(event) => setDateOfBirth(event.target.value)} />
                <TextField id="email" sx={{ m: '10px' }} variant="outlined" name="email" label="Email" onChange={(event) => setEmail(event.target.value)} />
                <TextField id="username" sx={{ m: '10px' }} variant="outlined" name="username" label="Username" onChange={(event) => setUsername(event.target.value)} />
                <TextField id="password" sx={{ m: '10px' }} variant="outlined" name="password" label="Password" onChange={(event) => setPassword(event.target.value)} />
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: '10px' }}>
                    <Button type="submit" variant='contained' color='success' sx={{ width: '50%' }}>Create</Button>
                </Box>
            </form>
            <Link to='/user-all'>
                <Button sx={{ m: '10px', mb: '20px' }} variant='contained' color='primary'>
                    <KeyboardReturnIcon fontSize="small" sx={{ mr: '10px' }} />
                    Back
                </Button>
            </Link>
        </>
    )
}

export default UserAdd