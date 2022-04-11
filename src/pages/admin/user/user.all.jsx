import React from 'react'
import { Link } from 'react-router-dom'
import {
    Box, Button, CircularProgress, Container, Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Typography
} from '@mui/material'
import { useUserAllData } from '../../../hooks/admin/user/useUser.all'

const UserAll = () => {
    const { isLoading, isError, error, data, isFetching } = useUserAllData()

    return (
        <>
            <Typography sx={{ m: '10px' }} variant='h4'>
                <strong>Account Management</strong>
            </Typography>
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link to='/user-add'>
                    <Button variant='contained' color='success'>Create New User</Button>
                </Link>
            </Container>
            <Box sx={{ m: '10px' }}>
                <TableContainer component={Paper} style={{ maxHeight: 373, overflow: 'auto' }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: 'rgb(0,0,0)' }}><strong>Clients</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(isLoading || isFetching) ? <TableRow sx={{ display: 'flex', justifyContent: 'center' }}><TableCell><CircularProgress color="secondary" /></TableCell></TableRow>
                                : isError ? <TableRow sx={{ display: 'flex', justifyContent: 'center' }}><TableCell><Typography style={{ color: 'rgb(0,0,0)' }}>Error: {error.message}</Typography></TableCell></TableRow>
                                    : data ? data.map((item) => {
                                        return (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={item.userID}>
                                                <TableCell component="th" scope="row" sx={{ my: 0, py: 0, px: '5px', textAlign: 'center' }}>
                                                    <Link to={`/user-single/${item.userID}`} style={{ color: 'rgb(0,0,0)' }}>{item.firstName} {item.lastName}</Link>
                                                </TableCell>
                                                <TableCell component="th" scope="row" sx={{ display: 'flex', justifyContent: 'flex-end', pr: '5px', my: 0, py: 0 }}>
                                                    <Link to={`/user-edit/${item.userID}`}>
                                                        <Button variant='contained' color='warning'>Edit</Button>
                                                    </Link>
                                                    <Link style={{ 'marginLeft': '3px', 'marginRight': '0', float: 'right' }} to={`/user-delete/${item.userID}`}>
                                                        <Button variant='contained' color='error'>Delete</Button>
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }) : null
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default UserAll