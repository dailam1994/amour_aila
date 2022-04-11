import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Button, CircularProgress, Container, TextField, Typography } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TimePicker from '@mui/lab/TimePicker'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import { ThemeProvider, createTheme } from '@mui/material'
import { useEditSchedule } from '../../../hooks/admin/schedule/useSchedule.edit'
import { useScheduleData } from '../../../hooks/admin/schedule/useSchedule.single'

const theme = createTheme({
    components: {
        // Mui: {
        //     styleOverrides: {
        //         disabled: {
        //             borderColor: '#b39ddb',
        //         },
        //     },
        // },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#b39ddb',
                    "&.Mui-disabled": {
                        "color": "#fff176"
                    }
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: '#ede7f6 !important',
                    // "&.Mui-disabled": {
                    //     "borderColor": "#fff176"
                    // }
                },
                "root": {
                    "&.Mui-disabled": {
                        "borderColor": "#b39ddb"
                    }
                }
            },
        },
    },
})

const ScheduleEdit = () => {
    const { id } = useParams()
    const { isLoading, isError, error, data, isFetching } = useScheduleData(id)
    const [date, setDate] = useState(new Date().toDateString())
    const [start, setStart] = useState(new Date(date + ' ' + '06:00'))
    const [end, setEnd] = useState(new Date(date + ' ' + '18:00'))

    useEffect(() => {
        if (data) {
            setDate(new Date(data.date).toDateString())
            setStart(data.startTime)
            setEnd(data.endTime)
        }
    }, [data])

    const { mutate } = useEditSchedule()

    const handleSubmit = (event) => {
        event.preventDefault()
        const convertDate = new Date(date).toDateString()
        const startTime = new Date(start).toLocaleTimeString()
        const endTime = new Date(end).toLocaleTimeString()

        const schedule = { availabilityID: id, date: convertDate, startTime: startTime, endTime: endTime }
        mutate(schedule)
    }

    return (
        <>
            <Typography sx={{ m: '10px' }} variant='h4'>
                <strong>Edit Schedule</strong>
            </Typography>
            {(isLoading || isFetching) ? <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}><CircularProgress color="secondary" /></Box>
                : isError ? <Container sx={{ display: 'flex', justifyContent: 'center' }}><Typography style={{ color: 'white' }}>Error: {error.message}</Typography></Container>
                    : data ? (
                        <>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px', backgroundColor: '#671E15' }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <ThemeProvider theme={theme}>
                                        <Box style={{ margin: '10px' }}>
                                            <Typography sx={{ m: '10px', color: '#ede7f6' }} variant='h5'>
                                                <strong>{date}</strong>
                                            </Typography>
                                        </Box>
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
                                    <Button type="submit" variant='contained' color='success' sx={{ width: '100%' }}>Confirm</Button>
                                </Box>
                            </form>
                        </>
                    ) : null
            }
            <Link to='/schedule-view'>
                <Button sx={{ m: '10px', mb: '20px' }} variant='contained' color='primary'>
                    <KeyboardReturnIcon fontSize="small" sx={{ mr: '10px' }} />
                    Back
                </Button>
            </Link>
        </>
    )
}

export default ScheduleEdit