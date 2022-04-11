import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useEditUser } from '../../../hooks/admin/user/useUser.edit'
import { useUserData } from '../../../hooks/admin/user/useUser.single'

const UserEdit = () => {
    const { id } = useParams()
    const { isLoading, isError, error, data, isFetching } = useUserData(id)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [roles, setRoles] = useState('')

    useEffect(() => {
        if (data) {
            setFirstName(data.firstName)
            setLastName(data.lastName)
            setDateOfBirth(data.dateOfBirth)
            setEmail(data.email)
            setUsername(data.username)
            setPassword(data.password)
            setRoles(data.roles)
        }
    }, [data])

    const { mutate } = useEditUser()

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = { userID: id, firstName, lastName, dateOfBirth, email, username, password, roles }
        mutate(user)
    }

    return (
        <>
            <Typography sx={{ m: '10px' }} variant='h4'>
                <strong>Edit User</strong>
            </Typography>
            {(isLoading || isFetching) ? <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}><CircularProgress color="secondary" /></Box>
                : isError ? <Container sx={{ display: 'flex', justifyContent: 'center' }}><Typography style={{ color: 'white' }}>Error: {error.message}</Typography></Container>
                    : data ? (
                        <>
                            <form onSubmit={handleSubmit} style={{
                                display: 'flex', flexDirection: 'column',
                                backgroundColor: 'rgb(50,53,101)', padding: '20px 10px', margin: '10px 30px', borderRadius: '10px'
                            }}>
                                <TextField id="firstName" color='primary' sx={{ m: '10px' }} variant="outlined"
                                    name="firstName" label={data.firstName} onChange={(event) => setFirstName(event.target.value)} />
                                <TextField id="lastName" color='primary' sx={{ m: '10px' }} variant="outlined"
                                    name="lastName" label={data.lastName} onChange={(event) => setLastName(event.target.value)} />
                                <TextField id="dateOfBirth" color='primary' sx={{ m: '10px' }} variant="outlined"
                                    name="dateOfBirth" label="Date of Birth" onChange={(event) => setDateOfBirth(event.target.value)} />
                                <TextField id="email" color='primary' sx={{ m: '10px' }} variant="outlined"
                                    name="email" label={data.email} onChange={(event) => setEmail(event.target.value)} />
                                <TextField id="username" color='primary' sx={{ m: '10px' }} variant="outlined"
                                    name="username" label={data.username} onChange={(event) => setUsername(event.target.value)} />
                                <TextField id="password" color='primary' sx={{ m: '10px' }} variant="outlined"
                                    name="password" label="Password" onChange={(event) => setPassword(event.target.value)} />
                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: '10px' }}>
                                    <Button variant='contained' color="warning" type="submit" sx={{ width: '50%' }}>Edit</Button>
                                </Box>
                            </form>
                        </>
                    ) : null
            }
            <Link to='/user-all'>
                <Button sx={{ m: '10px', mb: '20px' }} variant='contained' color='primary'>
                    <KeyboardReturnIcon fontSize="small" sx={{ mr: '10px' }} />
                    Back
                </Button>
            </Link>
        </>
    )
}

export default UserEdit