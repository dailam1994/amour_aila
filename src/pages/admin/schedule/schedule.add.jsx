import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Button, TextField, Typography } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TimePicker from '@mui/lab/TimePicker'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import { useAddSchedule } from '../../../hooks/admin/schedule/useSchedule.add'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#b39ddb',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: '#ede7f6 !important',
                },
            },
        },
    },
})

const ScheduleAdd = () => {
    const { date } = useParams()
    const [start, setStart] = useState(new Date(date + ' ' + '06:00'))
    const [end, setEnd] = useState(new Date(date + ' ' + '18:00'))

    const { mutate } = useAddSchedule()

    const handleSubmit = (event) => {
        event.preventDefault()
        const startTime = new Date(start).toLocaleTimeString()
        const endTime = new Date(end).toLocaleTimeString()

        const schedule = { date, startTime: startTime, endTime: endTime }
        mutate(schedule)
    }

    return (
        <>
            <Typography sx={{ m: '10px' }} variant='h4'>
                <strong>Set Time</strong>
            </Typography>
            <Typography sx={{ m: '10px' }} variant='subtitle1' color='primary'>
                <strong>{date}</strong>
            </Typography>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px', backgroundColor: '#671E15' }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <ThemeProvider theme={theme}>
                        <Box style={{ margin: '10px' }}>
                            <TimePicker
                                label="Start Time"
                                value={start}
                                onChange={(value) => setStart(value)}
                                renderInput={(params) => <TextField {...params} sx={{ input: { color: '#d1c4e9' } }} />}
                            />
                        </Box>
                        <Box style={{ margin: '10px' }}>
                            <TimePicker
                                label="End Time"
                                value={end}
                                onChange={(value) => setEnd(value)}
                                renderInput={(params) => <TextField {...params} sx={{ input: { color: '#d1c4e9' } }} />}
                            />
                        </Box>
                    </ThemeProvider>
                </LocalizationProvider>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: '10px' }}>
                    <Button type="submit" variant='contained' color='success' sx={{ width: '100%' }}>Create</Button>
                </Box>
            </form>
            <Link to='/schedule-all'>
                <Button sx={{ m: '10px', mb: '20px' }} variant='contained' color='primary'>
                    <KeyboardReturnIcon fontSize="small" sx={{ mr: '10px' }} />
                    Back
                </Button>
            </Link>
        </>
    )
}

export default ScheduleAdd