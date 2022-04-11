import React from 'react'
import { Link } from 'react-router-dom'
import {
    Box, Button, CircularProgress, Paper, Table, TableBody, TableCell,
    TableContainer, TableRow, Typography
} from '@mui/material'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import { useScheduleViewData } from '../../../hooks/admin/schedule/useSchedule.view'

const ScheduleView = () => {
    const { isLoading, isError, error, data, isFetching } = useScheduleViewData()

    return (
        <>
            <Typography sx={{ m: '10px' }} variant='h4'>
                <strong>ALL Schedules</strong>
            </Typography>
            <Box sx={{ m: '10px' }}>
                <TableContainer component={Paper} style={{ maxHeight: 373, overflow: 'auto' }}>
                    <Table aria-label="simple table">
                        <TableBody>
                            {(isLoading || isFetching) ? <TableRow sx={{ display: 'flex', justifyContent: 'center' }}><TableCell><CircularProgress color="secondary" /></TableCell></TableRow>
                                : isError ? <TableRow sx={{ display: 'flex', justifyContent: 'center' }}><TableCell><Typography style={{ color: 'rgb(0,0,0)' }}>Error: {error.message}</Typography></TableCell></TableRow>
                                    : data ? data.map((item) => {
                                        return (
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={item.availabilityID}>
                                                <TableCell component="th" scope="row" sx={{ my: 0, py: 0, px: '5px', textAlign: 'center' }}>
                                                    <Typography variant="subtitle2" style={{ color: 'rgb(0,0,0)' }}>{
                                                        (new Date().toDateString() === new Date(item.date).toDateString())
                                                            ? <strong>{new Date(item.date).toDateString()}</strong>
                                                            : new Date(item.date).toDateString()
                                                    }
                                                    </Typography>
                                                </TableCell>
                                                <TableCell component="th" scope="row" sx={{ display: 'flex', justifyContent: 'flex-end', px: '5px', my: 0, py: 0 }}>
                                                    <Link to={`/schedule-edit/${item.availabilityID}`}>
                                                        <Button size='small' variant='contained' color='warning'>Edit</Button>
                                                    </Link>
                                                    <Link style={{ 'marginLeft': '3px', 'marginRight': '0', float: 'right' }} to={`/schedule-delete/${item.availabilityID}`}>
                                                        <Button size='small' variant='contained' color='error'>Delete</Button>
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
            <Link to='/schedule-all'>
                <Button sx={{ m: '10px', mb: '20px' }} variant='contained' color='primary'>
                    <KeyboardReturnIcon fontSize="small" sx={{ mr: '10px' }} />
                    Back
                </Button>
            </Link>
        </>
    )
}

export default ScheduleView